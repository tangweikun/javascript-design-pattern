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
