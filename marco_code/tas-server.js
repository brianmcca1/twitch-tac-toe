//DO NOT RUN THIS SERVER IF YOU ARE EXPECTING TO SEE TWITCH
//This server handles the post requests from the domain: twitch-a-sketch.osmorrow.com
// 
const express = require('express')
const app = express()
app.use(express.static('public'));

const port = 8080;

app.get('/', function (req, res) {
  res.send("Hi");
})

app.listen(port, '0.0.0.0', function () {
  console.log('Example app listening on port: ' + port + ' !');
})