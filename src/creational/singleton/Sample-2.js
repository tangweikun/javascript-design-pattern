const Singleton = function(name) {
  this.name = name
  this.instance = null
}

Singleton.prototype.getName = function() {
  console.log(this.name)
}

Singleton.getInstance = function(name) {
  if (!this.instance) {
    this.instance = new Singleton(name)
  }
  return this.instance
}

const a = Singleton.getInstance('A')
const b = Singleton.getInstance('B')
console.log(a === b) // true
a.getName() // A
b.getName() // B
