const salesOffices = {} // 定义售楼处

salesOffices.clientList = {} // 缓存列表，存放订阅者的回调函数

salesOffices.listen = function(key, fn) {
  if (!this.clientList[key]) {
    // 如果还没有订阅过此类消息，给该类消息创建一个缓存列表
    this.clientList[key] = []
  }
  this.clientList[key].push(fn) // 订阅的消息添加进消息缓存列表
}

// 发布消息
salesOffices.trigger = function() {
  const key = Array.prototype.shift.call(arguments) // 取出消息类型
  const fns = this.clientList[key] // 取出该消息对应的回调函数集合

  // 如果没有订阅该消息，则返回
  if (!fns || fns.length === 0) {
    return false
  }

  for (let i = 0, fn; (fn = fns[i]); i++) {
    fn.apply(this, arguments) //arguments是发布消息时附送的参数
  }
}

// 小明订阅88平方米房子的消息
salesOffices.listen('squareMeter88', function(price) {
  console.log('小明--->价 格 = ' + price) // 输出：2000000
})

// 小红订阅110平方米房子的消息
salesOffices.listen('squareMeter110', function(price) {
  console.log('小红--->价 格 = ' + price) // 输出：3000000
})

salesOffices.trigger('squareMeter88', 2000000) // 发布88平方米房子的价格
salesOffices.trigger('squareMeter110', 3000000) //发布110平方米房子的价格
