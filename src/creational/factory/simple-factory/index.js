// 抽象产品角色 <Product>
function Admin() {
  console.log('Admin created!')
}
function Customer() {
  console.log('Customer created')
}

// 工厂角色 <Factory>
const UserFactory = {}
UserFactory.createUser = function(type) {
  if (type === 'admin') return new Admin()
  if (type === 'customer') return new Customer()
}

// 具体产品角色 <ConcreteProduct>
const admin = UserFactory.createUser('admin')
const customer = UserFactory.createUser('customer')
