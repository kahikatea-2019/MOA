const getDbConnection = require('knex')

const testConfig = require('../server/db/knexfile')

module.exports = {
  // Connect to test data
  getTestDb: () => getDbConnection(testConfig),

  // Render fresh testDb for each test run
  initialise: (db) => {
    return db.migrate.latest()
      .then(() => {
        return db.seed.run()
      })
  },

  // Terminate the previously created db connection upon completion of each test run
  cleanup: (db) => {
    return db.destroy()
  }

}
