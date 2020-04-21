const { User } = require('Infra/models/Models')

module.exports = {
  get: async function () {
    return User.findAll()
  },
  find: async function (data) {
    return User.findById(data)
  },
  create: async function (data) {
    return User.create(data)
  }
}
