# Proxy Pattern(代理模式)

## TODO:

- [ ] 虚拟代理实现图片预加载
- [ ] 虚拟代理合并 HTTP 请求

## Examples

### E1

```js
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
```

### E2

```js
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
```
