export const mapThresholdToColor = (threshold: string): string => {
  switch (threshold) {
    case 'low':
      return 'green'
    case 'medium':
      return 'yellow'
    case 'high':
      return 'red'
    default:
      return ''
  }
}
