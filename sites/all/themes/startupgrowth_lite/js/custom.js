/**
 * @file
 * Some basic behaviors and utility functions for Views.
 */
(function ($) {

    Drupal.behaviors.bxSliderHP = {
        attach: function (context) {
            $('.bxslider').bxSlider({
                // mode: 'fade',
                adaptiveHeight: true,
                pause: 5000,
                speed: 600,
                auto: true
            });
        }
    };


})(jQuery);
