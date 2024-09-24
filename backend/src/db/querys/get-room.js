import { pool } from '../db.js'

function getRoom(search) {
  const sql = search ? `SELECT * FROM room WHERE item ILIKE ?` : `SELECT * FROM room`
  const params = search ? [`${'%' + search + '%'}`] : []

  return new Promise((resolve, reject) => {
    pool.execute(sql, params, (err, results) => {
      if (err) reject(err)
      resolve(results)
    })
  })
}

export default getRoom
