import { pool } from '../db.js'

const createDataBase = async () => {
  const sql = 'CREATE DATABASE IF NOT EXISTS home'

  try {
    pool.query(sql, (err, results) => {
      if (err) throw new Error(err)
      console.log('database created successfully!', results)
    })
  } catch (err) {
    console.error(err)
  }
}

createDataBase()
