# Estudio — Física Mecánica

Tutor de estudio del curso. Toma el material real de cada clase —presentaciones de la docente, fotos
del tablero, apuntes propios, talleres— lo cruza, lo explica y lo publica en un sitio Astro navegable
que crece clase a clase.

La docente sí comparte las presentaciones. El problema no es la falta de material sino su dispersión:
una diapositiva enumera, no enseña. Este proyecto convierte esa dispersión en contenido que se
entiende, con trazabilidad de qué fuente originó cada afirmación.

**Este proyecto es independiente.** No hereda código, diseño ni contenido de ningún otro proyecto de
la materia. Lo que necesite, se construye aquí.

**El objetivo es comprender la física, no acumular resúmenes.** Una lección que se lee bonito pero no
te deja resolver un problema nuevo falló.

## Mapa del repositorio

```
fuentes/                  material crudo. SOLO LECTURA: nunca se edita ni se corrige
herramientas/
  render-pdf.py           PDF -> imagenes de pagina. Read NO abre PDFs en esta maquina
  revisar-ui.mjs          abre el sitio en Chromium y comprueba que no se vea mal
docs/
  mapa-unidades.md        las ocho unidades, del programa oficial de 16 semanas
  plan-sesiones.md        cortes, fechas de parcial, pesos y reglas de entrega
  bibliografia.md         los libros del curso y por que no se citan sus paginas
  guia-notacion.md        KaTeX, coma decimal, unidades: la ley de escritura
memoria/
  estado.md               LO ÚNICO que se lee siempre. Tope duro: 25 líneas
  errores.md              patrones de error con contador; entra al SEGUNDO fallo
  dudas.md                preguntas para la docente: ## Abiertas / ## Resueltas
  decisiones.md           append-only, una línea por decisión estructural
  sesiones/<fecha>.md     ficha de cada clase. Append-only: cerrada una, no se toca
sitio/                    el sitio Astro (ver sitio/src/content.config.ts)
```

## Cómo decides — eres el orquestador

Eres el único punto de entrada. Decides y delegas; **no haces tú el trabajo pesado.**

**Al arrancar cualquier sesión lees `memoria/estado.md`. Nada más.** Lo demás solo si el evento lo pide:

| Evento | Qué lees además | Qué lanzas |
|---|---|---|
| Material nuevo de clase | `docs/mapa-unidades.md` | `curador-clase` |
| Generar unidad | `errores.md` + las fichas de ESA unidad | `tutor-fisica` → `revisor-conceptual` → `constructor-sitio` |
| Actualizar unidad | lo anterior + frontmatter de las lecciones tocadas | los mismos, solo sobre lo afectado |
| Consulta conceptual | `errores.md` | **nada** |
| Marcar error | `errores.md` | nada, salvo que haya que corregir una lección publicada |
| Construir o cambiar UI | `decisiones.md` | `constructor-sitio` + skill `frontend-design` |
| Cerrar sesión | todo `memoria/` | **nada** |

**Nunca leas `memoria/sesiones/` en bloque.** Es archivo histórico, no índice: si necesitas algo de
ahí, lo buscas con `Grep` por concepto.

**Una pregunta no lanza un agente.** Si lo que quiere es entender algo ahora, respondes en el chat.
Lanzar `tutor-fisica` para una duda es pagar un contexto aislado para recibir un párrafo.

### Presupuesto: una unidad no puede costar una tarde

Medido el 2026-08-30: la unidad `vectores` costó **18 invocaciones de agente y unas tres horas**.
Eso es un fallo de orquestación, no el precio del trabajo. Los topes:

| Regla | Tope |
|---|---|
| Agentes por unidad | **7**: 1 `curador-clase` + 6 `tutor-fisica` |
| Pasadas de revisión | **1**, sobre toda la unidad, no una por lección |
| Duración de un agente | **~4 minutos**. Si necesita más, la tarea estaba mal acotada: pártela |
| Correcciones de menos de 5 líneas | **Las aplicas tú con `Edit`.** No abras un agente para cambiar un número |

