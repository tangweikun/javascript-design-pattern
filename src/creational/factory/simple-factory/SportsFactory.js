// 通过实例化对象创建的

// 产品抽象角色 <Product>
function Basketball() {
  this.introduce = '篮球盛行于美国'
}
Basketball.prototype = {
  getMember: function() {
    console.log('每个队伍需要5名队员')
  },
  getBallSize: function() {
    console.log('篮球很大')
  },
}

function Football() {
  this.introduce = '足球在世界范围内很流行'
}
Football.prototype = {
  getMember: function() {
    console.log('每个队伍需要11名队员')
  },
  getBallSize: function() {
    console.log('足球很大')
  },
}

// 工厂角色 <Factory>
const SportsFactory = function(name) {
  switch (name) {
    case 'NBA':
      return new BasketBall()
    case 'wordCup':
      return new FootBall()
  }
}

// 具体产品角色 <ConcreteProduct>
const NBA = SportsFactory('NBA')
const wordCup = SportsFactory('wordCup')
