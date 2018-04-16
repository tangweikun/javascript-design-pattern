var Observable = {
  observers: [],
  addObserver: function(observer) {
    this.observers.push(observer)
  },
  removeObserver: function(observer) {
    var index = this.observers.indexOf(observer)

    if (~index) {
      this.observers.splice(index, 1)
    }
  },
  notifyObservers: function(message) {
    for (var i = this.observers.length - 1; i >= 0; i--) {
      this.observers[i](message)
    }
  },
}

Observable.addObserver(function(message) {
  console.log('First observer message:' + message)
})

var observer = function(message) {
  console.log('Second observer message:' + message)
}

Observable.addObserver(observer)

Observable.notifyObservers('test 1')
// Second observer message:test 1
// First observer message:test 1

Observable.removeObserver(observer)

Observable.notifyObservers('test 2')
// First observer message:test 2
