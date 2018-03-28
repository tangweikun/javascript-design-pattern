import { UserFactory } from '../UserFactory'

test('UserFactory-admin', () => {
  const admin = UserFactory.createUser('admin')
  expect(admin).toBe('Admin created')
})

test('UserFactory-customer', () => {
  const customer = UserFactory.createUser('customer')
  expect(customer).toBe('Customer created')
})
