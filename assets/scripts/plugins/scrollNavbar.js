
jQuery(document).ready(function ($) {
    $('nav').scrollNavbar();
});

(function ($) {
    $.fn.scrollNavbar = function () {
        var prevScrollpos = window.pageYOffset;
        window.onscroll = function () {
            var currentScrollPos = window.pageYOffset;

            if (prevScrollpos > currentScrollPos) {
                $("nav").removeClass("hidden");
            } else {
                $("nav").addClass("hidden");
            }

            prevScrollpos = currentScrollPos;
        };
    };
})(jQuery);

