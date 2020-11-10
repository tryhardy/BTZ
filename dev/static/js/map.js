ymaps.ready(init);
function init(){
    // Создание карты.
    var myMap = new ymaps.Map("map", {
        // Координаты центра карты.
        // Порядок по умолчанию: «широта, долгота».
        // Чтобы не определять координаты центра карты вручную,
        // воспользуйтесь инструментом Определение координат.
        center: [54.671,20.540],
        // Уровень масштабирования. Допустимые значения:
        // от 0 (весь мир) до 19.
        zoom: 16,
        controls: ['zoomControl'],
        },
        {
            suppressMapOpenBlock: true
        }
    );

    var myPlacemark = new ymaps.Placemark([54.670473669700975,20.537994499664354], {
        iconContent: '<div class="hint">г. Калининград, ул. Дзержинского, 168</div>'
    }, {
        iconLayout: 'default#imageWithContent',
        iconImageHref: 'static/images/common/marker.svg',
        iconImageSize: [30, 42],
        iconImageOffset: [-5, -38],
    })

    myMap.geoObjects.add(myPlacemark);
    myMap.behaviors.disable('scrollZoom');

}