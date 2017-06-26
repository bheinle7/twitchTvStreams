$(document).ready(function() {
  var channels = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas", "brunofin", "comster404"]
  var name, logo, site, status;
  for (var i = 0; i < channels.length; i++) {

    (function(i) {

      $.ajax({
        url: "https://wind-bow.glitch.me/twitch-api/channels/" + channels[i] + "?callback=?",
        dataType: 'json',
        async: false,
        success: function(data) {
          if (data.display_name) {

            name = data.display_name;
          } else if (data.error) {
            name = "No channel exists for " + channels[i];
          };

          var snippet = data.status;

          if (data.logo) {
            logo = data.logo;
          } else if (data.error) {
            logo = "img/notFound.png";
          } else {
            logo = "img/blankLogo.png";
          };

          if (data.url) {
            site = data.url;
          } else if (data.error) {
            site = "javascript:;"
          } else {
            site = "javascript:;"
          };
          createList(channels[i], name, logo, site, snippet)

        }
      });
    })(i);
  }

  for (var i = 0; i < channels.length; i++) {
    (function(i) {
      $.ajax({
        url: "https://wind-bow.glitch.me/twitch-api/streams/" + channels[i] + "?callback=?",
        dataType: 'json',
        async: false,
        success: function(response) {
          if (response.stream === null) {
            status = "offline";
          } else {
            status = "online";
          };

          siteStatus(channels[i], status)
        }
      });
    })(i)

  }

  function createList(channel, name, logo, site, snippet) {
    $("#chnls").append("<a href=" + site + " target=_blank><div id=" + channel + "> <img class=img-size src=" + logo + " alt=" + name + " Logo>" + name + "<span id=" + channel + "status class=status-style></span><br><span id=" + channel + "snippet class=snippet-style>" + snippet + "</span></div></a>");
    $("#" + channel).addClass("borders div-size");
  };

  function siteStatus(channel, status) {
    $("#" + channel + "status").text(status);
    if (status == "offline") {
      $("#" + channel + "snippet").empty();
    }
  };

  $("#online").on("click", function() {
    $("#online").css("background-color", "blue")
    $("#online").css("border-color", "blue")
    $("#allbutton").css("border-color", "lightgray")
    $("#allbutton").css("background-color", "lightgray")
    for (var i = 0; i < channels.length; i++) {
      if (($("#" + channels[i] + "status").text()) == "offline") {
        $("#" + channels[i]).remove();
      }
    }
  })
});
