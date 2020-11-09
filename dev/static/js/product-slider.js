$('#product-slider').slick({
    infinite: true,
    arrows: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    prevArrow: $('#product-prev'),
    nextArrow: $('#product-next'),
});

$('.products__popup-close').on('click', function(){
    closingPopup();
});

$(".products__popup").on('click', function(e){
    if(e.target == $(this)[0]){
        closingPopup();
    }
});


function closingPopup()
{
    $("body").removeClass("hidden");

    $('.products__popup').removeClass('active');

    setTimeout(function(){
        $('.products__popup-content').html();
    }, 800);
}