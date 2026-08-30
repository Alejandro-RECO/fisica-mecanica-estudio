---
name: capturar-clase
description: Ficha el material de una clase recién vista y lo deja listo para generar contenido. Úsalo cuando el usuario diga "/capturar-clase", "tengo una foto del tablero", "acabo de salir de clase", "ya subí las diapositivas" o pegue apuntes de una sesión.
---

# Capturar clase

**Argumento:** la fecha de la clase. Si no la dan, es hoy.

Esta skill **ficha, no enseña**. Al terminar existe una ficha de sesión y una idea clara de qué
lección toca generar — pero ninguna lección se escribe aquí. Eso es `/unidad`.

## Flujo

### 1. Lee lo mínimo

`memoria/estado.md` y `docs/mapa-unidades.md`. Nada más. No leas fichas viejas ni lecciones.

### 2. Verifica que el material esté en disco

Lista `fuentes/` para esa fecha. El nombre canónico es:

```
YYYY-MM-DD_<que-es>_crudo.<ext>

2026-08-28_diapositivas_crudo.pdf     presentación de la docente
2026-08-28_tablero_crudo.jpg          foto del tablero
2026-08-28_apuntes_crudo.md           apuntes propios
2026-08-28_taller_crudo.pdf           enunciado de un taller
```

Tres cosas que hay que atajar aquí, no después:

| Situación | Qué haces |
|---|---|
| Pegó una imagen al chat | **No sirve para el agente**: vive en tu contexto, no en disco. Pídele que la guarde en `fuentes/` |
| La fuente es un **PDF** | `Read` no abre PDFs aquí. Se renderiza con `python herramientas/render-pdf.py <ruta>` y se leen los PNG de `.render/` |
| La presentación es `.pptx` | Nada la convierte en esta máquina. Pídela exportada a PDF |

El nombre canónico es lo deseable, pero **no bloquees por eso**: si el archivo ya está en `fuentes/`
con otro nombre, se ficha igual y la ruta real queda en `fuentes[].ref`. Lo que importa es que la
lección pueda señalar de dónde salió cada afirmación.

### 3. Lanza `curador-clase`

Pásale las rutas de las fuentes y la fecha. Él ficha; tú no.

### 4. Aplica su reporte

- La ficha se escribe en `memoria/sesiones/<fecha>.md`.
- Toda contradicción **no cerrada** (diapositiva contra tablero) va a `memoria/dudas.md`, en
  `## Abiertas`, con la fecha y la lectura provisional.
- Si es la primera clase que se ficha y aún no hay unidad piloto, decídela ahora a partir del temario
  de las diapositivas y anótala en `memoria/decisiones.md`.

### 5. Cierra diciendo qué sigue

Una frase con la unidad tocada y el comando concreto: `/unidad <id>`.

Si la sesión dejó dudas abiertas, dilo: son las preguntas que vale la pena hacerle a la docente en la
próxima clase.

## Reglas

- **No generas ninguna lección aquí.** Si te descubres explicando física, te saliste del rol.
- **No edites nada dentro de `fuentes/`.** Es solo lectura, siempre.
- No inventes el número de sesión. Si no se deduce del material ni de `plan-sesiones.md`, pregúntalo.
- Una ficha cerrada no se reescribe. Si llega material nuevo de esa misma clase, se agrega una sección
  al final.

## Hecho cuando

- Existe `memoria/sesiones/<fecha>.md` con todos los temas apuntando a una lección (nueva o
  existente).
- Ninguna contradicción quedó resuelta en silencio.
- El usuario sabe cuál es el siguiente comando.
