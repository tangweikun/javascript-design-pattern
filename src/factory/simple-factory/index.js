function Admin() {
  console.log('Admin created!')
}

function Customer() {
  console.log('Customer created')
}

const UserFactory = {}

UserFactory.createUser = function(type) {
  if (type === 'admin') return new Admin()
  if (type === 'customer') return new Customer()
}

const admin = UserFactory.createUser('admin')
const customer = UserFactory.createUser('customer')
