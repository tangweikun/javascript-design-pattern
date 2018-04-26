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

// 取消订阅
event.remove = function(key, fn) {
  let fns = this.clientList[key]

  // 如果key对应的消息没有被人订阅，则直接返回
  if (!fns) return false

  // 如果没有传入具体的回调函数，表示需要取消key对应消息的所有订阅
  if (!fn) {
    fns && (fns.length = 0)
  } else {
    // 反向遍历订阅的回调函数列表
    for (let l = fns.length - 1; l >= 0; l--) {
      const _fn = fns[l]

      // 删除订阅者的回调函数
      if (_fn === fn) fns.splice(l, 1)
    }
  }
}

const installEvent = function(obj) {
  for (let i in event) {
    obj[i] = event[i]
  }
}

const salesOffices = {}

installEvent(salesOffices)

// 小明订阅消息
salesOffices.listen(
  'squareMeter88',
  (fn1 = function(price) {
    console.log('===小明订阅消息===>>价 格 = ' + price)
  }),
)

// 小红订阅消息
salesOffices.listen(
  'squareMeter100',
  (fn2 = function(price) {
    console.log('===小红订阅消息===>>价 格 = ' + price)
  }),
)

salesOffices.remove('squareMeter88', fn1) // 删除小明的订阅

salesOffices.trigger('squareMeter88', 2000000) // 输出：2000000
salesOffices.trigger('squareMeter100', 3000000) // 输出：3000000
