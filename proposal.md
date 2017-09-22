--- 
title: An arduino controlled by a client/server and streamed on https://twitch.tv.
members: Marco Duran, Brian McCarthy, Harrison Vaporciyan, Dan Chao, Derek Murphy
--- 

#We propose to make a cool Ardunio Controlled robot that a user can control with a web interface!

Outline Start

#Primary Goal:
-Assemble an arduino that listens for POST commands to a server which is controlled by a client computer via web interface. From the web interface, users can trigger actions which will be visible from the arduino, such as turning on or off LED lights, or manipulating an etch-a-sketch using motors. The visual feedback will be recorded by a webcam and livestreamed to a Twitch player embedded on the web page. This allows users to see what their actions, and the actions of other users, are doing in real-time. There are a lot of routes we can go with this idea of a web-interface robot controller.

##Technical Challenge:
-Setting up the Arduino to listen for, and handle, POST commands
-Implementing the Twitch embed, and handling multiple users’ inputs at once without issues. 

###Stretch Goals:
-Display a list of commands as they are input
-Make the real-world task performed by the Arduino more complex (implementing a rudimentary LED display or sending texts/tweets, for example) 
-Add a mode for games where, for example multiple users can compete to move the robot in some way (like tug of war) or some other kind of competition.
-Possibly make it public prior to the due date, and have real random people inputting commands to operate the robot during the presentation




