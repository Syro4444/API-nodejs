var PORT = process.env.PORT || 3000
const express = require('express')
const app = express()




app.get('/', function (req, res) {
  res.send('Hello World!')
})




app.listen(PORT, function () {
  console.log('listening on port 3000!')
})

