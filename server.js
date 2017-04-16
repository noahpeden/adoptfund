const path = require('path');
const express = require('express');
const app = express();

const environment = process.env.NODE_ENV || 'development'

app.set('port', process.env.PORT || 3000)

app.use(express.static('public'))

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, './public/index.html'))
})

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, './public/index.html'))
});

app.listen(app.get('port'), () => {
  console.log(`Running on ${app.get('port')}`)
})
