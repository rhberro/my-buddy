const UserRepository = require('Infra/repositories/UserRepository')

module.exports = async function FindUser (data) {
  return UserRepository.find(data)
}
