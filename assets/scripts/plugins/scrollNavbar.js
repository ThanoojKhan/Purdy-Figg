(function ($) {
    $.fn.scrollNavbar = function () {
        var prevScrollpos = window.pageYOffset;

        window.onscroll = function () {
            var currentScrollPos = window.pageYOffset;

            if (prevScrollpos > currentScrollPos) {
                // Show the navbar
                $("#navbar").removeClass("hidden");
            } else {
                // Hide the navbar with a transition
                $("#navbar").addClass("hidden");
            }

            prevScrollpos = currentScrollPos;
        };
    };
})(jQuery);
