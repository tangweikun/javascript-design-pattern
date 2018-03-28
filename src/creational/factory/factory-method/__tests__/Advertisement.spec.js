import { Advertisement } from '../Advertisement'

test('Advertisement', () => {
  const java = new Advertisement('Java', '我是Java')
  expect(java.getContent()).toBe('我是Java')
})

test('Advertisement', () => {
  const php = new Advertisement('PHP', '我是PHP')
  expect(php.getContent()).toBe('我是PHP')
})
