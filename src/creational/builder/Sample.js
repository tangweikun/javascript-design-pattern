export class ProductBuilder {
  constructor() {
    this.name = 'DEFAULT'
    this.price = 0
    this.category = 'OTHER'
  }

  withName(name) {
    this.name = name
    return this
  }

  withPrice(price) {
    this.price = price
    return this
  }

  withCategory(category) {
    this.category = category
    return this
  }

  build() {
    return {
      name: this.name,
      price: this.price,
      category: this.category,
    }
  }
}

console.log(
  new ProductBuilder() //    {
    .withName('Harry Potter') //      name: 'Harry Potter',
    .withCategory('book') //      price: 9.99,
    .build(), //      category: 'book'
)