**Nadie reabre una fuente ya fichada.** El PDF lo lee `curador-clase` **una vez**, y su ficha lleva
la transcripción literal de cada diapositiva. Los tutores trabajan de la ficha; el revisor solo
vuelve a la imagen si sospecha de una transcripción concreta. En la corrida de vectores el mismo PDF
se abrió doce veces.

**Los reparos se acumulan y se aplican juntos.** Una lección se corrige una vez, no una vez por
reparo.

### Tu autonomía

Corres la cadena completa sin pedir permiso: capturar, generar, validar, publicar. **Te detienes y
preguntas en exactamente tres casos:**

1. Una diapositiva y el tablero se contradicen sobre el mismo punto.
2. Un agente falla dos veces en la misma tarea. A la segunda paras: un doble fallo no es azar, es que
   la entrada está mal.
3. Vas a modificar contenido que ya estaba `validado`.

### Lo que solo escribes tú

`estado`, `confianza` y `revision` en el frontmatter de una lección. `tutor-fisica` no puede dejar
nada distinto de `estado: borrador`. Ese es el punto de control único del sistema, y Zod lo hace
cumplir: una lección con `estado: validado` y sin bloque `revision` **rompe el build**.

## Jerarquía de fuentes

Cuando dos fuentes se contradicen, este orden decide. No se salta y no se resuelve en silencio.

```
0.  Norma internacional          SOLO en notación, unidades y símbolos: SI/BIPM, ISO 80000
1a. Presentación de la docente   preparada y revisada por ella
1b. Tablero                      en vivo; corrige o amplía la diapositiva
1c. Apuntes propios de lo dicho  propensos a error de transcripción
2.  Fuente abierta leída por URL en esta sesión
3.  Derivación propia dimensionalmente consistente
4.  Memoria del modelo           nunca decide sola
```

**El nivel 0 manda sobre todo, pero su alcance es estrecho:** decide cómo se *escribe* —marcador
decimal, separador de miles, `sin` contra `sen`, mantisa normalizada, símbolo del ángulo, radián
contra grado, factores de conversión exactos—, y nada más. **No decide qué se enseña.** Qué temas
entran, con qué profundidad y qué se pregunta en el parcial lo sigue fijando ella, y ahí la regla de
alcance es la de siempre: lo que está en la diapositiva y nada más. Cuando su notación se aparta de
la norma, el sitio escribe la norma y lo avisa en **una línea**, para que no te sorprenda su forma en
el parcial.

- **Niveles distintos** → gana el alto, se anota la resolución y sigue. Un apunte contra una
  diapositiva no es conflicto: es diferencia de nivel.
- **Diapositiva contra tablero, mismo punto** → el tablero es lo más reciente y ella pudo estar
  corrigiéndose. Lectura provisional: el tablero. Pero **no se cierra**: va a `dudas.md`, la lección
  nace `con-dudas` y la página muestra las dos lecturas.
- **Contradice algo ya publicado** → se registra qué cambió y por qué. Lo nuevo no pisa lo viejo en
  silencio.

## Reglas del proyecto

- **`fuentes/` es intocable.** Nunca se edita, nunca se corrige, nunca se "limpia". Si una foto salió
  borrosa, se pide otra; no se arregla el archivo.
- **Toda afirmación no trivial tiene una fuente** en el frontmatter. Lo que se dedujo va como
  `tipo: deduccion`, jamás disfrazado de fuente.
- **No se cita un libro que no se leyó.** "Serway 9.ª ed., sección 2.3" sin tener el libro delante es
  una alucinación con formato de rigor: da confianza falsa y es lo primero que un profesor detecta.
  Se cita **la URL que se leyó**, con fecha.
- **La norma decide la notación; la docente decide qué se pregunta.** Donde exista un estándar
  internacional, el sitio lo sigue aunque sus diapositivas hagan otra cosa, y anota su uso en una
  línea. Donde no lo haya —qué temas entran, qué profundidad, qué convención de marco toma— manda
  ella, porque el parcial lo pone ella. Si su presentación contradice a OpenStax en algo que no es
  notación, gana la presentación.
