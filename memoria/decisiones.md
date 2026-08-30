# Decisiones

Append-only. Una línea por decisión, con fecha. Solo entra lo que se va a volver a preguntar: si
mañana alguien vuelve a discutir esto, aquí está la respuesta y no se rediscute.

No entra el razonamiento que llevó a la decisión, solo la decisión.

- **2026-08-30** — El sitio se construye con Astro + MDX + KaTeX. Content collections con Zod, no un
  archivo de datos en JS: el índice se deriva con `getCollection()` y deja de haber dos verdades.
- **2026-08-30** — Este proyecto es independiente: no hereda código, diseño ni contenido de ningún
  otro proyecto de la materia.
- **2026-08-30** — La dirección visual la establece `frontend-design` desde cero, y queda registrada
  aquí con valores concretos apenas se defina. PENDIENTE hasta que se construya la primera vista.
- **2026-08-30** — Los dos modos de estudio son un toggle CSS sobre el mismo contenido
  (`.solo-esencial .amplia { display: none }`), no dos rutas. Dos rutas garantizan que una se
  desactualice.
- **2026-08-30** — `estado`, `confianza` y `revision` los escribe solo el orquestador. Zod exige
  `revision.fecha` para permitir `validado`, así que una lección no revisada rompe el build.
- **2026-08-30** — La presentación de la docente es autoridad de nivel 1a; el tablero, 1b. Un
  conflicto entre ambos no se cierra sin preguntarle a ella.
- **2026-08-30** — `Read` no abre PDFs en esta máquina (falta poppler) y cuatro de las siete
  presentaciones son PDF de imágenes. Se renderizan con `herramientas/render-pdf.py`, que usa
  PyMuPDF (ya instalado). No se instala poppler: no hace falta.
- **2026-08-30** — La unidad piloto es `cinematica-1d`. Es el núcleo de la materia, es lo más
  reciente dictado, y con `graficas-cinematica` forma un bloque de 33 páginas.
- **2026-08-30** — **Revocada la anterior**: el piloto pasa a ser `magnitudes-y-medicion`. El
  programa la pone en la semana 1 y el Parcial 1 es del 31 ago al 4 sep. Cinemática entra después.
- **2026-08-30** — `Introduccion.pdf` es el syllabus, no contenido de física: alimenta `docs/` y no
  genera ninguna lección. Clasificarlo como material de estudio habría producido una "lección" sobre
  reglas administrativas.
- **2026-08-30** — Las unidades del sitio salen del programa oficial de 16 semanas, no de los
  nombres de archivo de las presentaciones. Son ocho y sus ids no cambian: son rutas.
- **2026-08-30** — Bibliografía del curso: Tipler, Young & Freedman, Serway, Fishbane. No se tienen
  los libros, así que **no se citan páginas**; se usan para saber qué convención esperar. Ver
  `docs/bibliografia.md`.
- **2026-08-30** — ~~Trigonometría en español: se escribe `sen`, no `sin`.~~ **Revocada el mismo día**,
  ver la línea de abajo. Se fijó cuando ninguna fuente del curso resolvía el punto.
- **2026-08-30** — Trigonometría: se escribe **`sin`**, con `\sin` de KaTeX. `VectoresFisica.pdf`
  dia. 22 lo escribe así en la plantilla Beamer de la docente (`C = AB sin θ`), y ella es la
  autoridad final aunque la convención del español sea `sen`. El único `sen` del PDF está en un
  objeto pegado de otra herramienta. La duda sigue abierta en `dudas.md` porque `\sin` es el
  comando por defecto de LaTeX y pudo no ser una elección suya.
- **2026-08-30** — Una contradicción entre fuentes se declara en **una sola** lección, la que la
  origina, y las demás remiten a ella. `[leccion].astro` renderiza `<Disputa>` automáticamente desde
  el frontmatter, así que declararla en varias la repite en pantalla. La del separador decimal vive
  en `03-notacion-cientifica-y-prefijos`.
- **2026-08-30** — Lo verificado contra una URL leída en la sesión sube de `tipo: deduccion` a
  `tipo: abierta` con `ref` y `fecha`. Dominios ya usados: `nist.gov` y `openstax.org`, permitidos en
  `.claude/settings.json` para que no haya que reaprobarlos.
- **2026-08-30** — **Convención angular de todo el sitio:** θ se mide **desde el eje x positivo, en
  sentido antihorario, con rango completo de 0° a 360°**, y en **grados**. Es suposición del
  proyecto, no de la docente: en las 28 diapositivas de `VectoresFisica.pdf` no hay un solo ángulo
  con valor numérico. Se declara en cada lección que la use y la duda está abierta en `dudas.md`.
  El rango completo no es un detalle: sin él, θ_A = θ_B no distingue un vector de su opuesto.
- **2026-08-30** — Los vectores se escriben **con flecha** (`\vec{A}`), nunca en negrita, y la
  magnitud es la misma letra sin flecha. Es la notación de la docente en las 28 diapositivas.
  OpenStax usa negrita **y** flecha; gana ella. Los unitarios llevan sombrero.
