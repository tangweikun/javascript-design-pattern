// 抽象产品角色 <Product>
function Admin() {
  return 'Admin created'
}
function Customer() {
  return 'Customer created'
}

// 工厂角色 <Factory>
export const UserFactory = {}
UserFactory.createUser = function(type) {
  if (type === 'admin') return Admin()
  if (type === 'customer') return Customer()
}

// 具体产品角色 <ConcreteProduct>
const admin = UserFactory.createUser('admin')
const customer = UserFactory.createUser('customer')
