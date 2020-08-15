var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Task = require('../tarefas/models/tarefasModels'), //created model loading here
  bodyParser = require('body-parser');
  
// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Tododb', {
	useNewUrlParser: true,
	useUnifiedTopology: true
})


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('../tarefas/routes/tarefasRoutes'); //importing route
routes(app); //register the route


app.listen(port);


console.log('todo list RESTful API server started on: ' + port);