import { UserBuilder } from '../User'

test('UserBuilder', () => {
  const foo = new UserBuilder('Jancsi')
    .setAge(12)
    .setPhone('0123456789')
    .setAddress('hello')
    .build()

  expect(foo).toEqual({
    address: 'hello',
    age: 12,
    name: 'Jancsi',
    phone: '0123456789',
  })
})
