// set up YouTube API
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// Save the data for each video to a list
var playerInfoList = [{
  // This is the HTML element that the video is placed into
  id: 'player',
  // The YouTube ID of the video
  videoId: '54OrWbEJgi8'
}, {
  id: 'player1',
  videoId: 'GQgkspjqUDI'
}, {
  id: 'player2',
  videoId: 'inAw8PMa8_g'
}, {
  id: 'player3',
  videoId: 'd7_PB6_8XjU'
}];

// Create an empty array to hold the players so it's accessible to other functions when they are created
var players = [];

// When the YouTube API loads, loop through the player data above and create players for each of them, then save each one to a new list called players.
function onYouTubeIframeAPIReady() {
  for (var i = 0; i < playerInfoList.length; i++) {
    var curplayer = createPlayer(playerInfoList[i]);
    players[i] = curplayer;
  }
}

// Save each modal id to an array so that we can loop through it.
var modals = [{
  id: "#testimonialModal"
}, {
  id: "#testimonialModal1"
}, {
  id: "#testimonialModal2"
}, {
  id: "#testimonialModal3"
}];

// Loop through each modal, and for each one create an event trigger on open and close to start and stop its associated video. The videos and modals must be in the correct order in the arrays.
$(modals).each(function(i) {
  $(this.id).on('shown.bs.modal', function(e) {
    playVideo(players[i]);
  });
  $(this.id).on('hidden.bs.modal', function(e) {
    stopVideo(players[i]);
  });
});

// Below are functions used in the steps above.
function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.PLAYING) {
    // player is playing
  } else {
    // player is paused
  }
}

function createPlayer(playerInfo) {
  return new YT.Player(playerInfo.id, {
    height: '500',
    width: '100%',
    videoId: playerInfo.videoId,
    events: {
      'onStateChange': onPlayerStateChange
    }
  });
}

function playVideo(player) {
  player.playVideo();
}

function stopVideo(player) {
  player.stopVideo();
}
