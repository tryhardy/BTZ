(function(){
    let phone = $("input[name='phone']");
    phone.mask('+7(000)000-00-00');

    $(".feedback__form").each(function(){
        $(this).validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                mail: {
                    email:true
                }
            },
            messages: {
                name: {
                    required: "Поле 'Имя' обязательно к заполнению",
                    minlength: "Введите не менее 2-х символов в поле 'Имя'"
                },
                mail: {
                    email: "E-mail введен некорректно"
                }
            }
        });
    });

    $(".feedback__form").on("submit", function(e){
        e.preventDefault();
        let successContainer = $("<div class='success'>");
        $("div.success").detach();
        
        if($(this).valid()){
            successContainer.html("Сообщение отправлено");
            $(successContainer).appendTo($(this));
        } 
    });
})()