# Singleton Pattern(单例模式)

## Example

### Sample-1

```js
let instance = null

class Singleton {
  static get instance() {
    return instance
  }

  static set instance(_instance) {
    instance = _instance
  }

  constructor() {
    if (Singleton.instance === null) {
      Singleton.instance = this
    }
    return Singleton.instance
  }

  toString() {
    return '[object Singleton]'
  }

  getInstance() {
    return new Singleton()
  }
}
```

### Sample-2

```js
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
```

### Sample-3

```js
const Cat = (function() {
  let instance
  return function() {
    if (!instance) {
      instance = this
    }
    return instance
  }
})()

/*============== 测试代码 ===============*/
const cat1 = new Cat()
const cat2 = new Cat()
console.log(cat1 === cat2) // true
```

### Sample-4

```js
// 用代理实现单例模式

function Cat() {}

const ProxyCat = (function() {
  let instance
  return function() {
    if (!instance) {
      instance = new Cat()
    }
    return instance
  }
})()

/*============== 测试代码 ===============*/
const cat1 = new ProxyCat()
const cat2 = new ProxyCat()
console.log(cat1 === cat2) // true
```

### Sample-5

```js
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
```
