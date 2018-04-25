// proxy cache【缓存代理】

const multiply = function(...args) {
  console.log("You can' see me if args in cache")
  return args.reduce((product, n) => product * n, 1)
}

const proxyMultiply = (function() {
  const cache = {}
  return function() {
    const argsKey = Array.prototype.join.call(arguments, '@')
    if (argsKey in cache) return cache[argsKey]
    return (cache[argsKey] = multiply(...arguments))
  }
})()

console.log(proxyMultiply(3, 4))
console.log(proxyMultiply(3, 4))
console.log(proxyMultiply(5, 4))
