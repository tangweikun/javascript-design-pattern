function GeoCoder() {
  this.getLatLng = function(address) {
    if (address === 'Amsterdam') return '52.3700° N, 4.8900° E'
    if (address === 'London') return '51.5171° N, 0.1062° W'
    if (address === 'Paris') return '48.8742° N, 2.3470° E'
    if (address === 'Berlin') return '52.5233° N, 13.4127° E'
    return ''
  }
}

function GeoProxy() {
  const geocoder = new GeoCoder()
  const geocache = {}

  return {
    getLatLng: function(address) {
      if (!geocache[address]) {
        geocache[address] = geocoder.getLatLng(address)
      }
      log.add(address + ': ' + geocache[address])
      return geocache[address]
    },
    getCount: function() {
      let count = 0
      for (let code in geocache) count++
      return count
    },
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
  const geo = new GeoProxy()

  geo.getLatLng('Paris')
  geo.getLatLng('London')
  geo.getLatLng('London')
  geo.getLatLng('Amsterdam')
  geo.getLatLng('Amsterdam')
  geo.getLatLng('London')

  log.add('\nCache size: ' + geo.getCount())
  log.show()
}

run()
