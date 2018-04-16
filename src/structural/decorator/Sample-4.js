// Decorating through prototype

const Book = {}
Book.decorate = function() {
  console.log('Book has pages.')
}

Book.getDecorator = function(deco) {
  Book[deco].prototype = this
  return new Book[deco]()
}

Book.Images = function() {
  this.decorate = function() {
    this.Images.prototype.decorate()
    console.log('Add images')
  }
}

Book.Cover = function() {
  this.decorate = function() {
    this.Cover.prototype.decorate()
    console.log('Add cover')
  }
}

Book = Book.getDecorator('Images')
Book = Book.getDecorator('Cover')

Book.decorate()
