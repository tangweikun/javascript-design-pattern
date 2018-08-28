import { Operation } from '../Calculator'

test('Operation', () => {
  const cal = new Operation(1, 2, '+')
  expect(cal.getResult()).toBe(3)
})

test('Operation', () => {
  const cal = new Operation(41, 2, '*')
  expect(cal.getResult()).toBe(82)
})

test('Operation', () => {
  const cal = new Operation(1, 2, '/')
  expect(cal.getResult()).toBe(0.5)
})

test('Operation', () => {
  const cal = new Operation(1, 2, '-')
  expect(cal.getResult()).toBe(-1)
})
