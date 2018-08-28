var Observable = {
  observers: [],
  addObserver: function(topic, observer) {
    this.observers[topic] || (this.observers[topic] = [])

    this.observers[topic].push(observer)
  },
  removeObserver: function(topic, observer) {
    if (!this.observers[topic]) return

    var index = this.observers[topic].indexOf(observer)

    if (~index) {
      this.observers[topic].splice(index, 1)
    }
  },
  notifyObservers: function(topic, message) {
    if (!this.observers[topic]) return

    for (var i = this.observers[topic].length - 1; i >= 0; i--) {
      this.observers[topic][i](message)
    }
  },
}

Observable.addObserver('cart', function(message) {
  console.log('First observer message:' + message)
})

Observable.addObserver('notificatons', function(message) {
  console.log('Second observer message:' + message)
})

Observable.notifyObservers('cart', 'test 1')
// First observer message:test 1

Observable.notifyObservers('notificatons', 'test 2')
// Second observer message:test 2
