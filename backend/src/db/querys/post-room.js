import { pool } from '../db.js'

function postRoom(data) {
  const { item, description } = data

  const sql = 'INSERT INTO room (item, description) VALUES (?, ?)'
  const params = [item, description]

  return new Promise((resolve, reject) => {
    pool.execute(sql, params, (err, results) => {
      if (err) reject(err)
      resolve(results)
    })
  })
}

export { postRoom }
