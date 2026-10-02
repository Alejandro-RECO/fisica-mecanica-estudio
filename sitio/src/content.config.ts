import { defineCollection } from 'astro:content';
import { glob, file } from 'astro/loaders';
import { z } from 'astro/zod';

/**
 * Una fuente concreta que sostiene una afirmacion.
 * El orden del enum es el orden de autoridad: lo de arriba gana.
 */
const fuente = z.object({
  tipo: z.enum(['diapositivas', 'tablero', 'apuntes', 'taller', 'abierta', 'deduccion']),
  ref: z.string().optional(),          // ruta en fuentes/ o URL
  diapositiva: z.number().optional(),  // solo cuando tipo es diapositivas
  fecha: z.coerce.date().optional(),
  aporta: z.string(),                  // que afirmacion sostiene esta fuente
});

/** Una contradiccion entre fuentes que no se resolvio en silencio. */
const contradiccion = z.object({
  afirmacion: z.string(),
  dice_a: z.string(),
  dice_b: z.string(),
  lectura_provisional: z.string(),
  por_que: z.string(),
});

const unidades = defineCollection({
  loader: glob({ base: './src/contenido/unidades', pattern: '**/*.md' }),
  schema: z.object({
    titulo: z.string(),
    orden: z.number(),
    bloque: z.string(),
    semanas: z.string(),
    resumen: z.string(),
    estado: z.enum(['sin-material', 'en-curso', 'completa']).default('sin-material'),
  }),
});

const lecciones = defineCollection({
  loader: glob({ base: './src/contenido/lecciones', pattern: '**/*.mdx' }),
  schema: z
    .object({
      // --- identidad ---
      titulo: z.string(),
      unidad: z.string(),
      orden: z.number(),
      sesiones: z.array(z.string()).default([]),

      // --- pedagogia ---
      pregunta_guia: z.string(),
      prerrequisitos: z.array(z.string()).default([]),
      conceptos_clave: z.array(z.string()).min(1),
      errores_frecuentes: z.array(z.string()).default([]),
      tiempo_estudio_min: z.number().default(30),

      // --- modo repaso rapido ---
      esencial: z.array(z.string()).min(1).max(5),
      tiempo_repaso_min: z.number().default(6),

      // --- trazabilidad ---
      fuentes: z.array(fuente).min(1),

      // --- confianza y validacion ---
      confianza: z.enum(['alta', 'media', 'baja']),
      estado: z.enum(['borrador', 'revisado', 'validado', 'con-dudas']).default('borrador'),
      revision: z
        .object({
          fecha: z.coerce.date(),
          veredicto: z.enum(['coherente', 'coherente-con-reparos', 'incorrecto']),
          chequeos: z.array(z.string()).default([]),
          observaciones: z.array(z.string()).default([]),
        })
        .optional(),
      contradicciones: z.array(contradiccion).default([]),
      dudas_para_docente: z.array(z.string()).default([]),
    })
    // El sistema no puede mentirse a si mismo: si nadie reviso, no hay validado.
    .refine((d) => d.estado !== 'validado' || d.revision !== undefined, {
      message:
        'estado "validado" exige un bloque revision. Si revisor-conceptual no corrio, el estado maximo es "revisado".',
      path: ['estado'],
    })
    // Una leccion con contradicciones abiertas se marca; no se disfraza de validada.
    .refine((d) => d.contradicciones.length === 0 || d.estado === 'con-dudas', {
      message:
        'hay contradicciones declaradas, asi que el estado debe ser "con-dudas". El hueco se estudia, no se esconde.',
      path: ['estado'],
    })
    // Confianza alta exige respaldo real: la docente o una fuente que se leyo.
    .refine(
      (d) =>
        d.confianza !== 'alta' ||
        d.fuentes.some((f) => ['diapositivas', 'tablero', 'taller', 'abierta'].includes(f.tipo)),
      {
        message:
          'confianza "alta" exige al menos una fuente de la docente o una fuente abierta leida. Una leccion solo deducida no puede ser alta.',
        path: ['confianza'],
      },
    ),
});

const glosario = defineCollection({
  loader: file('./src/datos/glosario.yaml'),
  schema: z.object({
    id: z.string(),
    termino: z.string(),
    categoria: z.string(),
    definicion: z.string(),
    ejemplo: z.string(),
    ver: z.array(z.string()).default([]),
  }),
});

export const collections = { unidades, lecciones, glosario };
