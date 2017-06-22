$(document).ready(function() {
  var i;
  var status = [];
  var names = [];
  var logos = [];
  var sites = [];
  var routes = ["channels","streams"]
  var channels = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas", "brunofin", "comster404"]
  while (routes.length > 0) {
    for (i = 0; i < channels.length; i++) {
      var url = "https://wind-bow.glitch.me/twitch-api/" + routes[0] + "/" + channels[i] + "?callback=?";

      $.getJSON(url, function(data) {

        if (data.stream === null) {
          status.push("offline");
        } else if (data.stream) {
          status.push("online")
        };

        if (data.display_name) {
          names.push(data.display_name);
        } else if (data.error) {
          names.push(data.message);
        };

        if (data.logo) {
          logos.push(data.logo);
        } else if (data.error) {
          logos.push("placeholder.jpg");
        } else {
          logos.push("no_logo.jpg");
        };

        if (data.url) {
          sites.push(data.url);
        } else if (data.error) {
          sites.push("javascript:;")
        } else {
          sites.push("javascript:;")
        };

      });
    }
    routes.shift();
  };
});
