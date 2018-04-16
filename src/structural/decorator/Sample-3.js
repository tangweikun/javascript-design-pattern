// HELP:

// Solving the problem of overriding object attributes

// Basic object
const Book = {
  price: 45,
  getPrice: function() {
    return this.price
  },
}

// Decoration function
function decorate(obj, decoration) {
  const objNew = Object.create(obj)
  for (let key in decoration) {
    // Check if base object has this property and if it is a function
    if (obj[key] !== undefined && typeof decoration[key] === 'function') {
      const func =
        typeof obj[key] === 'function'
          ? decoration[key](obj[key]())
          : decoration[key](obj[key])

      objNew[key] = () => func
    } else {
      objNew[key] = decoration[key]
    }
  }

  return objNew
}

// Let's decorate
const BookNew = decorate(Book, {
  getPrice: function(price) {
    return Math.ceil(price * 1.1)
  },
})

const BookOld = decorate(Book, {
  price: function(price) {
    return price * 0.4
  },
})

const BookExpensive = decorate(Book, {
  price: 10000,
})

console.log(Book.getPrice()) // 45
console.log(BookNew.getPrice()) // 50
console.log(BookOld.price()) // 18
console.log(BookExpensive.price) // 10000
