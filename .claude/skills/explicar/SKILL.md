---
name: explicar
description: Explica un concepto de física mecánica en el chat, construyendo la intuición antes de la fórmula. Úsalo cuando el usuario diga "/explicar", "no entiendo X", "explícame el trabajo neto", "por qué la aceleración puede ser negativa" o cualquier duda conceptual suelta.
---

# Explicar

**Argumento:** el concepto o la duda, en las palabras que sean.

Esta skill vive en el chat. **No lanza ningún agente y no escribe archivos** — salvo, si acaso, una
entrada de glosario. Lanzar `tutor-fisica` para una duda es pagar un contexto aislado para recibir un
párrafo.

Si al explicar descubres que el tema merece una lección completa, dilo al final y propón `/unidad`.
No la escribas aquí.

## Flujo

### 1. Mira si ya hay algo escrito

Busca el concepto en `sitio/src/contenido/lecciones/`. Si existe una lección, **explica siguiendo su
mismo orden y notación**: el chat y el sitio tienen que decir lo mismo, o el estudiante termina con
dos versiones de la misma idea.

Lee también `memoria/errores.md`: si este concepto ya te falló antes, la explicación tiene que atacar
justo ese error.

### 2. Explica en cinco bloques, en este orden

1. **Qué es, en lenguaje llano.** Sin una sola ecuación. Si no puedes, todavía no lo entendiste tú.
2. **La ecuación, con cada símbolo desglosado** y sus unidades.
3. **De dónde sale.** Dedúcela delante de él en vez de dársela hecha.
4. **Cómo aparece en este curso.** El caso concreto que la docente usó, o el tipo de problema donde
   sale en el parcial.
5. **Qué se malinterpreta.** El error frecuente con nombre propio, y de dónde nace.

### 3. Cierra devolviéndole el control

Una pregunta de comprobación que él pueda responder sin la ecuación delante. Si no la responde, el
bloque que falló es el 1, no el 2.

## Reglas

- **No resuelvas su tarea.** Si trae un ejercicio, explicas el concepto y le devuelves el primer
  paso; no desarrollas la solución completa. El objetivo es aprender el proceso, no tener las
  respuestas.
- Coma decimal, unidades en todo número, notación de la docente antes que la del libro.
- Si la duda nace de una contradicción registrada en `memoria/dudas.md`, dilo explícitamente: no le
  des una versión segura de algo que está en disputa.
- Si detectas un error conceptual repetido, sugiérele registrarlo. Al segundo fallo, ese patrón entra
  a `errores.md`.

## Hecho cuando

El estudiante puede reformular la idea con sus palabras, sin la ecuación delante.
