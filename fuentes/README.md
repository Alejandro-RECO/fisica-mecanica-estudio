# Fuentes

Material crudo del curso. **Esta carpeta es de solo lectura para todo el sistema: nunca se edita,
nunca se corrige, nunca se "limpia".**

Si una foto salió borrosa, se toma otra y se guarda aparte. No se arregla el archivo: la trazabilidad
del contenido depende de que lo que está aquí sea exactamente lo que se vio en clase.

## Nombres

```
YYYY-MM-DD_<que-es>_crudo.<ext>
```

| Ejemplo | Qué es | Autoridad |
|---|---|---|
| `2026-08-28_diapositivas_crudo.pdf` | Presentación de la docente | 1a — la más alta |
| `2026-08-28_tablero_crudo.jpg` | Foto del tablero | 1b — corrige o amplía la diapositiva |
| `2026-08-28_apuntes_crudo.md` | Apuntes propios de lo que dijo | 1c |
| `2026-08-28_taller_crudo.pdf` | Enunciado de un taller | 1a |

Si hay varias fotos de la misma clase, se numeran: `_tablero-1_crudo.jpg`, `_tablero-2_crudo.jpg`.

## Dos cosas que hay que atajar antes de fichar

- **Las presentaciones en `.pptx` no se pueden leer.** Hay que exportarlas a PDF primero. No es un
  capricho: la herramienta de lectura no abre PowerPoint.
- **Una imagen pegada al chat no le sirve al agente.** Vive en la conversación, no en disco. Tiene
  que guardarse aquí como archivo para que `curador-clase` la lea y para que la lección pueda citarla.

## Por qué esto se versiona en git

Una lección que cita `2026-08-28_tablero_crudo.jpg` pierde el sentido si ese archivo desapareció. La
trazabilidad no sirve a medias. Si el repositorio pesa demasiado, se comprimen las imágenes — no se
borran.
