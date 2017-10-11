var five = require("johnny-five");
var ports = [{
        id: "R",
        port: "COM3"
    },
    {
        id: "Y",
        port: "COM4"
    }
];
var boards = new five.Boards(ports);

boards.on("ready", function() {
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
    
});

boards.repl.inject({
    red : red,
    yellow : yellow
});

var toggleLED = function(color, number){
    if(color === "red"){
        red[color].toggle();
    } else if (color === "yellow"){
        yellow[color].toggle();
    } else {
        throw new Error("invalid color");
    }
};