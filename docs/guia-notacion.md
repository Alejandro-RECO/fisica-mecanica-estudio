# Guía de notación

La ley de escritura del proyecto. Si algo aquí se incumple, el contenido está mal aunque la física
esté bien: en un parcial, la notación también califica.

## Números

| Regla | Bien | Mal |
|---|---|---|
| Coma decimal, nunca punto | `9,81 m/s²` | `9.81 m/s²` |
| Miles nunca con punto ni coma; si se agrupan, con espacio | `76 483 522`, `1609,344 m` | `76.483.522`, `1.609,344 m` |
| Mantisa normalizada, 1 ≤ a < 10 | `4,5×10⁵` | `45×10⁴`, `0,45×10⁶` |
| Notación científica con ×10ⁿ | `4,5×10⁻⁶ s` | `4.5e-6`, `4,5^-6` |
| Unidades siempre | `v = 12 m/s` | `v = 12` |
| Cifras significativas coherentes | `2,5 s` si el cronómetro da décimas | `2,500000 s` |

Las dos primeras salen de dos documentos del BIPM, los dos leídos el 2026-08-30, y conviene **no
atribuirle a cada uno lo que dice el otro**:

1. La **Resolución 10 de la 22.ª CGPM (2003)** —`bipm.org/en/committees/cg/cgpm/22-2003/resolution-10`—
   declara que el marcador decimal «shall be either the point on the line or the comma on the line».
   Admite los dos y **no impone ninguno**.
2. El **folleto conciso del SI, 9.ª ed.** —`bipm.org/documents/20126/41483022/SI-Brochure-9-concise-EN.pdf`—
   da el criterio: «depending on the circumstances. For documents in the English language a point is
   usual, but for many languages and in many countries a comma is usual». En español de Colombia el
   uso es la coma, y de ahí sale la regla del sitio.
3. Agrupar de a tres **no es esencial** —«this is not essential»—, pero cuando se agrupa, «the groups
   of three digits should be separated only by a space. Neither dots nor commas are ever inserted in
   the spaces between groups». Por eso `1609,344 m` está bien y `1.609,344 m` está mal.

**No escribas que la norma "manda" la coma.** No lo hace: permite las dos y describe el uso. Lo que
manda es la prohibición del punto y la coma entre grupos.

**Un número desnudo es un error de física, no de estilo.** Si una magnitud tiene unidades, se
escriben. Sin excepción.

## Símbolos que estaban en disputa y ya no lo están

| Qué | Se escribe | Por qué |
|---|---|---|
| Funciones trigonométricas | `\sin`, `\cos`, `\tan` | ISO 80000-2 fija `sin`, no `sen`, y es el comando de KaTeX |
| Ángulo θ | desde el eje x positivo, antihorario, `0° ≤ θ < 360°` | convención matemática estándar; el rango completo distingue un vector de su opuesto |
| Unidad del ángulo | grados, siempre con `°` | el radián es la unidad SI, el grado es de uso aceptado con el SI; el radián manda cuando el ángulo entra en un cálculo diferencial |
| Vectores | `\vec{A}`, magnitud `A` sin flecha | nunca negrita |
| Unitario de un vector | `\hat{A} = \vec{A}/|\vec{A}|` | sombrero sobre la misma letra; `\hat{u}` solo para un unitario genérico |
| Elementos de un vector | dos: magnitud y dirección | en el plano lo fijan dos números, `(A, θ)`; módulo–dirección–sentido es el mismo dato descompuesto |

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

Aquí el proyecto se aparta a sabiendas de la norma: **ISO 80000-1 reserva `[Q]` para la unidad** y
escribe `dim Q` para la dimensión. Se usa el corchete porque es lo que hacen los textos de física del
curso —Serway, Young, Tipler— y cambiarlo dejaría al estudiante leyendo una notación que no aparece
en ningún libro que tenga a mano. Queda declarado, no escondido.

## Convenciones de la materia

- **Sistema Internacional siempre.** Si el enunciado viene en otras unidades, se convierte y se
  declara la equivalencia usada.
- **El marco de referencia se declara.** Antes de poner un signo, hay que decir hacia dónde apunta el
  eje positivo. Un `a = -9,81 m/s²` sin eso no significa nada.
- **La norma decide la notación; la docente decide qué se pregunta.** Donde exista un estándar
  internacional —el marcador decimal, `sin`, el radián, la mantisa normalizada— el sitio escribe la
  norma, aunque sus diapositivas hagan otra cosa. Su uso distinto se anota en **una línea**, para
  reconocerlo en el parcial, no para volver a abrir la discusión.
- **Donde no hay norma, manda el uso de ella.** Si toma el eje `y` positivo hacia abajo, así se
  escribe: eso es una elección de marco, no un estándar que se pueda incumplir.

## Prosa

- Español de Colombia, académico pero directo. Tuteo.
- Frases completas. Nada de estilo telegrama: quien lee está viendo el tema por primera vez y
  necesita las palabras de enlace.
- Nada de emojis. Negrita solo donde el lector debe frenar.
