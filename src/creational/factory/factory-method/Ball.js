// HELP:

const Ball = function(type, name) {
  if (this instanceof Ball) {
    return new this[type](name)
  }
  return new Ball(type, name)
}

Ball.prototype = {
  basketBall: function(name) {
    this.play = function() {
      console.log('我在打' + name)
    }
  },
  footBall: function(name) {
    this.play = function() {
      console.log('我在踢' + name)
    }
  },
  // ....
}

const football = new Ball('footBall', '足球')
football.play()
const basketball = new Ball('basketBall', '篮球')
basketball.play()
