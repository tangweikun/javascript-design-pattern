const event = {
  clientList: [],
  listen: function(key, fn) {
    if (!this.clientList[key]) {
      this.clientList[key] = []
    }
    this.clientList[key].push(fn) // 订阅的消息添加进缓存列表
  },
  trigger: function() {
    const key = Array.prototype.shift.call(arguments)
    const fns = this.clientList[key]

    // 如果没有绑定对应的消息
    if (!fns || fns.length === 0) return false

    for (let i = 0, fn; (fn = fns[i]); i++) {
      fn.apply(this, arguments) // arguments 是 trigger 时带上的参数
    }
  },
}

const installEvent = function(obj) {
  for (let i in event) {
    obj[i] = event[i]
  }
}

const salesOffices = {}

installEvent(salesOffices)

// 小明订阅消息
salesOffices.listen('squareMeter88', function(price) {
  console.log('===小明订阅消息===>>价 格 = ' + price)
})

// 小红订阅消息
salesOffices.listen('squareMeter100', function(price) {
  console.log('===小红订阅消息===>>价 格 = ' + price)
})

salesOffices.trigger('squareMeter88', 2000000) // 输 出： 2000000
salesOffices.trigger('squareMeter100', 3000000) // 输 出： 3000000
