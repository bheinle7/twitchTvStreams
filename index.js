$(document).ready(function() {
  var routes = ["users", "channels", "streams"]
  var channels = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"]
  while (channels.length > 0) {
    for (var i = 0; i < routes.length; i++) {
      var url = "https://wind-bow.glitch.me/twitch-api/"+routes[i]+"/"+channels[0]+"?callback=?";
      console.log(url)
    }
    channels.shift();
  };
  /*var url = "https://wind-bow.glitch.me/twitch-api/users/ESL_SC2?callback=?";
  $.getJSON(url, function (data) {
    console.log(data);
  });*/
});
