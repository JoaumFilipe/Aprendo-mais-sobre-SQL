import express from 'express'
import getRoom from './db/querys/get-room.js'
import postRoom from './db/querys/post-room.js'

export const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Rotas da aplicação
app.get('/room?:search', async (req, res) => {
  const search = req.query.search

  try {
    const data = await getRoom(search)
    res.status(200).json(data)
  } catch (err) {
    res.status(500).send('Error fetching data')
  }
})

app.post('/room', async (req, res) => {
  const dataForm = req.body

  try {
    await postRoom(dataForm)
    res.redirect('/room')
  } catch (err) {
    res.status(500).send('Error fetching data')
  }
})
