$(document).ready(function() {
    "use strict";

    //------ Popup in the Home page-----//
    $('.bin-close').click(function(){
      $('.popup').hide();
    });

    $('.controller1').click(function(){
      $('.text').slideToggle();
    });


    //------- Counter in the Home page, referred from Colorlib, ‘Personal’, 2020, Available: https://colorlib.com/download/997/ [Accessed: 20-Aug-2020]--------//  

    if(document.getElementById("facts-area")){
        $('.counter').counterUp({
          delay: 10,
          time: 3000,
        });
    };

    //------Gallery in the "Northern Taiwan" page, referrred from templated,’Caminar’, 2017, Available: https://templated.co/caminar. [Accessed: 20-Aug-2020]-----//
    skel.breakpoints({
        xlarge: '(max-width: 1680px)',
        large: '(max-width: 1280px)',
        medium: '(max-width: 980px)',
        small: '(max-width: 736px)',
        xsmall: '(max-width: 480px)'
    });

    $(function() {

        var $window     = $(window),
            $body       = $('body'),
            $header     = $('#header');

            $body.addClass('is-loading');

            $window.on('load', function() {
                window.setTimeout(function() {
                    $body.removeClass('is-loading');
                }, 100);
            });

            skel.on('+medium -medium', function() {
                $.prioritize(
                    '.important\\28 medium\\29',
                    skel.breakpoint('medium').active
                );
            });

            $('.gallery').poptrox();

    });

});