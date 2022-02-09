export const formatDate = (date: string) => {
  const LOCALE = 'en-US'

  return new Date(date).toLocaleDateString(LOCALE)
}
