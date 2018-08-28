export class ProductBuilder {
  constructor() {
    this.name = 'DEFAULT'
    this.price = 0
    this.category = 'OTHER'

    // Generate "wither" methods for each property
    Object.keys(this).forEach(key => {
      const witherName = `with${key
        .substring(0, 1)
        .toUpperCase()}${key.substring(1)}`
      this[witherName] = value => {
        this[key] = value
        return this
      }
    })
  }

  build() {
    // Get an array of all non-function properties of this builder
    const keysNoWithers = Object.keys(this).filter(
      key => typeof this[key] !== 'function',
    )

    // Transform the array of keys into an object
    return keysNoWithers.reduce((returnValue, key) => {
      return {
        ...returnValue,
        [key]: this[key],
      }
    }, {})
  }
}

console.log(
  // =>
  new ProductBuilder() //    {
    .withName('Harry Potter') //      name: 'Harry Potter',
    .withCategory('book') //      price: 9.99,
    .build(), //      category: 'book'
)
