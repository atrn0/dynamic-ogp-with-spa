import express from 'express'

const app = express()
app.set('view engine', 'pug')

const port = process.env.PORT || 8000

app.get('*', (req, res) => {
  res.render('room', {
    ogtitle: `${req.url} this is og:title!`,
    path: req.url,
  })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
