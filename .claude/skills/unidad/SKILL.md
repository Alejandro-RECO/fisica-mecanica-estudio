---
name: unidad
description: Genera o amplía las lecciones de una unidad temática y las publica en el sitio. Úsalo cuando el usuario diga "/unidad <id>", "arma la unidad de cinemática", "ya tengo material suficiente para dinámica" o "actualiza la unidad con lo de hoy".
---

# Unidad

**Argumento:** el id de la unidad. Con `--ampliar`, trabaja en modo diff: solo toca las lecciones
afectadas por material nuevo y deja el resto intacto.

Esta es la única skill que orquesta la cadena de tres agentes. Es la más cara del sistema: no la
lances para una duda suelta.

## Flujo

### 1. Lee lo que hace falta y nada más

`memoria/estado.md`, `memoria/errores.md` y las fichas de `memoria/sesiones/` **de esa unidad**. No
leas las fichas de otras unidades.

### 2. Decide el alcance

Del cruce entre las fichas y lo que ya existe en `sitio/src/contenido/lecciones/<unidad>/`, saca la
lista de lecciones a crear y a ampliar. Dísela al usuario en una línea antes de arrancar: son entre
cuatro y seis por unidad, y si salen más de ocho conviene partir la corrida.

### 3. `tutor-fisica` escribe

Una lección por invocación. Pásale la ficha, los errores frecuentes registrados de esa unidad y la
lista de conceptos ya cubiertos, para que no repita ni contradiga.

Vuelve con `estado: borrador`. Siempre.

### 4. `revisor-conceptual` verifica

Sobre cada lección recién escrita. No corrige: propone veredicto, estado y confianza.

### 5. Aplicas el veredicto — esto lo haces tú, no un agente

| Veredicto | Qué haces |
|---|---|
| `COHERENTE` | Escribes `estado: validado`, la confianza propuesta y el bloque `revision` |
| `COHERENTE CON REPAROS` | Devuelves a `tutor-fisica` con el primer desvío. **Una sola vuelta** |
| `INCORRECTO` | Devuelves a `tutor-fisica`. Si el desvío nace de una fuente ambigua, va a `dudas.md` y la lección queda `con-dudas` |

**A la segunda vuelta fallida, paras y le preguntas al usuario.** Un doble fallo no es azar: la
entrada está mal, o la fuente no alcanza.

### 6. `constructor-sitio` publica

Genera `sitio/src/datos/repaso/<unidad>.yaml`, ajusta navegación e índices y corre el build.

### 7. Cierra con el estado real

Cuántas lecciones quedaron `validado`, cuántas `con-dudas` y cuáles son las dudas. Y la URL local
para verlo.

## Reglas

- **Solo tú escribes `estado`, `confianza` y `revision`.** Ningún agente los toca. Es el punto de
  control único del sistema.
- **Nunca marques `validado` sin bloque `revision`.** Zod hace fallar el build si lo intentas, y está
  bien que lo haga.
- Una lección `con-dudas` **se publica igual**. El hueco se estudia, no se esconde.
- En modo `--ampliar`, las lecciones no afectadas no se tocan. Ni para "mejorarlas de paso".
- Si vas a modificar una lección que ya estaba `validado`, avísale al usuario antes.

## Hecho cuando

- Toda lección de la unidad tiene `estado` distinto de `borrador`.
- `cd sitio && npm run build` sale en verde.
- Las dudas nuevas quedaron en `memoria/dudas.md`.
