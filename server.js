const express = require('express')
const path = require('path')

const app = express()

app.use(express.static('public/scripts'))

app.get('/', (req, res) =>
  res.sendFile(path.resolve(__dirname, 'public/scripts', 'index.html')))

const port = 3000
app.listen(port, () => console.log(`App web-server listening on port ${port}`))

