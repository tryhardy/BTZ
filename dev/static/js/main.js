$(document).ready(function(){
    
    $('.top-slider__list').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots:false,
        fade: true,
        cssEase: 'linear'
    });

    /*работа мобильного меню*/
    $(".hamburger").on("click", function(){
        let height = $(".menu-top")[0].scrollHeight;

        if(
            $(".hamburger").hasClass("active")
            && $(".hamburger").attr("data-menu") == "open"
        ) {
            $(".hamburger").removeClass("active");
            $(".menu-top").css("height", "0px");
            $(".hamburger").attr("data-menu", "");
        } else if(
            $(".popup").hasClass("active")
            && $(".hamburger").attr("data-popup") == "open"
        ) {
            $(".popup").removeClass("active");
            $(".hamburger").attr("data-popup", "");
            $(".hamburger").removeClass("active");
        } else {
            $(".hamburger").addClass("active");
            $(".hamburger").attr("data-menu", "open");
            $(".menu-top").css("height", height + "px");
        }
    });

    /*сплывающее окно*/
    $("#popup").on("click", function(){
        $(".hamburger").addClass("active");
        $(".hamburger").attr("data-popup", "open");
        $(".popup").addClass("active");
    });

    $(".popup__close").on("click", function(){
        $(".hamburger").removeClass("active");
        $(".hamburger").attr("data-popup", "");
        $(".popup").removeClass("active");
    });

    $('.slides__list').slick({
        infinite: true,
        arrows: true,
        prevArrow: $('.slides__prev'),
        nextArrow: $('.slides__next'),
    });

});
