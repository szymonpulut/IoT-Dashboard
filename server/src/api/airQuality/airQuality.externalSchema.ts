import { z } from 'zod'

export const CurrentAirQualityValuesSchemaExternal = z.array(
  z.object({
    name: z.string(),
    value: z.number(),
  }),
)

export type CurrentAirQualityValuesSchemaExternal = z.infer<
  typeof CurrentAirQualityValuesSchemaExternal
>

export const AirQualitySchemaExternal = z.object({
  current: z.object({ values: CurrentAirQualityValuesSchemaExternal }),
})

export type AirQualitySchemaExternal = z.infer<typeof AirQualitySchemaExternal>
