// Funciones autoejecutables

((d, w, $, WOW) => {
    
    'use strict';

    const wow = new WOW();

    $(d).ready(() => {
        $('.owl-carousel').owlCarousel({
            items: 3,
            loop: true,
            autoplay: true,
            autoplayTimeout: 1000,
            autoplayHoverPause: true
        });

        $('.nav').find('a').click(function (e){
            let idEnlace = $(this).attr('href');

            $('html, body').animate({
                scrollTop: $(idEnlace).offset().top
            }), 1000;
        });
    });

})(document, window, jQuery, WOW);