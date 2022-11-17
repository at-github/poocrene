export const extractIdFromUrl = url => {
  return url.match(/^.*[?&]id=(?<id>[^&=]+).*$/)?.groups?.id || null
}
