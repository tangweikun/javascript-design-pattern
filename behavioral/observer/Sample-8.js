const Event = (function() {
  const clientList = {}
  let listen
  let trigger
  let remove

  listen = function(key, fn) {
    if (!clientList[key]) {
      clientList[key] = []
    }
    clientList[key].push(fn)
  }

  trigger = function() {
    const key = Array.prototype.shift.call(arguments)
    const fns = clientList[key]

    if (!fns || fns.length === 0) return false

    for (let i = 0, fn; (fn = fns[i]); i++) {
      fn.apply(this, arguments)
    }
  }

  remove = function(key, fn) {
    const fns = clientList[key]
    if (!fns) return false

    if (!fn) {
      fns && (fns.length = 0)
    } else {
      for (let l = fns.length - 1; l >= 0; l--) {
        const _fn = fns[l]
        if (_fn === fn) fns.splice(l, 1)
      }
    }
  }
  return { listen, trigger, remove }
})()

// 小红订阅消息
Event.listen('squareMeter88', function(price) {
  console.log('价 格 = ' + price) // 输出：'价格 = 2000000'
})

Event.trigger('squareMeter88', 2000000) // 售楼处发布消息