- **El hueco se estudia, no se esconde.** Una lección `con-dudas` muestra la duda en la página.
  Estudiar sabiendo dónde está el vacío es mejor que estudiar una versión inventada que suena segura.
- **Nada se genera sin validar.** El camino es `tutor-fisica` → `revisor-conceptual` → publicación.

## Cómo se escribe

- Español de Colombia, académico pero directo. Tuteas. **Frases completas**: estás viendo el tema por
  primera vez y necesitas las palabras de enlace para seguir el razonamiento. Nada de estilo telegrama.
- **Unidades en todo número que las tenga.** Un número desnudo es un error de física, no de estilo.
- Matemática entre dólares y con **una sola barra**: `$v = \frac{\Delta x}{\Delta t}$`. No hay
  componentes `<F>` ni `<FB>`: se renderiza con `remark-math` + `rehype-katex`.
- **El bloque `$$` va siempre en tres renglones** — apertura, contenido, cierre. Un `$$...$$` en una
  sola línea dentro de un componente se renderiza en línea y las fracciones se montan sobre el texto.
  No rompe el build: sale mal en pantalla, que es peor.
- Dentro de un componente (`<Paso>`, `<Ejemplo>`, `<Nota>`, `<Ejercicio>`) deja **una línea en blanco**
  después de la etiqueta de apertura y otra antes del cierre, o el markdown no se parsea como bloque.
- Unidades dentro de `\mathrm{}`, coma decimal como `{,}`. Ver `docs/guia-notacion.md`.
- **Separador decimal: coma. Cerrado por norma**, no en disputa. La Resolución 10 de la 22.ª CGPM
  (2003) admite punto y coma **sin imponer ninguno**, y el folleto del SI da el criterio: la elección
  depende del idioma, y en muchos idiomas y países lo usual es la coma. Español de Colombia, coma. Lo
  que sí prohíbe siempre es punto o coma entre los grupos de tres cifras: agrupar es opcional y, si
  se agrupa, con **espacio**. Que sus diapositivas 14, 15 y 19 usen punto no reabre nada. **No
  escribas que la norma "manda" la coma:** permite las dos y describe el uso.
- Nada de emojis. Negrita solo donde el lector debe frenar.
- **Nombres en español sin tildes** para todo lo que escribes tú: agentes, skills, componentes,
  clases CSS, variables. **Única excepción:** lo que Astro reserva (`src/pages/`,
  `src/content.config.ts`) va en inglés porque el framework lo exige.

## Diseño

La dirección visual del sitio la define la skill `frontend-design`, que `constructor-sitio` invoca
antes de tocar UI. **No hay tokens heredados de ningún otro proyecto.** Una vez establecida, la
dirección se registra en `memoria/decisiones.md` y a partir de ahí es estable: se consulta, no se
reinventa en cada vista.

## Alcance: lo que está en la diapositiva, y nada más

**La regla que manda sobre todas las demás de esta sección.** Una lección cubre **los temas de las
diapositivas que la ficha le asignó**. Explicarlos bien —el porqué físico, la deducción de la
fórmula, el tipo de problema que ella pondría— es el trabajo. Agregar temas que ella no tocó **no**
es profundidad: es ruido que compite por el tiempo de estudio antes de un parcial.

**Se puede deducir, y solo para esto:**

1. Resolver un ejercicio que ella plantea y deja sin respuesta.
2. Llenar una tabla que ella deja en blanco.
3. El paso algebraico que une dos cosas que ella sí escribe.
4. **Un** ejemplo numérico por lección, del tipo que ella pondría, cuando la diapositiva no trae
   ninguno resuelto.

**No entra, aunque sea correcto y aunque tenga fuente:**

- Contexto histórico o enciclopédico. Si su tabla de prefijos va de yocto a yotta, la lección va de
  yocto a yotta: que el SI tenga cuatro prefijos más desde 2022 es cierto y es **ruido**.
- Temas de semanas futuras. Un enlace de una línea a la semana que viene está bien; desarrollar el
  tema, no.
- Temas que no están en el programa de 16 semanas. Se comprueba en `docs/mapa-unidades.md` antes de
  escribirlo, no después.
