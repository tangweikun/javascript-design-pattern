export const buildProduct = (overrides = {}) => {
  const defaults = {
    name: 'DEFAULT',
    price: 0,
    category: 'OTHER',
  }

  return { ...defaults, ...overrides }
}

console.log(
  buildProduct({
    name: 'Harry Potter',
    category: 'book',
  }),
)
