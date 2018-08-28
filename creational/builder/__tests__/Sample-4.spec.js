import { buildProduct } from '../Sample-4'

test('buildProduct', () => {
  const foo = buildProduct({
    name: 'Harry Potter',
    category: 'book',
  })

  expect(foo).toEqual({ category: 'book', name: 'Harry Potter', price: 0 })
})
