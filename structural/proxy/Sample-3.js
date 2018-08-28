// 动态创建代理

const mult = function(...args) {
  return args.reduce((product, n) => product * n, 1)
}

const plus = function(...args) {
  return args.reduce((sum, n) => sum + n, 0)
}

const createProxyFactory = function(fn) {
  const cache = {}
  return function() {
    const argsKey = Array.prototype.join.call(arguments, '&')
    if (argsKey in cache) {
      return cache[argsKey]
    }
    return (cache[argsKey] = fn(...arguments))
  }
}

const proxyMult = createProxyFactory(mult)
const proxyPlus = createProxyFactory(plus)

console.log(proxyMult(2, 3, 4))
console.log(proxyMult(2, 3, 4))
console.log(proxyPlus(2, 3, 4))
console.log(proxyPlus(2, 3, 4))
