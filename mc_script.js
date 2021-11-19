//based on a pen by @robinselmer
var url = "https://api.minetools.eu/ping/mc.spacefade.one/25565";
 
$.getJSON(url, function(r) {
    //data is the JSON string
 if(r.error){
    $('#rest').html('Server Offline');
   return false;
 } 
var pl = '';
var playerList = ''
if(r.players.sample.length > 0 ){
   for(var player in (r.players.sample)){
      playerList = playerList + r.players.sample[player].name + "<br>";
   }
}
  $('#rest').html(r.description.replace(/§(.+?)/gi, '')+'<br><b>Server Version:</b> '+r.version.name+pl +'<br><b>Players Online:</b> '+r.players.online+pl+"<br>"+ playerList);
    
});
