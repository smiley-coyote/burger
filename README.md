# Welcome to Burger Logger!

* This app uses MySQL, Node, Express, Handlebars and a homemade ORM to create and log burger names. 
* The data is stored within the JawsDB add-on so that it'll work on Heroku and not just locally.

## How the app works:
1. Once a burger name is submitted, a POST request is sent over to the back-end side with the new burger information.
1. The controller handles this request and calls the model to process this data.
1. The model then calls an ORM to handle all of the MYSQL data.
1. Once the model gets the data back within a callback function, it sends it back over to the controller, which sends it up to the front.
1. Handlebars are used in the front end to display all of the front end information.

## What was the point of creating this app?
* I created this app to practice my newly learned skills using homemade ORMs, Express, and Handlebars. An application like this would be useful for those wanting to create something that can retrieve, organize, and store newly created data within a database.