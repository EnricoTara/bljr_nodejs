const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {res.send('Ini Enrico Megantara Halo')})
app.get('/:nama', (req, res) => {res.send(`Nama Saya : ${req.params.nama}`)})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})