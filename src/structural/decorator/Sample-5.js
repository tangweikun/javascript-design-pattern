// Decorating Constructors With New Functionality

// A vehicle constructor
function Vehicle(vehicleType) {
  this.vehicleType = vehicleType || 'car'
  this.model = 'default'
  this.license = '00000-000'
}

// Test instance for a basic vehicle
// Outputs: vehicle: car, model:default, license: 00000-000
const testInstance = new Vehicle()
console.log('💥testInstance💥:', testInstance)

// Lets create a new instance of vehicle, to be decorated
const truck = new Vehicle('truck')

// New functionality we're decorating vehicle with
truck.setModel = function(modelName) {
  this.model = modelName
}
truck.setColor = function(color) {
  this.color = color
}

// Test the value setters and value assignment works correctly
// Outputs: vehicle:truck, model:CAT, color: blue
truck.setModel('CAT')
truck.setColor('blue')
console.log('💥truck💥:', truck)

// Demonstrate "vehicle" is still unaltered
// Outputs: vehicle: car, model:default, license: 00000-000
const secondInstance = new Vehicle('car')
console.log('💥secondInstance💥', secondInstance)
