export const extractIdFromUrl = url => {
  return url.match(/.*[?&]id=(?<id>[0-9]+).*/)?.groups?.id || null
}
