const getDbConn = require('knex')

const testConfig = require('../server/db/knexfile').test

module.exports = {
  // Create a separate in-memory database before each test
  // In our tests, we can get at the database as `t.context.db`
  getTestDb: () => getDbConn(testConfig),

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
