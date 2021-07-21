const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  password: 'Sutdzu851',
  host: "localhost",
  port: 5432,
  database: "rest_pets"
})

module.exports = pool
