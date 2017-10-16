# cs4241-FinalProject

Team Members:
Dan Chao
Harrison Vaporciyan
Marco Duran
Brian McCarthy
Derek Murphy

Url:
twitch-tack-toe.osmorrow.com
[Images](https://imgur.com/a/E2Twl)

## General description

We created a web application that: 
1) Uses react to run a tic tac toe game.
2) Uses XMLHttpRequests within the react app to send POST requests to a server
3) Uses cross origin scripting to send messages from the web server the site is hosted on to a local server run on a desktop
4) Sends those commands from the local server to two arduinos
5) Shows the tic tac toe board on the LED-display board 
5.5) has a cool win animation of LEDs
6) Streams a video feed of the board to a twitch stream VIA twitch API

Overall Used:
Node, Express, React, Johnny-Five, Bootstrap

## Individual Contributions

Derek Murphy
- Initialized front end node express js server.
- Wrote code that prohibits O player from selecting an already selected X game component and prohibits X plate from selecting an already selected O player.
- Wrote board reset  component on the front end while Brian worked in the back end of turning off all the lights.
- Added bootstrap for easy styling
- Helped debug arduino server with nodejs updates.

Brian McCarthy
- Wrote server code to handle client requests to toggle LEDs, reset the board, and flash the "win condition" 
- Wrote server code implementing johnny-five to interact with the Arduinos when receiving the commands listed above
- Set up twitch channel and implemented twitch player embed on front-end
- Worked on Quality of Life and formatting changes on the front-end, including the title, the style of the tic-tac-toe board, and the formatting of the page.
- Assisted in debugging server and client code

harry vaporciyan
- Designed, modeled, laser-cut, assembled, and wired the physical board and webcam mount.
- wrote johnny five code to do the actual lightning up of the lights

Dan Chao
- Wrote the React app for the tic tac toe board/logic
- Got the xmlhttprequests within the react app to work, and connect to the server, sending the proper data such as the button type and ID
- Wrote the baseline HTML for the actual site, putting things where they belong
- Worked with making sure responses are getting sent back to the site (from the local laptop server) and processed correctly
- Wrote a part of the javascript used to processes the POST request sent from the React app

Marco Duran
- hosted client on a subdomain that i own
- created node server that uses an express
- made server handle cross origin requests
- wrote functionality to make a cross origin request from a client
- Changed page name and added icon
- Set up twitch streaming with obs
