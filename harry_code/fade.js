var five = require("johnny-five")
var board = new five.Board({port: "COM3"})

board.on("ready", function() {
  var rgb = new five.Led.RGB([6, 5, 3]);
  //var rainbow = ["FF0000", "FF7F00", "FFFF00", "00FF00", "0000FF", "4B0082", "8F00FF"];
  var c = "00000000";
  var cHex = 0x00000000;
  const maxVal = "FFFFFF";

  this.loop(3, function() {
    // if(currentColor[2] < maxVal) {
    //   currentColor[2] += 0x04;
    // } else if(currentColor[1] < maxVal) {
    //   currentColor[2] = 0x00;
    //   currentColor[1] += 0x08;
    // } else if(currentColor[0] < maxVal) {
    //   currentColor[2] = 0x00;
    //   currentColor[1] = 0x00;
    //   currentColor[0] += 0x0f;
    // } else { //[0xff, 0xff, 0xff]
    //   currentColor[2] = 0x00;
    //   currentColor[1] = 0x00;
    //   currentColor[0] = 0x00;
    // }
    // console.log(currentColor);
    if(c === maxVal) {
      c = "00000000";
      cHex = 0x00000000;
    } else {
      cHex += 0x00000004;
      console.log("cHex = " + cHex);
      c = '#' + cHex.toString(16);
    }
    console.log("c = " + c);
    rgb.color(c);
  });

  this.on("exit", function() {
    rgb.off();
  });
});