class BaseBuilder {
  init() {
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
    const keysNoWithers = Object.keys(this).filter(
      key => typeof this[key] !== 'function',
    )

    return keysNoWithers.reduce((returnValue, key) => {
      return {
        ...returnValue,
        [key]: this[key],
      }
    }, {})
  }
}

export class ProductBuilder extends BaseBuilder {
  constructor() {
    super()
    this.name = 'DEFAULT'
    this.price = 0
    this.category = 'OTHER'
    super.init()
  }
}

export class SandwichBuilder extends BaseBuilder {
  constructor() {
    super()
    this.meat = 'ham'
    this.cheese = 'swiss'
    super.init()
  }
}

console.log(
  new ProductBuilder()
    .withName('Harry Potter')
    .withCategory('book')
    .build(),
)

console.log(
  new SandwichBuilder()
    .withMeat('Roast Beef')
    .withCheese('Havarti')
    .build(),
)
