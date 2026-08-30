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
