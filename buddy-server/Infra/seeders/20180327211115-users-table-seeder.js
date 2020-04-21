'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {})
    */
    return queryInterface.bulkInsert('users', [
        {
          id: 1,
          active: true,
          email: 'rhberro@gmail.com',
          name: 'Rafael Henrique Berro',
          password: '01911345e57c3e87f0acf03a5f941650f19d9fde19f82da4bdd9bbeb60100320a297e1bf8a2b980dffc1cdfdbf398c0c7ba1283c3e262190a4d124fb508f63b3',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ]
    )
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {})
    */
    return queryInterface.bulkDelete('users', null)
  }
}
