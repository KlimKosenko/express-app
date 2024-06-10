const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('<h1>Hello WatchTower 123131231!</h1><br><h2>Azure test</h2>')
})

const PORT = 8080

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
