# Mapa de unidades

Derivado del material real de la docente en `fuentes/precentaciones/`. **Adriana Blandón Pedraza,
UCompensar, agosto de 2026.**

El orden de abajo sale de los nombres de archivo y de una lectura parcial de las presentaciones. Se
confirma y se corrige al fichar cada clase con `/capturar-clase`.

| id | Unidad | Presentación fuente | Páginas | Formato | Estado |
|---|---|---|---|---|---|
| `cantidades-y-unidades` | Cantidades físicas, patrones y sistemas de unidades | `semana1.pdf`, `Introduccion.pdf` | 26 + 18 | texto | sin fichar |
| `incertidumbre` | Medición e incertidumbre | `incertidumbre_practica1.pdf` | 15 | imágenes | sin fichar |
| `vectores` | Vectores: componentes, suma, producto | `VectoresFisica.pdf` | 28 | imágenes | sin fichar |
| `calculo-para-fisica` | Derivadas y primitivas como herramienta | `derivadasyprimitivasprint.pdf` | 35 | texto | sin fichar |
| `cinematica-1d` | Movimiento, sistema de referencia, velocidad y aceleración | `cinematica1.pdf` | 24 | imágenes | **piloto** |
| `graficas-cinematica` | Lectura e interpretación de gráficas x-t y v-t | `graficas de cinematica1.pdf` | 9 | imágenes | sin fichar |

**Total: 155 páginas.**

**Estados posibles:** `sin fichar` · `en curso` · `completa` · `con dudas abiertas`

## La unidad piloto

`cinematica-1d`, por tres razones: es el núcleo de la materia, es lo más reciente que se dictó, y
junto con `graficas-cinematica` forma un bloque de 33 páginas — suficiente para 4 a 6 lecciones sin
ser inabarcable en una corrida.

`calculo-para-fisica` no es una unidad de física sino la herramienta matemática que las demás
necesitan. Sus lecciones se citan como prerrequisito desde cinemática, no se estudian sueltas.

## Nota sobre el formato de las fuentes

Cuatro de las siete presentaciones son **PDF de imágenes**: extraer texto de `cinematica1.pdf`
devuelve catorce caracteres. Hay que renderizarlas con `herramientas/render-pdf.py` antes de leerlas.
Las de texto (`semana1`, `Introduccion`, `derivadasyprimitivas`) se pueden leer directo y sale más
fiel.

## Cómo se usa

- `curador-clase` clasifica cada tema contra esta tabla. Si un tema no encaja, lo reporta en vez de
  forzarlo.
- Las dependencias importan para el orden de estudio: una lección que presupone vectores lo declara
  en su `prerrequisitos[]`.
- Los ids **no cambian a la ligera**: son parte de las rutas del sitio.
