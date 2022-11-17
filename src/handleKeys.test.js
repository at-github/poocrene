import {countUniqKeys} from './handleKeys.js'

test('Error thrown without param', () => {
  const expected = () => countUniqKeys()
  expect(expected).toThrow('No keys provided')
})

test('Error thrown with empty array', () => {
  const expected = () => countUniqKeys([])
  expect(expected).toThrow('Empty keys provided')
})

test('Object with counts key is return', () => {
  expect(countUniqKeys([
      1
    , 2, 2
    , 3, 3, 3
  ])).toEqual([
      {id: 1, count: 1}
    , {id: 2, count: 2}
    , {id: 3, count: 3}
  ])
})

test('Keys are counted even if an exotic element is present', () => {
  expect(countUniqKeys([
    0
    , 2, 2
    , undefined
    , 3, 3, 3
    , null
    , 4, 4, 4, 4
  ])).toEqual([
    {id: 0, count: 1}
    , {id: 2, count: 2}
    , {id: 3, count: 3}
    , {id: 4, count: 4}
  ])
})
