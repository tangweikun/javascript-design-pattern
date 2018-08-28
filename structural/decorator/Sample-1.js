// Basic object
const Book = {
  name: 'great book',
  pages: 145,
}

BookNew = new Book()

// Let's decorate
BookNew.getHeading = function() {
  return 'title: ' + this.name + '; pages: ' + this.pages
}

console.log(BookNew.getHeading()) // title: great book; pages: 145
