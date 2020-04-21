var SecurityRouter = require('security-route').Router

const { getUserAction, findUserAction, createUserAction } = require('Infra/controllers/UserController')

function sessionValidationService (accessToken) {
  return true
}

module.exports = function configureRoutes (app, router) {
  const securityRouter = SecurityRouter(router, [], sessionValidationService)

  // Users.
  router.get('/users', getUserAction)
  router.get('/users/:id', findUserAction)
  router.post('/users', createUserAction)

  return securityRouter.getRouter()
}
