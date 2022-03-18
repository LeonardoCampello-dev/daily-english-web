export const capitalize = (value: string): string => {
  const lower = value.toLocaleLowerCase()

  const capitalizedLetter = lower.charAt(0).toUpperCase()

  const rest = lower.slice(1)

  return capitalizedLetter + rest
}
