(function($) {
    $(".js-accordion .js-accordion__title").click(function() {

        $(this).next("p").stop().slideToggle("slow").siblings("p:visible").slideUp("slow");
        $(this).toggleClass("active");
        $(this).siblings(".js-accordion__title").removeClass("active");
    });


    $(function() {
        $('.jcarousel').jcarousel();

        $('.jcarousel-pagination')
            .on('jcarouselpagination:active', 'a', function() {
                $(this).addClass('active');
            })
            .on('jcarouselpagination:inactive', 'a', function() {
                $(this).removeClass('active');
            })
            .jcarouselPagination();
    });

})(jQuery);