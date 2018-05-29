// 策略类
const strategies = {
  '+': function(m, n) {
    return m + n
  },
  '-': function(m, n) {
    return m - n
  },
  '*': function(m, n) {
    return m * n
  },
  '/': function(m, n) {
    return m / n
  },
}

// 环境类
const operation = function(m, n, op) {
  return strategies[op](m, n)
}

console.log(operation(5, 6, '+')) // 11
console.log(operation(5, 6, '-')) // -1
console.log(operation(5, 6, '*')) // 30
console.log(operation(2, 5, '/')) // 0.4
