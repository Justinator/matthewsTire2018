var main = function() {
    var scrollHeight = $('.navbar-main').offset().top;
    var navHeight;

    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        navHeight = $('.navbar-main').height();

        if (scroll >= scrollHeight) {
            $(".navbar-main").addClass("navbar-fixed-top");
            $("body").css("padding-top", navHeight);
        } else {
            $(".navbar-main").removeClass("navbar-fixed-top");
            $("body").css("padding-top", "0");
        }
    });

    var offset = 50;
    var position = $('#nav-sidebar').offset().top;

    $('body').scrollspy({
        target: '#nav-sidebar',
        offset: offset
    });

    $('#nav-sidebar').affix({
        offset: {
            top: (position - 80),
            bottom: 590
        }
    });

    $('.nav-sidebar li a').click(function(event) {
        event.preventDefault();
        // store hash
        var hash = this.hash;

        // animate
        $('html, body').animate({
            scrollTop: ($(hash).offset().top) - offset
          }, 300, function(){

            // when done, add hash to url
            // (default click behaviour)
            window.location.hash = hash;
          });
    });

}

$(document).ready(main);
