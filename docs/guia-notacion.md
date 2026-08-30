# Guía de notación

La ley de escritura del proyecto. Si algo aquí se incumple, el contenido está mal aunque la física
esté bien: en un parcial, la notación también califica.

## Números

| Regla | Bien | Mal |
|---|---|---|
| Coma decimal, nunca punto | `9,81 m/s²` | `9.81 m/s²` |
| Notación científica con ×10ⁿ | `4,5×10⁻⁶ s` | `4.5e-6`, `4,5^-6` |
| Unidades siempre | `v = 12 m/s` | `v = 12` |
| Cifras significativas coherentes | `2,5 s` si el cronómetro da décimas | `2,500000 s` |

**Un número desnudo es un error de física, no de estilo.** Si una magnitud tiene unidades, se
escriben. Sin excepción.

## KaTeX

Se renderiza con `remark-math` + `rehype-katex`. Dos formas:

```mdx
<F>{'v = \\frac{\\Delta x}{\\Delta t}'}</F>       inline
<FB>{'x = x_0 + v_0 t + \\tfrac{1}{2} a t^{2}'}</FB>   en bloque
```

Tres reglas que causan el 90 % de los fallos de build:

1. **Barras dobles siempre**: `\\frac`, `\\mathrm`, `\\Delta`, `\\times`, `\\qquad`, `\\le`.
   Una sola barra rompe la compilación.
2. **Unidades dentro de `\\mathrm{}`**: `8{,}2 \\times 10^{-5}\\ \\mathrm{s}`. Sin eso, KaTeX las
   renderiza en cursiva como si fueran variables.
3. **Coma decimal como `{,}`**: `0{,}0254`, no `0,0254`. Sin las llaves, KaTeX le mete espacio de
   puntuación y queda `0, 0254`.

Los símbolos `<` y `>` sueltos en texto MDX también rompen el build. Dentro de una fórmula usa
`\\lt` y `\\gt`.

## Dónde NO va KaTeX

En los tooltips del glosario y en los `.md` de `docs/` y `memoria/` **no hay renderizador**. Ahí los
símbolos van en unicode plano:

```
LT⁻¹      4,5×10⁻⁶      m/s²      kg·m·s⁻²      [x] = L
Δx        v₀            ω         θ             ½at²
```

## Dimensiones

Se escriben con corchetes: `[v] = LT⁻¹`, `[F] = MLT⁻²`. Las dimensiones fundamentales son `M`, `L`,
`T` — mayúsculas, sin cursiva.

## Convenciones de la materia

- **Sistema Internacional siempre.** Si el enunciado viene en otras unidades, se convierte y se
  declara la equivalencia usada.
- **El marco de referencia se declara.** Antes de poner un signo, hay que decir hacia dónde apunta el
  eje positivo. Un `a = -9,81 m/s²` sin eso no significa nada.
- **La convención de la docente gana** sobre la del libro. Si ella toma el eje `y` positivo hacia
  abajo, así se escribe, y se anota que la convención estándar es la contraria.

## Prosa

- Español de Colombia, académico pero directo. Tuteo.
- Frases completas. Nada de estilo telegrama: quien lee está viendo el tema por primera vez y
  necesita las palabras de enlace.
- Nada de emojis. Negrita solo donde el lector debe frenar.
