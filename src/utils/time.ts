export function seconds_to_HMS(duration: number) {
  return (new Date(duration * 1000)).toISOString().substring(11, 19).replace(/^00:/, '').replace(/^0/, '')
}
