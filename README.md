Assignment 7 - Sessions and MVC
===




Dan Chao  
http://a7-dchao1.herokuapp.com

This project shows ...
1. Users should be able to post messages that are stored on the server and rendered when they and other people visit the page.
2. Any post made during a "session" should be editable or removable. Posts from others should not be editable or removable.
3. Each new session i.e. visit to the page should have a specific ID that is used to identify the user both in the browser and on the server.
4.  Built with React
    * Your code should show some sort of logical separation between Views (things that are rendered and displayed to the user) and Models (which hold and manipulate data).



## Technical Achievements
-Learned React
-Firebase applied to keep the data persistent even when heroku restarts

### Design Achievements
-Basic CSS stuff, looks okish/organized
-Each post is clearly illustrated with their box
-If the user does not enter a Username, it uses Anonymous as default
-Allows users to use Usernames
-Shows sessionID so they know clearly what posts they are able to modify
-shows PostID so they can differenciate which post is which if helpful
-Bolded "Username" "session ID" "postID" for visual clarity
-Allows editing within the post itself; they are able to just edit their post which is updated to the database automatically
-Does not allow users to even type or modify other people's posts
-Remove button is hidden unless you are the poster who can delete it
-Example posts with helpful tips pre-created
