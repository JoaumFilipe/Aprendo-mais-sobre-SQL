import mysql2 from 'mysql2'

const pool = mysql2.createPool({
  host: 'localhost',
  user: 'root',
  password: process.env.MYSQL_ROOT_PASSWORD,
  database: 'home',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
})

export { pool }
