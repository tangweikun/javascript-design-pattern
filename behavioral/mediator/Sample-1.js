var Participant = function(name) {
  this.name = name
  this.chatroom = null
}

Participant.prototype = {
  send: function(message, to) {
    this.chatroom.send(message, this, to)
  },
  receive: function(message, from) {
    log.add(from.name + ' to ' + this.name + ': ' + message)
  },
}

var Chatroom = function() {
  var participants = {}

  return {
    register: function(participant) {
      participants[participant.name] = participant
      participant.chatroom = this
    },

    send: function(message, from, to) {
      if (to) {
        // single message
        to.receive(message, from)
      } else {
        // broadcast message
        for (let key in participants) {
          if (participants[key] !== from) {
            participants[key].receive(message, from)
          }
        }
      }
    },
  }
}

// log helper
var log = (function() {
  let log = ''

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
  var yoko = new Participant('Yoko')
  var john = new Participant('John')
  var paul = new Participant('Paul')
  var ringo = new Participant('Ringo')

  var chatroom = new Chatroom()
  chatroom.register(yoko)
  chatroom.register(john)
  chatroom.register(paul)
  chatroom.register(ringo)

  yoko.send('All you need is love.')
  yoko.send('I love you John.')
  john.send('Hey, no need to broadcast', yoko)
  paul.send('Ha, I heard that!')
  ringo.send('Paul, what do you think?', paul)

  log.show()
}

run()
