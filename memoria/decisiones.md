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
- **2026-08-30** — Trigonometría en español: se escribe `sen`, no `sin`. KaTeX no trae `\sen`, así
  que va como `\operatorname{sen}`. Fijado al aparecer la primera función trigonométrica del sitio,
  en `05-analisis-dimensional`.
- **2026-08-30** — Una contradicción entre fuentes se declara en **una sola** lección, la que la
  origina, y las demás remiten a ella. `[leccion].astro` renderiza `<Disputa>` automáticamente desde
  el frontmatter, así que declararla en varias la repite en pantalla. La del separador decimal vive
  en `03-notacion-cientifica-y-prefijos`.
- **2026-08-30** — Lo verificado contra una URL leída en la sesión sube de `tipo: deduccion` a
  `tipo: abierta` con `ref` y `fecha`. Dominios ya usados: `nist.gov` y `openstax.org`, permitidos en
  `.claude/settings.json` para que no haya que reaprobarlos.
