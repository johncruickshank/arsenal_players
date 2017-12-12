var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(express.static("client/build"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

var MongoClient = require("mongodb").MongoClient;

MongoClient.connect("mongodb://localhost:27017/arsenal_players", function(err, database) {
  if (err) {
    return console.log(err);
  }

  // golbal db variable
  db = database;
  console.log("Connected to DB");

  app.listen(3000, function(){
    console.log("Listening on port 3000");
  });
});

app.get("/", function(req, res){
	res.sendFile(__dirname + "/client/build/index.html");
});