$(document).ready(function() {

    $(".slider").slick({

        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        centerMode: true,
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 599,
                settings: {
                    slidesToShow: 1,
                }
            }
        ],
    });

    $("button.menu").on("click", function() {

        if(!$("button.menu").hasClass("active")) {
            $("button.menu").addClass("active");
            $("div.nav_flex.off").removeClass("off");
            $("div.nav_flex .toggle_nav").animate({"marginLeft": "300px"}, 400);
            $("div.nav_flex > div").addClass("mask");
         } else {
            $("button.menu.active").removeClass("active");
            $("div.nav_flex").addClass("off");
            $("div.nav_flex.off .toggle_nav").animate({"marginLeft": "-300px"}, 400);
            $("div.nav_flex > div").removeClass("mask");
        }

    });

    //画像fadein
    $(window).on('load scroll',function (){
        $('.animation').each(function(){
          var target = $(this).offset().top;
          var scroll = $(window).scrollTop();
          var height = $(window).height();
          if (scroll > target - height){
            $(this).addClass('active');
          }
        });
      });

})


