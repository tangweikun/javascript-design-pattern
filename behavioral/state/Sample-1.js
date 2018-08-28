var TrafficLight = function() {
  var count = 0
  var currentState = new Red(this)

  this.change = function(state) {
    // limits number of changes
    if (count++ >= 10) return
    currentState = state
    currentState.go()
  }

  this.start = function() {
    currentState.go()
  }
}

var Red = function(light) {
  this.light = light

  this.go = function() {
    log.add('Red --> for 1 minute')
    light.change(new Green(light))
  }
}

var Yellow = function(light) {
  this.light = light

  this.go = function() {
    log.add('Yellow --> for 10 seconds')
    light.change(new Red(light))
  }
}

var Green = function(light) {
  this.light = light

  this.go = function() {
    log.add('Green --> for 1 minute')
    light.change(new Yellow(light))
  }
}

// log helper

var log = (function() {
  var log = ''

  return {
    add: function(msg) {
      log += msg + '\n'
    },
    show: function() {
      console.log(log)
      log = ''
    },
  }
})()

function run() {
  var light = new TrafficLight()
  light.start()

  log.show()
}

run()
