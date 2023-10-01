// jQuery 3.x-style ready event and locally scoped $
jQuery(function($) {
    $('html').removeClass('nojs');
    $('html').addClass('hasjs');
  });
/*Credit: Rick Bradshaw*/
/*https://stackoverflow.com/questions/2851663/how-do-i-simulate-a-hover-with-a-touch-in-touch-enabled-browsers*/
$(document).ready(function() {
    $('.hover').on('touchstart touchend', function(e) {
        e.preventDefault();
        $(this).toggleClass('hover_effect');
    });
});