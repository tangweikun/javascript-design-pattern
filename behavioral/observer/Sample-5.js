const salesOffices = {} // 定义售楼处

salesOffices.clientList = [] // 缓存列表,存放订阅者的回调函数

// 增加订阅者
salesOffices.listen = function(fn) {
  this.clientList.push(fn) // 订阅的消息添加进缓存列表
}

// 发布消息
salesOffices.trigger = function() {
  for (let i = 0, fn; (fn = this.clientList[i]); i++) {
    fn.apply(this, arguments) // arguments是发布消息时带上的参数
  }
}

// 小明订阅消息
salesOffices.listen(function(price, squareMeter) {
  console.log('===小明收到===')
  console.log('价 格 = ' + price)
  console.log('squareMeter = ' + squareMeter)
})

// 小红订阅消息
salesOffices.listen(function(price, squareMeter) {
  console.log('===小红收到===')
  console.log('价 格 = ' + price)
  console.log('squareMeter = ' + squareMeter)
})

salesOffices.trigger(2000000, 88) // 输出：2000000，88
salesOffices.trigger(3000000, 110) // 输出：3000000，110
