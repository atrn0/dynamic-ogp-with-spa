import express from 'express'

const app = express()
const port = process.env.PORT || 8000

app.get('*', (req, res) => {
  res.send(req.url + ' from ogp proxy')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})