var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(express.static("client/build"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

var MongoClient = require("mongodb").MongoClient;

MongoClient.connect("mongodb://localhost:27017/arsenal_players", function(err, client) {
  if (err) {
    return console.log(err);
  }

  // golbal db variable
  db = client.db("arsenal_players");
  console.log("Connected to DB");

  app.listen(3000, function(){
    console.log("Listening on port 3000");
  });
});

app.get("/", function(req, res){
	res.sendFile(__dirname + "/client/build/index.html");
});

app.get("/players", function(req, res) {
	db.collection("players").find().toArray(function(err, results){
	  if(err){
		return console.log(err);
	  }
	  res.json(results);
	});
});

app.post("/players", function(req, res) {
	// req.body is from the form fields
	db.collection("players").save(req.body, function(err, result) {
	  if(err){
		return console.log(err);
	  }
  
	  console.log("Saved to database");
	  res.redirect("/");
	});
  });

  // delete all
app.post("/delete", function(req, res){
	db.collection("players").remove({});
	res.redirect("/");
});