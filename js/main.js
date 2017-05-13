(function ($) {
	"use strict";

    jQuery(document).ready(function($){


        $(".embed-responsive iframe").addClass("embed-responsive-item");
        $(".carousel-inner .item:first-child").addClass("active");
        
        $('[data-toggle="tooltip"]').tooltip();

		$('.video-play-icon').magnificPopup({type:'video'});

        
	    // jQuery smooth scroll
	    $('.navbar-nav li a, .scroll-to-bottom a').bind('click', function(event) {
	        var $anchor = $(this);
	        var headerH = '70';
	        $('html, body').stop().animate({
	            scrollTop : $($anchor.attr('href')).offset().top - headerH + "px"
	        }, 1200, 'easeInOutExpo');

	        event.preventDefault();
	    }); 

    });


    jQuery(window).load(function(){

        
    });


}(jQuery));	