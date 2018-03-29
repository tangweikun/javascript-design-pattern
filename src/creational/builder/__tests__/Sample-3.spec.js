import { ProductBuilder, SandwichBuilder } from '../Sample-3'

test('ProductBuilder', () => {
  const foo = new ProductBuilder()
    .withName('Harry Potter')
    .withCategory('book')
    .withPrice(9.99)
    .build()
  expect(foo).toEqual({ category: 'book', name: 'Harry Potter', price: 9.99 })
})

test('ProductBuilder', () => {
  const foo = new ProductBuilder().build()
  expect(foo).toEqual({ category: 'OTHER', name: 'DEFAULT', price: 0 })
})

test('SandwichBuilder', () => {
  const foo = new SandwichBuilder()
    .withMeat('Roast Beef')
    .withCheese('Havarti')
    .build()
  expect(foo).toEqual({ cheese: 'Havarti', meat: 'Roast Beef' })
})

test('SandwichBuilder', () => {
  const foo = new SandwichBuilder().build()
  expect(foo).toEqual({ cheese: 'swiss', meat: 'ham' })
})
