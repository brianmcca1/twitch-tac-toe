//DO NOT RUN THIS SERVER IF YOU ARE EXPECTING TO SEE TWITCH
//This server handles the post requests from the domain: twitch-a-sketch.osmorrow.com
// Author: Marco Duran
const express = require('express')
const app = express()
app.use(express.static('public'), function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

const port = 8080;

app.get('/', function (req, res) {
  res.send("Hi");
})

app.get('/test', function (req, res){
  res.send("Test1");
})

app.post('/posttest', function(req, res){
  res.send("Post test success!");
})

//Handle post requests to take in game input
// 0 is red, 1 is yellow
//post request convention is as follow: "/colorSquare#"
//square numbers are 0 - 8
//post request will turn on the light at the given place on the board
/** Board State: red0
 * 
 *        0 |   |
 *       ___|___|___
 *          |   |
 *       ___|___|___
 *          |   |
 *          |   |
 * 
 */
app.post('/red0', function(req, res){
  res.send("Color: Red, Square: 0");
})
 /** Board State: red1
 * 
 *          | 0 |
 *       ___|___|___
 *          |   |
 *       ___|___|___
 *          |   |
 *          |   |
 * 
 */
app.post('/red1', function(req, res){
  res.send("Color: Red, Square: 0");
})
 /** Board State: red2
 * 
 *          |   | 0
 *       ___|___|___
 *          |   |
 *       ___|___|___
 *          |   |
 *          |   |
 * 
 */
app.post('/red2', function(req, res){
  res.send("Color: Red, Square: 2");
})
 /** Board State: red3
 * 
 *          |   |
 *       ___|___|___
 *        0 |   |
 *       ___|___|___
 *          |   |
 *          |   |
 * 
 */
app.post('/red3', function(req, res){
  res.send("Color: Red, Square: 3");
})
 /** Board State: red4
 * 
 *          |   |
 *       ___|___|___
 *          | 0 |
 *       ___|___|___
 *          |   |
 *          |   |
 * 
 */
app.post('/red4', function(req, res){
  res.send("Color: Red, Square: 4");
})
 /** Board State: red5
 * 
 *          |   |
 *       ___|___|___
 *          |   | 0
 *       ___|___|___
 *          |   |
 *          |   |
 * 
 */
app.post('/red5', function(req, res){
  res.send("Color: Red, Square: 5");
})
 /** Board State: red6
 * 
 *          |   |
 *       ___|___|___
 *          |   |
 *       ___|___|___
 *        0 |   |
 *          |   |
 * 
 */
app.post('/red6', function(req, res){
  res.send("Color: Red, Square: 6");
})
 /** Board State: red7
 * 
 *          |   |
 *       ___|___|___
 *          |   |
 *       ___|___|___
 *          | 0 |
 *          |   |
 * 
 */
app.post('/red7', function(req, res){
  res.send("Color: Red, Square: 7");
})
 /** Board State: red8
 * 
 *          |   |
 *       ___|___|___
 *          |   |
 *       ___|___|___
 *          |   | 0
 *          |   |
 * 
 */
app.post('/red8', function(req, res){
  res.send("Color: Red, Square: 8");
})
 /** Board State: yellow0
 * 
 *        1 |   |
 *       ___|___|___
 *          |   |
 *       ___|___|___
 *          |   |
 *          |   |
 * 
 */
app.post('/yellow0', function(req, res){
  res.send("Color: yellow, Square: 0");
})
 /** Board State: yellow1
 * 
 *          | 1 |
 *       ___|___|___
 *          |   |
 *       ___|___|___
 *          |   |
 *          |   |
 * 
 */
app.post('/yellow1', function(req, res){
  res.send("Color: Yellow, Square: 1");
})
 /** Board State: yellow2
 * 
 *          |   | 1
 *       ___|___|___
 *          |   |
 *       ___|___|___
 *          |   |
 *          |   |
 * 
 */
app.post('/yellow2', function(req, res){
  res.send("Color: Yellow, Square: 2");
})
 /** Board State: yellow3
 * 
 *          |   |
 *       ___|___|___
 *        1 |   |
 *       ___|___|___
 *          |   |
 *          |   |
 * 
 */
app.post('/yellow3', function(req, res){
  res.send("Color: Yellow, Square: 3");
})
 /** Board State: yellow4
 * 
 *          |   |
 *       ___|___|___
 *          | 1 |
 *       ___|___|___
 *          |   |
 *          |   |
 * 
 */
app.post('/yellow4', function(req, res){
  res.send("Color: Yellow, Square: 4");
})
 /** Board State: yellow5
 * 
 *          |   |
 *       ___|___|___
 *          |   | 1
 *       ___|___|___
 *          |   |
 *          |   |
 * 
 */
app.post('/yellow5', function(req, res){
  res.send("Color: Yellow, Square: 5");
})
 /** Board State: yellow6
 * 
 *          |   |
 *       ___|___|___
 *          |   |
 *       ___|___|___
 *        1 |   |
 *          |   |
 * 
 */
app.post('/yellow6', function(req, res){
  res.send("Color: Yellow, Square: 6");
})
 /** Board State: yellow7
 * 
 *          |   |
 *       ___|___|___
 *          |   |
 *       ___|___|___
 *          | 1 |
 *          |   |
 * 
 */
app.post('/yellow7', function(req, res){
  res.send("Color: Yellow, Square: 7");
})
 /** Board State: yellow8
 * 
 *          |   |
 *       ___|___|___
 *          |   |
 *       ___|___|___
 *          |   | 1
 *          |   |
 * 
 */
app.post('/yellow8', function(req, res){
  res.send("Color: Yellow, Square: 8");
})
app.listen(port, '0.0.0.0', function () {
  console.log('Example app listening on port: ' + port + ' !');
})