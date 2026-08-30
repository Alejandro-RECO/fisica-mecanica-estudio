/**
 * Abre el sitio en un navegador real y guarda capturas.
 *
 * Por que existe: revisar CSS leyendo CSS no sirve. Una barra de fraccion
 * montada sobre el texto solo se ve mirando la pagina, y adivinar la causa
 * desde la hoja de estilos cuesta mas que abrir el navegador.
 *
 * Uso:
 *   node herramientas/revisar-ui.mjs
 *   node herramientas/revisar-ui.mjs --url http://localhost:4321/otra/ruta/
 */

import { mkdirSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const RAIZ = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

// playwright vive en sitio/node_modules, no en la raiz: se resuelve a mano.
const { chromium } = await import(
  pathToFileURL(path.join(RAIZ, 'sitio', 'node_modules', 'playwright', 'index.mjs')).href
);
const SALIDA = path.join(RAIZ, '.render', 'ui');
const BASE = 'http://localhost:4321';

const VISTAS = [
  { nombre: 'portada', url: '/' },
  { nombre: 'unidad', url: '/unidad/cinematica-1d/' },
  { nombre: 'leccion', url: '/unidad/cinematica-1d/03-velocidad-media-e-instantanea/' },
  { nombre: 'buscar', url: '/buscar/' },
];

const PANTALLAS = [
  { nombre: 'ancha', width: 1680, height: 1000 },
  { nombre: 'portatil', width: 1280, height: 900 },
  { nombre: 'movil', width: 390, height: 844 },
];

mkdirSync(SALIDA, { recursive: true });

const navegador = await chromium.launch();
const problemas = [];

for (const tema of ['light', 'dark']) {
  for (const pantalla of PANTALLAS) {
    const ctx = await navegador.newContext({
      viewport: { width: pantalla.width, height: pantalla.height },
      colorScheme: tema,
      deviceScaleFactor: 1,
    });
    const pagina = await ctx.newPage();

    pagina.on('console', (m) => {
      if (m.type() === 'error') problemas.push(`consola ${pantalla.nombre}/${tema}: ${m.text()}`);
    });
    pagina.on('requestfailed', (r) =>
      problemas.push(`peticion fallida ${pantalla.nombre}/${tema}: ${r.url().slice(0, 110)}`),
    );

    for (const vista of VISTAS) {
      // En movil solo hace falta la leccion: es la vista densa.
      if (pantalla.nombre === 'movil' && vista.nombre !== 'leccion') continue;
      if (tema === 'light' && pantalla.nombre !== 'ancha' && vista.nombre !== 'leccion') continue;

      // Se revisa con el menu desplegado Y plegado: plegarlo es justo donde
      // el layout se rompia antes.
      for (const menu of ['abierto', 'plegado']) {
        await pagina.goto(BASE + vista.url, { waitUntil: 'networkidle' });
        await pagina.evaluate((m) => {
          document.documentElement.classList.toggle('nav-oculta', m === 'plegado');
        }, menu);
        await pagina.evaluate(() => document.fonts.ready);

        await pagina.screenshot({
          path: path.join(SALIDA, `${vista.nombre}-${pantalla.nombre}-${tema}-${menu}.png`),
          fullPage: vista.nombre !== 'leccion',
        });

        // Desborde horizontal: el cuerpo nunca debe desplazarse en x.
        const desborde = await pagina.evaluate(
          () => document.documentElement.scrollWidth > document.documentElement.clientWidth + 1,
        );
        if (desborde) problemas.push(`desborde horizontal · ${vista.nombre}/${pantalla.nombre}/${menu}`);

        // Columna de lectura aplastada: el sintoma de la rejilla rota.
        const angosto = await pagina.evaluate(() => {
          const p = document.querySelector('.contenido p, .contenido li');
          return p ? Math.round(p.getBoundingClientRect().width) : 999;
        });
        if (angosto < 240)
          problemas.push(
            `columna de ${angosto}px · ${vista.nombre}/${pantalla.nombre}/${menu} — texto aplastado`,
          );

        // Alineacion: todo bloque de la rejilla arranca en el mismo borde
        // izquierdo. Si uno se sale, la colocacion en la rejilla fallo.
        const desalineados = await pagina.evaluate(() => {
          const hijos = [...document.querySelectorAll('.contenido > *')].filter(
            (e) => e.getBoundingClientRect().width > 0,
          );
          if (hijos.length < 2) return [];
          const izq = hijos.map((e) => Math.round(e.getBoundingClientRect().left));
          const base = izq.sort((a, b) => a - b)[Math.floor(izq.length / 2)];
          return hijos
            .filter((e) => Math.abs(Math.round(e.getBoundingClientRect().left) - base) > 2)
            .map((e) => `${e.tagName.toLowerCase()}.${e.className.split(' ')[0] || '-'}`)
            .slice(0, 4);
        });
        for (const d of desalineados)
          problemas.push(`desalineado ${d} · ${vista.nombre}/${pantalla.nombre}/${menu}`);
      }
    }

    await ctx.close();
  }
}

// Medicion concreta de una fraccion: si el numerador y el denominador se
// solapan, la altura de la caja es menor que la suma de sus partes.
const ctx = await navegador.newContext({ viewport: { width: 1280, height: 900 } });
const pagina = await ctx.newPage();
await pagina.goto(BASE + '/unidad/cinematica-1d/03-velocidad-media-e-instantanea/', {
  waitUntil: 'networkidle',
});
await pagina.evaluate(() => document.fonts.ready);

const fraccion = await pagina.evaluate(() => {
  const f = document.querySelector('.katex .mfrac');
  if (!f) return null;
  const caja = f.getBoundingClientRect();
  const display = f.closest('.katex-display');
  const cs = (el) => (el ? getComputedStyle(el) : null);
  const dz = cs(display);
  return {
    altoFraccion: Math.round(caja.height),
    altoDisplay: display ? Math.round(display.getBoundingClientRect().height) : null,
    overflowY: dz?.overflowY,
    lineHeightDisplay: dz?.lineHeight,
    lineHeightKatex: cs(f.closest('.katex'))?.lineHeight,
    fuenteKatex: cs(f.closest('.katex'))?.fontFamily?.slice(0, 40),
    fuenteCargada: document.fonts.check('1em KaTeX_Main'),
  };
});

console.log('--- fraccion ---');
console.log(JSON.stringify(fraccion, null, 2));

await ctx.close();
await navegador.close();

console.log('\n--- problemas ---');
console.log(problemas.length ? problemas.join('\n') : 'ninguno');
console.log(`\ncapturas en .render/ui/`);
