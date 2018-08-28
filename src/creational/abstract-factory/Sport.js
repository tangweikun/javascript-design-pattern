// HELP:

// 抽象工厂模式
export const Sport = function(subType, superType) {
  if (typeof Sport[superType] === 'function') {
    function F() {} // 缓存类
    F.prototype = new Sport[superType]() // 继承父类属性和方法
    subType.constructor = subType // 将子类constructor指向子类
    subType.prototype = new F() // 子类原型继承父类
  } else {
    throw new Error('未创建该抽象类')
  }
}

// 球类运动抽象类
Sport.Ball = function() {
  this.type = 'ball'
}
Sport.Ball.prototype = {
  play: function() {
    return new Error('抽象方法不能调用')
  },
}

// 力量型运动抽象类
Sport.Power = function() {
  this.type = 'power'
}
Sport.Power.prototype = {
  play: function() {
    return new Error('抽象方法不能调用')
  },
}

// 速度型运动抽象类
Sport.Speed = function() {
  this.type = 'speed'
}
Sport.Speed.prototype = {
  play: function() {
    return new Error('抽象方法不能调用')
  },
}

// 篮球类
export const BasketBall = function(name) {
  this.name = name
}
// 抽象工厂实现对球类运动的继承
Sport(BasketBall, 'Ball')
BasketBall.prototype.play = function() {
  return '我在玩' + this.name
}

// 举重类
export const WeightLifting = function(name) {
  this.name = name
}
// 抽象工厂实现对力量型运动的继承
Sport(WeightLifting, 'Power')
WeightLifting.prototype.play = function() {
  return '我在玩' + this.name
}

// 跑步类
export const Running = function(name) {
  this.name = name
}
// 抽象工厂实现对速度运动的继承
Sport(Running, 'Speed')
Running.prototype.play = function() {
  return '我在玩' + this.name
}

// 抽象工厂模式实现
const basketBall = new BasketBall('篮球')
basketBall.play()

const weightLifting = new WeightLifting('举重')
weightLifting.play()

const running = new Running('跑步')
running.play()
