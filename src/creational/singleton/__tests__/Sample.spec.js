import { Singleton } from '../Sample'

test('Singleton', () => {
  const instance1 = new Singleton()
  const instance2 = new Singleton()
  expect(instance1 === instance2).toBe(true)
})
