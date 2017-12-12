var PlayerView = require('./views/playerView');

var makeRequest = function(url, callback){
  var request = new XMLHttpRequest();
  request.open("GET", url);
  request.addEventListener("load", callback);
  request.send();
};

var requestComplete = function() {
  if (this.status !== 200) return;
  var playerString = this.responseText;
  var player = JSON.parse(playerString);
  var UI = new PlayerView(player);
};

var app = function(){
  var url = "/players"
  makeRequest(url, requestComplete);
};

window.addEventListener("load", app);
