# Simple Factory Pattern(简单工厂模式)

## Example

### Calculator

```js
export class Operation {
  constructor(x, y, op) {
    this.x = x
    this.y = y
    this.op = op
  }

  getResult() {
    let res
    switch (this.op) {
      case '+':
        res = operationAdd(this.x, this.y)
        break
      case '-':
        res = operationSub(this.x, this.y)
        break
      case '*':
        res = operationMul(this.x, this.y)
        break
      case '/':
        res = operationDiv(this.x, this.y)
        break
      default:
        throw new Error('运算符不合法')
    }

    return res
  }
}

function operationAdd(x, y) {
  return x + y
}

function operationSub(x, y) {
  return x - y
}

function operationMul(x, y) {
  return x * y
}

function operationDiv(x, y) {
  if (y === 0) throw new Error('除数不能为0')
  return x / y
}
```

### CreateBook

```js
// 通过创建一个新对象然后包装增强其属性和功能来实现的

function createBook(name, time, type) {
  const o = new Object()
  o.name = name
  o.time = time
  o.type = type

  o.getName = function() {
    console.log(this.name)
  }

  return o
}

const book1 = createBook('js book', 2014, 'js')
const book2 = createBook('css book', 2015, 'css')
book1.getName()
book2.getName()
```

### SportsFactory

```js
// 通过实例化对象创建的

// 产品抽象角色 <Product>
function Basketball() {
  this.introduce = '篮球盛行于美国'
}
Basketball.prototype = {
  getMember: function() {
    console.log('每个队伍需要5名队员')
  },
  getBallSize: function() {
    console.log('篮球很大')
  },
}

function Football() {
  this.introduce = '足球在世界范围内很流行'
}
Football.prototype = {
  getMember: function() {
    console.log('每个队伍需要11名队员')
  },
  getBallSize: function() {
    console.log('足球很大')
  },
}

// 工厂角色 <Factory>
const SportsFactory = function(name) {
  switch (name) {
    case 'NBA':
      return new BasketBall()
    case 'wordCup':
      return new FootBall()
  }
}

// 具体产品角色 <ConcreteProduct>
const NBA = SportsFactory('NBA')
const wordCup = SportsFactory('wordCup')
```

### UserFactory

```js
// 抽象产品角色 <Product>
function Admin() {
  return 'Admin created'
}
function Customer() {
  return 'Customer created'
}

// 工厂角色 <Factory>
export const UserFactory = {}
UserFactory.createUser = function(type) {
  if (type === 'admin') return Admin()
  if (type === 'customer') return Customer()
}

// 具体产品角色 <ConcreteProduct>
const admin = UserFactory.createUser('admin')
const customer = UserFactory.createUser('customer')
```
