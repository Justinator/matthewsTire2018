var fullScreenVideo = fullScreenVideo || {};
var containerHeight = 0;

fullScreenVideo = {
    name: 'fullScreenVideo',
    backgroundVideo: 'ewr6vwpzzq',
    backgroundVideoDiv: '#wistia_ewr6vwpzzq',

    embedVideo: function() {
        var videoOptions = {};

        Wistia.obj.merge(videoOptions, {
            plugin: {
                cropFill: {
                    src: "https://fast.wistia.com/labs/crop-fill/plugin.js"
                }
            }
        });

        wistiaEmbed = Wistia.embed(fullScreenVideo.backgroundVideo, videoOptions);

        wistiaEmbed.bind("play", function() {
            wistiaEmbed.pause();
            wistiaEmbed.time(0);
            $(fullScreenVideo.backgroundVideoDiv).css('visibility', 'visible');
            wistiaEmbed.play();
            return this.unbind;
        });
    },

    fixTextPosition: function() {
        var width = $(window).width();
        var height = $(window).height();
        textWidth = $("#text").width();
        textHeight = $("#text").height();
         //Replaced this line with a vh setting on #video_container in CSS
        //$("#video_container").css("width", width).css("height", (height * .65));
        var containerHeight = $("#video_container").height();
        $("#text").css("left", (width/2) - (textWidth/2)).css("top", (containerHeight/2) - (textHeight/2));
    }

}

$(document).ready(function() {
    fullScreenVideo.fixTextPosition();
    $("#text").delay(200).animate({opacity: 1}, 650);
});

$(window).resize(fullScreenVideo.fixTextPosition);

fullScreenVideo.embedVideo();
