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
//post request convention is as follow: "/colorRowCol"
//post request will turn on the light at the given place on the board
/** Board State: red11
 * 
 *        0 |   |
 *       ___|___|___
 *          |   |
 *       ___|___|___
 *          |   |
 *          |   |
 * 
 */
app.post('/red11', function(req, res){
  res.send("Color: Red, Row: 1, Col: 1");
})
 /** Board State: red12
 * 
 *          | 0 |
 *       ___|___|___
 *          |   |
 *       ___|___|___
 *          |   |
 *          |   |
 * 
 */
app.post('/red12', function(req, res){
  res.send("Color: Red, Row: 1, Col: 2");
})
 /** Board State: red13
 * 
 *          |   | 0
 *       ___|___|___
 *          |   |
 *       ___|___|___
 *          |   |
 *          |   |
 * 
 */
app.post('/red13', function(req, res){
  res.send("Color: Red, Row: 1, Col: 3");
})
 /** Board State: red21
 * 
 *          |   |
 *       ___|___|___
 *        0 |   |
 *       ___|___|___
 *          |   |
 *          |   |
 * 
 */
app.post('/red21', function(req, res){
  res.send("Color: Red, Row: 2, Col: 1");
})
 /** Board State: red22
 * 
 *          |   |
 *       ___|___|___
 *          | 0 |
 *       ___|___|___
 *          |   |
 *          |   |
 * 
 */
app.post('/red22', function(req, res){
  res.send("Color: Red, Row: 2, Col: 2");
})
 /** Board State: red23
 * 
 *          |   |
 *       ___|___|___
 *          |   | 0
 *       ___|___|___
 *          |   |
 *          |   |
 * 
 */
app.post('/red23', function(req, res){
  res.send("Color: Red, Row: 2, Col: 3");
})
 /** Board State: red31
 * 
 *          |   |
 *       ___|___|___
 *          |   |
 *       ___|___|___
 *        0 |   |
 *          |   |
 * 
 */
app.post('/red31', function(req, res){
  res.send("Color: Red, Row: 3, Col: 1");
})
 /** Board State: red32
 * 
 *          |   |
 *       ___|___|___
 *          |   |
 *       ___|___|___
 *          | 0 |
 *          |   |
 * 
 */
app.post('/red32', function(req, res){
  res.send("Color: Red, Row: 3, Col: 2");
})
 /** Board State: red33
 * 
 *          |   |
 *       ___|___|___
 *          |   |
 *       ___|___|___
 *          |   | 0
 *          |   |
 * 
 */
app.post('/red33', function(req, res){
  res.send("Color: Red, Row: 3, Col: 3");
})
 /** Board State: yellow11
 * 
 *        1 |   |
 *       ___|___|___
 *          |   |
 *       ___|___|___
 *          |   |
 *          |   |
 * 
 */
app.post('/yellow11', function(req, res){
  res.send("Color: yellow, Row: 1, Col: 1");
})
 /** Board State: yellow12
 * 
 *          | 1 |
 *       ___|___|___
 *          |   |
 *       ___|___|___
 *          |   |
 *          |   |
 * 
 */
app.post('/yellow12', function(req, res){
  res.send("Color: Yellow, Row: 1, Col: 2");
})
 /** Board State: yellow13
 * 
 *          |   | 1
 *       ___|___|___
 *          |   |
 *       ___|___|___
 *          |   |
 *          |   |
 * 
 */
app.post('/yellow13', function(req, res){
  res.send("Color: Yellow, Row: 1, Col: 3");
})
 /** Board State: yellow21
 * 
 *          |   |
 *       ___|___|___
 *        1 |   |
 *       ___|___|___
 *          |   |
 *          |   |
 * 
 */
app.post('/yellow21', function(req, res){
  res.send("Color: Yellow, Row: 2, Col: 1");
})
 /** Board State: yellow22
 * 
 *          |   |
 *       ___|___|___
 *          | 1 |
 *       ___|___|___
 *          |   |
 *          |   |
 * 
 */
app.post('/yellow22', function(req, res){
  res.send("Color: Yellow, Row: 2, Col: 2");
})
 /** Board State: yellow23
 * 
 *          |   |
 *       ___|___|___
 *          |   | 1
 *       ___|___|___
 *          |   |
 *          |   |
 * 
 */
app.post('/yellow23', function(req, res){
  res.send("Color: Yellow, Row: 2, Col: 3");
})
 /** Board State: yellow31
 * 
 *          |   |
 *       ___|___|___
 *          |   |
 *       ___|___|___
 *        1 |   |
 *          |   |
 * 
 */
app.post('/yellow31', function(req, res){
  res.send("Color: Yellow, Row: 3, Col: 1");
})
 /** Board State: yellow32
 * 
 *          |   |
 *       ___|___|___
 *          |   |
 *       ___|___|___
 *          | 1 |
 *          |   |
 * 
 */
app.post('/yellow32', function(req, res){
  res.send("Color: Yellow, Row: 3, Col: 2");
})
 /** Board State: yellow33
 * 
 *          |   |
 *       ___|___|___
 *          |   |
 *       ___|___|___
 *          |   | 1
 *          |   |
 * 
 */
app.post('/yellow33', function(req, res){
  res.send("Color: Yellow, Row: 3, Col: 3");
})
app.listen(port, '0.0.0.0', function () {
  console.log('Example app listening on port: ' + port + ' !');
})