const UserRepository = require('Infra/repositories/UserRepository')

module.exports = async function GetUser () {
  return UserRepository.get()
}
