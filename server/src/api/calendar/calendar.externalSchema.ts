import { z } from 'zod'

export const CalendarEventSchemaExternal = z.object({
  summary: z.string(),
  start: z.union([
    z.object({
      date: z.string(),
    }),
    z.object({
      dateTime: z.string(),
      timeZone: z.string(),
    }),
  ]),
})

export type CalendarEventSchemaExternal = z.infer<
  typeof CalendarEventSchemaExternal
>

export const CalendarEventListSchemaExternal = z.array(
  CalendarEventSchemaExternal,
)

export type CalendarEventListSchemaExternal = z.infer<
  typeof CalendarEventListSchemaExternal
>
