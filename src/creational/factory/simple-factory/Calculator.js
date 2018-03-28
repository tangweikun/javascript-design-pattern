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
