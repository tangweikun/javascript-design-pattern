var Observable = {}
;(function(O) {
  var observers = [],
    privateVar

  O.addObserver = function(observer) {
    observers.push(observer)
  }

  O.removeObserver = function(observer) {
    var index = observers.indexOf(observer)

    if (~index) {
      observers.splice(index, 1)
    }
  }

  O.notifyObservers = function() {
    for (var i = observers.length - 1; i >= 0; i--) {
      observers[i].update()
    }
  }

  O.updatePrivate = function(newValue) {
    privateVar = newValue
    this.notifyObservers()
  }

  O.getPrivate = function() {
    return privateVar
  }
})(Observable)

Observable.addObserver({
  update: function() {
    this.process()
  },
  process: function() {
    var value = Observable.getPrivate()
    console.log('Private value is: ' + value)
  },
})

Observable.updatePrivate('test 1')
// Private value is: test 1

Observable.updatePrivate('test 2')
// Private value is: test 2
