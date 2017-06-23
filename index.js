$(document).ready(function() {
  var channels = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas", "brunofin", "comster404"]
  for (var i = 0; i < channels.length; i++) {
    var url = "https://wind-bow.glitch.me/twitch-api/channels/" + channels[i] + "?callback=?";
    var j = 0;
    $.getJSON(url, function(data) {



      if (data.display_name) {
        var name = data.display_name;
      } else if (data.error) {
        var name = data.message;
      };

      if (data.logo) {
        var logo = data.logo;
      } else if (data.error) {
        var logo = "img/notFound.png";
      } else {
        var logo = "img/notFound.png";
      };

      if (data.url) {
        site = data.url;
      } else if (data.error) {
        site = "javascript:;"
      } else {
        site = "javascript:;"
      };

      createList(name, logo, site, j);
      j += 1
      console.log(j)


    });
  };

  function createList(name, logo, site, j) {
    $("#chnls").append("<a href=" + site + " target=_blank><div id=chnl" + j + " class=row> <img class=img-size src="+logo+" alt="+name+" Logo>" + name + "</div></a>");
    //$("#chnl"+j).css(background-image,url(logo))
    $("#chnl" + j).addClass("borders")
  };

});
