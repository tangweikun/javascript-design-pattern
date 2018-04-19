const Cat = (function() {
  let instance
  return function() {
    if (typeof instance !== 'object') {
      instance = this
    }
    return instance
  }
})()

/*============== 测试代码 ===============*/
const cat1 = new Cat()
const cat2 = new Cat()
console.log(cat1 === cat2) // true
