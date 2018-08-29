class Person {
  constructor() {
    if (typeof Person.instance === 'object') {
      return Person.instance
    }
    Person.instance = this
    return this
  }
}

const p1 = new Person()
const p2 = new Person()
console.log(p1 === p2)
