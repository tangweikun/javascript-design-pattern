// Decorating Objects With Multiple Decorators

// The constructor to decorate
function MacBook() {
  this.cost = function() {
    return 997
  }
  this.screenSize = function() {
    return 11.6
  }
}

// Decorator 1
function memory(macbook) {
  const v = macbook.cost()
  macbook.cost = function() {
    return v + 75
  }
}

// Decorator 2
function engraving(macbook) {
  const v = macbook.cost()
  macbook.cost = function() {
    return v + 200
  }
}

// Decorator 3
function insurance(macbook) {
  const v = macbook.cost()
  macbook.cost = function() {
    return v + 250
  }
}

const mb = new MacBook()
memory(mb)
engraving(mb)
insurance(mb)

// Outputs: 1522
console.log('💥cost:💥', mb.cost())

// Outputs: 11.6
console.log('💥screenSize:💥', mb.screenSize())
