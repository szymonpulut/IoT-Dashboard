import { z } from 'zod'

export const DailyForecastSchemaExternal = z.object({
  list: z.array(
    z.object({
      temp: z.object({
        day: z.number(),
        min: z.number(),
        max: z.number(),
      }),
      weather: z.array(
        z.object({
          id: z.number(),
        }),
      ),
    }),
  ),
})

export type DailyForecastSchemaExternal = z.infer<
  typeof DailyForecastSchemaExternal
>
