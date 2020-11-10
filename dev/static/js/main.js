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
        slidesToShow: 2,
        slidesToScroll: 1,
        prevArrow: $('.slides__prev'),
        nextArrow: $('.slides__next'),
    });

    $('.images__list').slick({
        infinite: true,
        arrows: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 2
                }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 576,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            }
        ]
    });

    $('.timeline__list').slick({
        infinite: false,
        arrows: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: $('.timeline__prev'),
        nextArrow: $('.timeline__next'),
        responsive: [
            {
                breakpoint: 992,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 2
                }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 576,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            }
        ]
    });

    /*ajax запрос для получения попапа с информацией об услуге/продукте*/
    $(document).on("click", ".products__item", function(e){
        e.preventDefault();

        let link = $(this).find('a');
        let href  = link.attr('href')

        $.ajax({
            url: href,
            context: document.body,
            success: function(response){
                $("body").addClass("hidden");
                $(".products__popup").addClass("active");
                $(".products__popup-content").html(response);
                $(".products__popup")[0].scrollTop = 0;
            }
        });              
    });


    /*ajax запрос для получения попапа с информацией о новости*/
    $(document).on("click", ".news__item", function(e){
        e.preventDefault();

        let link = $(this).find('a');
        let href  = link.attr('href')

        $.ajax({
            url: href,
            context: document.body,
            success: function(response){
                $("body").addClass("hidden");
                $(".news__popup").addClass("active");
                $(".news__popup-content").html(response);
                $(".news__popup")[0].scrollTop = 0;
            }
        });              
    });

    /*Работа табов */
    $(".tabs__title").on("click", function(){
        let tabs = $(".tabs__title");
        let tab = $(this).attr("data-tab");
        let content = $(".tabs__block");

        tabs.removeClass("active");
        $(this).addClass("active");
        content.each(function(){
            if($(this).attr("data-tab") == tab) {
                $(this).addClass("active");
            } else {
                $(this).removeClass("active");
            }
        });
    });

    $(".circle-button__close").on('click', function(){
        $(".circle-button").css("display", "none");
    });

    /*Работа куков*/
    let cookies = document.cookie;
    if(cookies.indexOf("cookie=accepted") == -1) {
        $(".cookie").css("visibility", "visible");
    }

    $("#cookie-close").on("click", function(){
        $(".cookie").css("display", "none");
    });

    $("#cookie-ok").on("click",  function(){
        $(".cookie").css("display", "none");
        document.cookie = "cookie=accepted;";
        document.cookie = "1=2;";
    });
});
