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
