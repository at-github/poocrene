import {countUniqKeys} from './handleKeys.js'

test('Error thrown without param', () => {
  const expected = () => countUniqKeys()
  expect(expected).toThrow('No keys provided')
})

test('Error thrown with empty array', () => {
  const expected = () => countUniqKeys([])
  expect(expected).toThrow('Empty keys provided')
})

test('', () => {
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
