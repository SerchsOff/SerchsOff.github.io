ymaps.ready(init);
function init(){
    // Создание карты.
    var myMap = new ymaps.Map("map", {
        // Координаты центра карты.
        // Порядок по умолчанию: «широта, долгота».
        // Чтобы не определять координаты центра карты вручную,
        // воспользуйтесь инструментом Определение координат.
        center: [55.76, 37.64],
        zoom: 1,
        controls: []}, {suppressMapOpenBlock: true}
    );

    var map_btn = document.querySelector(".map__button")

    myMap.events.add('click', function (e) {
        // Получение координат щелчка
        var coords = e.get('coords');

        myMap.geoObjects.removeAll()

        myMap.geoObjects.add(new ymaps.Placemark([coords[0],coords[1]]))

        map_btn.style.background = "#25f4da"
        
        map_btn.onclick = () => {
            localStorage.setItem('to1', coords[0]);
            localStorage.setItem('to2', coords[1]);
            window.location.href = "resultGame.html"
        }
    });
}