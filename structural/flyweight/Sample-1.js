function Flyweight(make, model, processor) {
  this.make = make
  this.model = model
  this.processor = processor
}

const FlyWeightFactory = (function() {
  const flyweights = {}

  return {
    get: function(make, model, processor) {
      if (!flyweights[make + model]) {
        flyweights[make + model] = new Flyweight(make, model, processor)
      }
      return flyweights[make + model]
    },

    getCount: function() {
      let count = 0
      for (let f in flyweights) count++
      return count
    },
  }
})()

function ComputerCollection() {
  const computers = {}
  let count = 0

  return {
    add: function(make, model, processor, memory, tag) {
      computers[tag] = new Computer(make, model, processor, memory, tag)
      count++
    },

    get: function(tag) {
      return computers[tag]
    },

    getCount: function() {
      return count
    },
  }
}

const Computer = function(make, model, processor, memory, tag) {
  this.flyweight = FlyWeightFactory.get(make, model, processor)
  this.memory = memory
  this.tag = tag
  this.getMake = function() {
    return this.flyweight.make
  }
}

// log helper
const log = (function() {
  let log = ''

  return {
    add: function(msg) {
      log += msg + '\n'
    },
    show: function() {
      console.log(log)
    },
  }
})()

function run() {
  const computers = new ComputerCollection()
  computers.add('Dell', 'Studio XPS', 'Intel', '5G', 'Y755P')
  computers.add('Dell', 'Studio XPS', 'Intel', '6G', 'X997T')
  computers.add('Dell', 'Studio XPS', 'Intel', '2G', 'U8U80')
  computers.add('Dell', 'Studio XPS', 'Intel', '2G', 'NT777')
  computers.add('Dell', 'Studio XPS', 'Intel', '2G', '0J88A')
  computers.add('HP', 'Envy', 'Intel', '4G', 'CNU883701')
  computers.add('HP', 'Envy', 'Intel', '2G', 'TXU003283')

  log.add('Computers: ' + computers.getCount())
  log.add('Flyweights: ' + FlyWeightFactory.getCount())
  log.show()
}

run()
