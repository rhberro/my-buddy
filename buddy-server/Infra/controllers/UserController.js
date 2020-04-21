const GetUser = require('Domain/UseCases/User/GetUser')
const FindUser = require('Domain/UseCases/User/FindUser')
const CreateUser = require('Domain/UseCases/User/CreateUser')

function respondWithSuccess (response, data) {
  return response.status(201).send(data)
}

function respondWithError (response, data) {
  console.log(data)
  return response.status(400).send(data)
}

module.exports = {
  getUserAction: async function (request, response) {
    const { body } = request

    try {
      const user = await GetUser(body)
      respondWithSuccess(response, user)
    } catch (error) {
      respondWithError(response, error)
    }
  },
  findUserAction: async function (request, response) {
    const { params: { id } } = request

    try {
      const user = await FindUser(id)
      respondWithSuccess(response, user)
    } catch (error) {
      respondWithError(response, error)
    }
  },
  createUserAction: async function (request, response) {
    const { body } = request

    try {
      const user = await CreateUser(body)
      respondWithSuccess(response, user)
    } catch (error) {
      respondWithError(response, error)
    }
  }
}
