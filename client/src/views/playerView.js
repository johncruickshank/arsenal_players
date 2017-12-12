var PlayerView = function(player){
    this.render(player);
  }
  
  PlayerView.prototype = {
    render: function(player){
      
      console.log(player);
      player.forEach( function(info){
        var li = document.createElement('li');
        var text = document.createElement('p');
        var ul = document.getElementById("player");
        text.innerText = info.number + ". " + info.name + ": " + info.position;
        li.appendChild(text);
        ul.appendChild(li);
      })
    }
  }
  
   module.exports = PlayerView;