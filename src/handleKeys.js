export const countUniqKeys = keys => {
  if (typeof keys === 'undefined')
    throw new Error('No keys provided')

  if (keys.length === 0)
    throw new Error('Empty keys provided')

  let keysCounts = []
  let cacheKeys  = []

  keys.map((key = null) => {
    if (key === null)
      return

    if (cacheKeys.find(cacheKey => cacheKey === key))
      return

    cacheKeys.push(key)

    const keyCount = keys.filter(currentKey => currentKey === key)
    keysCounts.push({id: key, count: keyCount.length})
  })

  return keysCounts
}
