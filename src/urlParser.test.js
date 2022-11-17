import {extractIdFromUrl} from './urlParser.js'

test('Null returned if no id is provided in url', () => {
  expect(extractIdFromUrl('')).toBeNull()
})

test('Find id in one parameter url', () => {
  expect(extractIdFromUrl('/?id=12')).toBe('12')
})

test('Find id in multiple parameters url', () => {
  expect(extractIdFromUrl('/?foo=foo&id=13&bar=bar')).toBe('13')
})

test('Null return with term close to id', () => {
  expect(extractIdFromUrl('/?foo=foo&pid=14&bar=bar')).toBeNull()
  expect(extractIdFromUrl('/?foo=foo&ide=14&bar=bar')).toBeNull()
})

test('Find id even if a close parameter is like id', () => {
  expect(extractIdFromUrl('/?foo=foo&pid=14&id=15&bar=bar')).toBe('15')
})

test('Last id founded', () => {
  expect(extractIdFromUrl('/?foo=foo&id=16&id=17&bar=bar')).toBe('17')
})

test('Find string id', () => {
  expect(extractIdFromUrl('/?foo=foo&id=17a-b12&bar=bar')).toBe('17a-b12')
})
