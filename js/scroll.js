(function (global, $) {

    var $menu     = $('.navbar_menu li'),
        $contents = $('.scroll'),
        $doc      = $('html, body');
    $(function () {
        $menu.on('click','a', function(e){
            var $target = $(this).parent(),
                idx     = $target.index(),
                section = $contents.eq(idx),
                offsetTop = section.offset().top;
            $doc.stop()
                    .animate({
                        scrollTop :offsetTop
                    }, 800);
            return false;
        });
    });

    var $moreBtn = $('.more__btn');
        $content = $('#main_about')
    $(function(){
        $moreBtn.on('click', 'a', function(e){
            offsetTop = $content.offset().top;
            $doc.stop()
                .animate({
                    scrollTop: offsetTop
                }, 800);
            return false;
        });

    });


    $(window).scroll(function(){
        // var scltop = $(window).scrollTop();
        $.each($contents, function(idx, item){
            var $target   = $contents.eq(idx);
                // i         = $target.index(),
                // targetTop = $target.offset().top,

            if($target.visible()){
                $menu.removeClass('active');
                $menu.eq(idx).addClass('active');
            }

            // if (targetTop - navHeight <= scltop) {
            //     $menu.removeClass('active');
            //     $menu.eq(idx).addClass('active');
            // }
        })

    });

}(window, window.jQuery));