import express from 'express'

const app = express()
app.set('view engine', 'pug')

const port = process.env.PORT || 8000

app.get('/room/:roomId', (req, res) => {
  const roomId = req.params.roomId
  const redirectTo = `/join-room/${roomId}`

  res.render('room', {
    ogtitle: `room ${roomId}`,
    roomId: roomId,
    redirectTo: redirectTo,
    ogimage: `https://via.placeholder.com/1200x680?text=roomId:+${roomId}`,
  })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
