# Mapa de unidades

Derivado del **programa oficial** de la docente (`fuentes/precentaciones/Introduccion.pdf`, p. 7–8).
No es un temario genérico: es el que ella dicta.

**Adriana Lizeth Blandón Pedraza · UCompensar · 16 semanas · 3 créditos.**
Prerrequisitos del curso: Cálculo Diferencial e Integral.

## El programa, semana por semana

| Sem | Contenidos del programa | Unidad |
|---|---|---|
| 1 | Magnitud, cantidad y unidades de medida. Análisis dimensional, SI, notación científica, cifras significativas, medición | `magnitudes-y-medicion` |
| 2 | Magnitud escalar y vectorial. Posición, desplazamiento, velocidad media e instantánea, aceleración media e instantánea, análisis de gráficas | `vectores` + `cinematica-1d` |
| 3 | Movimiento rectilíneo uniforme y uniformemente acelerado | `cinematica-1d` |
| 4 | Movimiento vertical. Caída libre | `cinematica-1d` |
| 5 | Movimiento en dos dimensiones, tiro parabólico | `cinematica-2d` |
| 6 | Movimiento circular uniforme, velocidad y aceleración tangencial, aceleración centrípeta | `cinematica-2d` |
| 7 | Fuerzas y Leyes de Newton | `dinamica` |
| 8 | Fricción y planos inclinados. Segunda ley aplicada a movimiento circular | `dinamica` |
| 9 | Trabajo de fuerzas constantes | `trabajo-y-energia` |
| 10 | Trabajo de fuerzas variables | `trabajo-y-energia` |
| 11 | Energía cinética | `trabajo-y-energia` |
| 12 | Energía potencial | `trabajo-y-energia` |
| 13 | Conservación de la energía mecánica | `trabajo-y-energia` |
| 14 | Potencia y máquinas simples | `trabajo-y-energia` |
| 15 | Impulso y colisiones 1D/2D | `impulso-y-colisiones` |
| 16 | Sustentación final y cierre | — |

## Las unidades

| id | Unidad | Semanas | Material disponible | Estado |
|---|---|---|---|---|
| `magnitudes-y-medicion` | Magnitudes, unidades y medición | 1 | `semana1.pdf` (26 p, texto) · `incertidumbre_practica1.pdf` (15 p, imágenes) | `semana1.pdf` fichado y con 5 lecciones publicadas; **falta `incertidumbre_practica1.pdf`**, que cubre la parte de medición del programa |
| `calculo-para-fisica` | Derivadas y primitivas como herramienta | transversal | `derivadasyprimitivasprint.pdf` (35 p, texto) | sin fichar |
| `vectores` | Magnitudes escalares y vectoriales | 2 | `VectoresFisica.pdf` (28 p, imágenes) | **fichado** (`memoria/sesiones/2026-08-30-vectores.md`) y con **6 lecciones publicadas**. El PDF queda agotado: define todo y **no resuelve un solo ejemplo numérico** |
| `cinematica-1d` | Movimiento en una dimensión | 2–4 | `cinematica1.pdf` (24 p, imágenes) · `graficas de cinematica1.pdf` (9 p, imágenes) | sin fichar |
| `cinematica-2d` | Movimiento en el plano | 5–6 | — | sin material |
| `dinamica` | Fuerzas y leyes de Newton | 7–8 | — | sin material |
| `trabajo-y-energia` | Trabajo, energía y potencia | 9–14 | — | sin material |
| `impulso-y-colisiones` | Impulso y colisiones | 15 | — | sin material |

`calculo-para-fisica` no es una unidad de física sino la herramienta matemática que las demás
necesitan. Sus lecciones se citan como prerrequisito, no se estudian sueltas.

## Qué entra en cada parcial

**Deducido por fecha, no dicho por la docente.** Conviene confirmarlo en clase.

| Parcial | Fechas | Semanas que alcanzan a verse |
|---|---|---|
| 1 | 31 ago – 4 sep | 1 a 3 aprox: magnitudes, medición, vectores, cinemática 1D |
| 2 | 5 – 9 oct | 4 a 8 aprox: caída libre, 2D, circular, Newton, fricción |
| 3 | 9 – 13 nov | 9 a 15 aprox: trabajo, energía, potencia, impulso |

## Nota sobre el formato de las fuentes

Cuatro de las siete presentaciones son **PDF de imágenes**: extraer texto de `cinematica1.pdf`
devuelve catorce caracteres. Hay que renderizarlas con `herramientas/render-pdf.py`. Las de texto
(`semana1`, `Introduccion`, `derivadasyprimitivas`) se leen directo y sale más fiel.

## Cómo se usa

- `curador-clase` clasifica cada tema contra esta tabla. Si un tema no encaja, lo reporta en vez de
  forzarlo.
- Los ids **no cambian a la ligera**: son parte de las rutas del sitio.
- Cada unidad lleva en su frontmatter el `bloque` con el que se agrupa en el menú —`Fundamentos`,
  `Cinemática`, `Dinámica y energía`— y la etiqueta `semanas` de esta misma tabla. El menú deriva los
  grupos de ahí, así que una unidad nueva se acomoda sola.
- **La ficha de una unidad sin material fichado no lleva prosa propia:** solo las filas del programa
  que le corresponden y una línea diciendo que falta el material. Escribir de qué trata una unidad
  cuya presentación nadie ha leído es memoria del modelo con formato de fuente.
