# Mapa de unidades

Las unidades del curso, su orden y sus dependencias. **Este archivo se deriva del temario de las
presentaciones de la docente**, no de un programa genérico: cuando se fiche el primer material, se
corrige contra lo que ella realmente dicta.

Lo de abajo es un andamio provisional basado en el temario estándar de Física Mecánica. Sirve para
que `curador-clase` tenga dónde clasificar desde la primera clase, y se ajusta apenas haya
diapositivas.

| id | Unidad | Depende de | Estado |
|---|---|---|---|
| `unidades-y-dimensiones` | Unidades, análisis dimensional, notación científica | — | sin material |
| `cinematica-1d` | Movimiento en una dimensión | `unidades-y-dimensiones` | sin material |
| `cinematica-2d` | Movimiento en el plano, proyectiles, movimiento circular | `cinematica-1d` | sin material |
| `dinamica` | Leyes de Newton, fuerzas, fricción, plano inclinado | `cinematica-2d` | sin material |
| `trabajo-y-energia` | Trabajo, energía cinética y potencial, conservación | `dinamica` | sin material |
| `momentum` | Cantidad de movimiento, impulso, choques | `trabajo-y-energia` | sin material |

**Estados posibles:** `sin material` · `en curso` · `completa` · `con dudas abiertas`

## Cómo se usa

- `curador-clase` clasifica cada tema de una clase contra esta tabla. Si un tema no encaja en ninguna
  unidad, lo reporta en vez de forzarlo.
- Las dependencias importan para el orden de estudio: una lección de dinámica que presupone
  cinemática lo declara en su `prerrequisitos[]`.
- La **unidad piloto del MVP** sale de aquí: la primera con material suficiente entre lo que se
  cargue.

## Pendiente

Corregir esta tabla contra el temario real de las diapositivas apenas se fiche la primera clase. Los
ids no cambian a la ligera: son parte de las rutas del sitio.
