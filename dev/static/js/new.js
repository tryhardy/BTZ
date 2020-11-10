$('.news__popup-close').on('click', function(){
    closingPopup();
});

$(".news__popup").on('click', function(e){
    if(e.target == $(this)[0]){
        closingPopup();
    }
});

$(".button").on("click", function(e){
    e.preventDefault();
    closingPopup();
});


function closingPopup()
{
    $("body").removeClass("hidden");

    $('.news__popup').removeClass('active');

    setTimeout(function(){
        $('.news__popup-content').html();
    }, 800);
}