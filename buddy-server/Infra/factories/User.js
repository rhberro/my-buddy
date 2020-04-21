const faker = require('faker')

function UserFactory () {
  return {
    active: faker.random.boolean(),
    email: faker.internet.email(),
    name: faker.name.findName(),
    password: '01911345e57c3e87f0acf03a5f941650f19d9fde19f82da4bdd9bbeb60100320a297e1bf8a2b980dffc1cdfdbf398c0c7ba1283c3e262190a4d124fb508f63b3', // 123123.
    createdAt: faker.date.recent(),
    updatedAt: faker.date.recent()
  }
}

module.exports = function User (quantity) {
  return new Array(quantity).fill().map(UserFactory)
}
