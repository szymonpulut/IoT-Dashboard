const PREDEFINED_ORDER = ['Szymon', 'Garage', 'Outside']

export const sortSensorListEntries = (
  entryA: { name: string },
  entryB: { name: string },
) => {
  const indexA = PREDEFINED_ORDER.indexOf(entryA.name)
  const indexB = PREDEFINED_ORDER.indexOf(entryB.name)

  // If names exist in predefined order, sort them by it
  if (indexA !== indexB) {
    return indexA - indexB
  }

  // If names don't exist in predefined order, sort them alphabetically
  return entryA.name.localeCompare(entryB.name)
}
