const getDbConn = require('knex')

const testConfig = require('../../../server/db/knexfile').test

module.exports = {

  getCohortsTest: () => getDbConn(testConfig),

  initialise: (db) => {
    return db.migrate.latest()
      .then(() => {
        return db.seed.run()
      })
  },

  cleanup: (db) => {
    return db.destroy
  }
}
