 $(window).scroll(function (){
                 $(' .mov1').each(function (){
                 var imagePos = $(this).offset().top;
                 var topOfWindow = $(window).scrollTop();
                if (imagePos < topOfWindow+450) {
                $(this).addClass('bounceInLeft');
            }
        });
    });