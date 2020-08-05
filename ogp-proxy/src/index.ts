import express from 'express'

const app = express()
app.set('view engine', 'pug')

const port = process.env.PORT || 8000

app.get('/room/*', (req, res) => {
  res.status(404).end()
})

app.get('/:roomId', (req, res) => {
  const roomId = req.params.roomId

  res.render('room', {
    ogtitle: `room ${roomId}`,
    roomId: roomId,
  })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
