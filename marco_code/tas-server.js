//DO NOT RUN THIS SERVER IF YOU ARE EXPECTING TO SEE TWITCH
//This server handles the post requests from the domain: twitch-a-sketch.osmorrow.com
// Author: Marco Duran
const express = require('express')
const app = express()
var five = require("johnny-five")

app.use(express.static('public'), function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

const port = 8080;

app.listen(port, '0.0.0.0', function() {
    console.log('Twitch-Tack-Toe is listening on port: ' + port + ' !');
})

var ports = [{
        id: "R",
        port: "COM8"
    },
    {
        id: "Y",
        port: "COM9"
    }
];


var boards = new five.Boards(ports);

boards.on("ready", function() {
    console.log("In BOARDS ON")

    var boardR = boards.byId("R");
    var boardY = boards.byId("Y");
    var red = new five.Leds([{
        // Red 0
        pin: 13,
        board: boardR
    }, {
        // Red 1
        pin: 3,
        board: boardR
    }, {
        // Red 2
        pin: 12,
        board: boardR
    }, {
        // Red 3
        pin: 11,
        board: boardR
    }, {
        // Red 4
        pin: 10,
        board: boardR
    }, {
        // Red 5
        pin: 8,
        board: boardR
    }, {
        // Red 6
        pin: 7,
        board: boardR
    }, {
        // Red 7
        pin: 5,
        board: boardR
    }, {
        // Red 8
        pin: 2,
        board: boardR
    }]);
    //console.log(red);
    var yellow = new five.Leds([{
        // Yellow 0
        pin: 13,
        board: boardY
    }, {
        // Yellow 1
        pin: 12,
        board: boardY
    }, {
        // Yellow 2
        pin: 11,
        board: boardY
    }, {
        // Yellow 3
        pin: 10,
        board: boardY
    }, {
        // Yellow 4
        pin: 8,
        board: boardY
    }, {
        // Yellow 5
        pin: 7,
        board: boardY
    }, {
        // Yellow 6
        pin: 5,
        board: boardY
    }, {
        // Yellow 7
        pin: 4,
        board: boardY
    }, {
        // Yellow 8
        pin: 3,
        board: boardY
    }]);
    //console.log(yellow);
    /**
    var r = 0, y = 0;
    red[r].toggle();
    yellow[y].toggle();

    boardR.loop(50, function() {
        red[r++].toggle();
        if (r === red.length) r = 0;
        red[r].toggle();
    });

    boardY.loop(50, function() {
        yellow[y++].toggle();
        if (y === yellow.length) y = 0;
        yellow[y].toggle();
    });
    */
    boardR.on("exit", function() {
        red.off();
    });

    boardY.on("exit", function() {
        yellow.off();
    });

    // boards.repl.inject({
    //     red: red,
    //     yellow: yellow
    // });
    var toggleLED = function(color, number) {
        if (color === "red") {
            red[number].toggle();
        } else if (color === "yellow") {
            yellow[number].toggle();
        } else {
            throw new Error("invalid color");
        }
    };

    var winCondition = function() {
      var finished = false;
      var r = 0, y = 0;
      setTimeout(function() {
        finished = true;
        red.off();
        yellow.off();
      }, 5000);
      while(!finished){
        setTimeout(function(){
          red[r].toggle();
          yellow[y].toggle();
          red[r++].toggle();
          if (r === red.length) r = 0;
          red[r].toggle();
          yellow[y++].toggle();
          if (y === yellow.length) y = 0;
          yellow[y].toggle();
        }, 50);
        

      }

    }

    app.get('/', function(req, res) {
        res.send("Hi");
    })

    app.get('/test', function(req, res) {
        res.send("Test1");
    })

    app.post('/posttest', function(req, res) {
        res.send("Post test success!");
    })

    app.get('/reset', function(req, res) {
        red.off();
        yellow.off();
        console.log("RESET CALLED");
    })

    app.get('/win', function(req, res){
      winCondition();
    }

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
    app.post('/red0', function(req, res) {
            toggleLED("red", 0);
            console.log("Red 0");
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
    app.post('/red1', function(req, res) {
            toggleLED("red", 1);
            console.log("Red 1");
            res.send("Color: Red, Square: 1");
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
    app.post('/red2', function(req, res) {
            toggleLED("red", 2);
            console.log("Red 2");
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
    app.post('/red3', function(req, res) {
            toggleLED("red", 3);
            console.log("Red 3");
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
    app.post('/red4', function(req, res) {
            toggleLED("red", 4);
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
    app.post('/red5', function(req, res) {
            toggleLED("red", 5);
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
    app.post('/red6', function(req, res) {
            toggleLED("red", 6);
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
    app.post('/red7', function(req, res) {
            toggleLED("red", 7);
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
    app.post('/red8', function(req, res) {
            toggleLED("red", 8);
            console.log("Red 8");
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
    app.post('/yellow0', function(req, res) {
            toggleLED("yellow", 0);
            console.log("Yellow 0");
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
    app.post('/yellow1', function(req, res) {
            toggleLED("yellow", 1);
            console.log("Yellow 1");
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
    app.post('/yellow2', function(req, res) {
            toggleLED("yellow", 2);
            console.log("Yellow 2");
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
    app.post('/yellow3', function(req, res) {
            toggleLED("yellow", 3);
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
    app.post('/yellow4', function(req, res) {
            toggleLED("yellow", 4);
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
    app.post('/yellow5', function(req, res) {
            toggleLED("yellow", 5);
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
    app.post('/yellow6', function(req, res) {
            toggleLED("yellow", 6);
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
    app.post('/yellow7', function(req, res) {
            toggleLED("yellow", 7);
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
    app.post('/yellow8', function(req, res) {
        toggleLED("yellow", 8);
        res.send("Color: Yellow, Square: 8");
    })
});