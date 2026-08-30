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

Se renderiza con `remark-math` + `rehype-katex`. La matemática va entre dólares, **no en
componentes**, y por eso el LaTeX lleva **una sola barra**: `\frac`, no `\\frac`.

```mdx
en línea:  la velocidad $v = \frac{\Delta x}{\Delta t}$ crece cuando...

en bloque:
$$
x = x_0 + v_0 t + \tfrac{1}{2} a t^{2}
$$
```

### La regla que más duele: el bloque va SIEMPRE en tres líneas

El `$$` de apertura, el contenido y el `$$` de cierre, cada uno en su renglón. **Nunca
`$$...$$` en una sola línea.**

Dentro de un componente (`<Paso>`, `<Ejemplo>`, `<Nota>`, `<Ejercicio>`) el `$$` de una sola línea
**se renderiza como matemática en línea**, y entonces las fracciones se montan sobre el texto de
arriba y abajo. No falla el build: sale mal en pantalla, que es peor. Comprobado.

Además, dentro de un componente el contenido necesita **una línea en blanco** después de la etiqueta
de apertura y otra antes de la de cierre, o el markdown no se parsea como bloque:

```mdx
<Paso n="2" razon="...">

$$
t_1 = \frac{30\ \mathrm{km}}{15\ \mathrm{km/h}} = 2\ \mathrm{h}
$$

</Paso>
```

### Las otras tres reglas

1. **Unidades dentro de `\mathrm{}`**: `8{,}2 \times 10^{-5}\ \mathrm{s}`. Sin eso, KaTeX las
   renderiza en cursiva como si fueran variables.
2. **Coma decimal como `{,}`**: `0{,}0254`, no `0,0254`. Sin las llaves, KaTeX le mete espacio de
   puntuación y queda `0, 0254`. Verificado: las llaves sobreviven a MDX sin que las interprete como
   expresión JSX.
3. **Nada de `<` ni `>` sueltos** en el texto MDX: rompen el build. Dentro de una fórmula, `\lt` y
   `\gt`.

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
