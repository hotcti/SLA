// $(window).load(function() {
//     $('#slider').nivoSlider();
// });

$(document).ready(function() {
    $('.scrollTop').click(function(event) {
        event.preventDefault();
        var target = $(this).attr('href');
        var targetPos = $(target).offset().top - 120;
        $('html, body').animate({scrollTop: targetPos}, 1000);
    });

    $(window).load(function() {
        $('#slider').nivoSlider();
    });

    $(window).scroll(function(event) {
        var scrollPos = $(window).scrollTop();
        var windowHeight = $(window).height();
        // console.log(scrollPos, windowHeight);

        $('.scrollTop').each(function() {
            var target = $(this).attr('href');
            var targetPos = $(target).offset().top;
            var targetHeight = $(target).outerHeight();

            // console.log(target + '的位置', targetPos, 'Window Scroll', scrollPos);

            if(targetPos <= scrollPos && (targetPos+targetHeight) > scrollPos){
                $('.scrollTop').removeClass('active');
                $(this).addClass('active');
              }else{
                $(this).removeClass('active');
              }
        });
    });
});