var PlayerView = function(player){
    this.render(player);
  }
  
  PlayerView.prototype = {
    render: function(player){
      
      console.log(player);
      player.forEach( function(stat){
        var li = document.createElement('li');
        var text = document.createElement('p');
        var ul = document.getElementById("player");
        text.innerText = stat.name + ": " + '"' + stat.stat + '"';
        li.appendChild(text);
        ul.appendChild(li);
      })
    }
  }
  
   module.exports = PlayerView;