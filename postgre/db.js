const db = require('./pgconfig.js')

const getAll = (cb) => {
  db.pool.query("SELECT * FROM axes ORDER BY id LIMIT 50", (err, data) => {
    if (err) {
      console.error('db pg getAll error', err)
    } else {
      // console.log('db pg getAll success', data)
      cb(null, data.rows)
    }
  })
}

module.exports = {getAll};