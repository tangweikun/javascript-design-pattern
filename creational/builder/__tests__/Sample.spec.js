import { ProductBuilder } from '../Sample'

test('ProductBuilder', () => {
  const foo = new ProductBuilder()
    .withName('Harry Potter')
    .withCategory('book')
    .withPrice(9.99)
    .build()
  expect(foo).toEqual({ category: 'book', name: 'Harry Potter', price: 9.99 })
})

test('ProductBuilder', () => {
  const foo = new ProductBuilder().withPrice(9.99)
  expect(foo).toEqual({ category: 'OTHER', name: 'DEFAULT', price: 9.99 })
})

test('ProductBuilder', () => {
  const foo = new ProductBuilder().build()
  expect(foo).toEqual({ category: 'OTHER', name: 'DEFAULT', price: 0 })
})