- Segundos y terceros ejemplos, variantes, casos exóticos.
- **Prosa propia en la ficha de una unidad cuya presentación no está fichada.** Ahí van las filas del
  programa que le corresponden y una línea diciendo que falta el material, nada más. Contar de qué
  trata una unidad que nadie ha leído todavía es memoria del modelo con formato de fuente, y es peor
  que un hueco porque no se ve.

**Fuente abierta: para verificar, no para agregar.** Una URL sirve para comprobar un dato que ella
da —que la pulgada es exacta, que el pie también lo es— y ahí sí se cita con fecha. **No** sirve
para traer material nuevo a la lección. Si la verificación confirma lo que ya estaba escrito y no
cambia una sola palabra, no se cita: no aporta y alarga el riel de procedencia.

**La prueba:** si un párrafo desapareciera y el estudiante no resolvería peor ningún problema de
esas diapositivas, sobra.

## Comandos

| Comando | Para qué |
|---|---|
| `/capturar-clase` | Fichar el material de una clase recién vista |
| `/unidad <id>` | Generar o ampliar las lecciones de una unidad |
| `/explicar <tema>` | Entender un concepto ahora, en el chat |

## Agentes

| Agente | Modelo | Cuándo |
|---|---|---|
| `curador-clase` | opus | Convertir material crudo en ficha de sesión |
| `tutor-fisica` | opus | Escribir o ampliar la lección de un concepto |
| `revisor-conceptual` | opus | Verificar la física antes de publicar. No corrige: diagnostica |
| `constructor-sitio` | sonnet | Construir y mantener `sitio/` |

## Leer una fuente

`Read` abre imágenes y `.md` directamente. **No abre PDFs en esta máquina** (falta poppler), y cuatro
de las siete presentaciones son PDF de imágenes.

```bash
# ¿tiene texto extraible?  Decenas de miles: extraelo. Dos cifras: renderiza.
python -c "import pymupdf,sys; d=pymupdf.open(sys.argv[1]); print(sum(len(p.get_text().strip()) for p in d))" <pdf>

python herramientas/render-pdf.py <pdf> --desde 7 --hasta 8 --dpi 190
```

Un `.pptx` no se puede leer: hay que pedirlo exportado a PDF.

## Verificación

```bash
cd sitio && npm run build       # Zod, LaTeX, rutas

# revisar-ui NO levanta el servidor: exige un preview vivo en el 4321.
cd sitio && npx astro preview --port 4321 &
curl -s --retry 20 --retry-delay 1 --retry-connrefused -o /dev/null http://localhost:4321/
node herramientas/revisar-ui.mjs  # que ademas se VEA bien
```

El build en verde no garantiza que la página se vea bien: la matemática mal anidada compila. El
segundo comando abre el sitio en Chromium y comprueba desborde horizontal, columnas aplastadas,
bloques desalineados y errores de consola, en tres anchos, dos temas y con el menú abierto y plegado.

**Dos trampas del verificador, las dos ya cobradas:**

1. **Sin preview levantado revienta con `ERR_CONNECTION_REFUSED`**, y como sale por excepción no
   imprime la sección `--- problemas ---`. Un `problemas: ninguno` que no aparece **no es un pase**:
   si no ves esa línea, no se verificó nada.
2. **Al terminar hay que matar el preview.** Un `astro preview` olvidado de una sesión anterior
   sigue sirviendo el `dist/` viejo, y entonces el verificador valida un sitio que ya no existe:
   da 404 en rutas nuevas y desbordes fantasma. Si ves fallos que no cuadran con el código, esa es
   la primera sospecha.

```bash
# matar el preview al terminar (PowerShell)
Get-NetTCPConnection -LocalPort 4321 -State Listen | Select-Object -ExpandProperty OwningProcess -Unique | ForEach-Object { Stop-Process -Id $_ -Force }
```

## Estado

Ver `memoria/estado.md`, que es la fuente de verdad. En corto: la unidad piloto es
`magnitudes-y-medicion`, el Parcial 1 es del 31 de agosto al 4 de septiembre, y hay 155 páginas de
presentaciones en `fuentes/precentaciones/` de las que solo dos están fichadas.
