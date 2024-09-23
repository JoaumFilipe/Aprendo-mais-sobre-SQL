import { pool } from '../db.js'

const createTable = () => {
  const sql = `
  CREATE TABLE IF NOT EXISTS room (
    id          INT           AUTO_INCREMENT NOT NULL PRIMARY KEY,
    item        VARCHAR(255)  NOT NULL,
    description TEXT
  )
`

  try {
    pool.query(sql, (err, results) => {
      if (err) throw new Error(err)
      console.log('Table created successfully!', results)
    })
  } catch (err) {
    console.log(err)
  }
}

createTable()
