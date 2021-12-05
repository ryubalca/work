
// $("section.experience").on("load scroll" ,function() {
//     if($(".after_txt").hasClass("none")) {
//         $(".after_txt").removeClass("none");
//         $(".before_txt").addClass("none");
//         $(".after_txt").animate({"marginLeft" : "200px" });
//     } else {
//         $(".after_txt").removeClass("none");
//         $(".before_txt").addClass("none");
//     }
// });

// $(function(){

//     $("header,.box, footer").inertiaScroll({
//       parent: $("#content"),
//     });

//   });  


// nicescroll
$("html").niceScroll({
    scrollspeed: 10,
});


var pos = 0;
var header = $(".header");
$(window).on("scroll", function() {
    if($(this).scrollTop() < pos) {
        header.removeClass("hide");
    } else {
        header.addClass("hide");
    }
    pos = $(this).scrollTop();
});

//toppageslick
$("div.top_right").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    autoplay: true,
    speed: 3000,
    fade: true,
});

//fadein
$(window).on("load scroll", function() {
    var box = $(".fadein");
    var animated = "animated";

    box.each(function() {
        var boxOffset = $(this).offset().top;
        var scrollPos = $(window).scrollTop();
        var wh = $(this).height();
        if(scrollPos > boxOffset - wh - 100) {
            $(this).addClass(animated);
        }
    });
});


$(".sp_change-btn").on("click", function() {
    if(!$(".sp-menu").hasClass("active")) {
        $(".sp-menu").addClass("active");　
        $(".sp-menu div.sp-toggle-menu,.sp-menu.active").animate({"opacity":"1","background": "#EDECE7"},500);
        $("header .header_top h1").css("display","none");
        $(".sp_change-btn").css("color","#333");
        $(".sp_change-btn").text("CLOSE");
    } else {
        $(".sp-menu").removeClass("active");
        $(".sp-menu div.sp-toggle-menu,.sp-menu").animate({"opacity": "0","background": "transparent"},500);
        $("header .header_top h1").css("display","block");
        $(".sp_change-btn").css("color","#fefefe");
        $(".sp_change-btn").text("MENU");
    }
    
});