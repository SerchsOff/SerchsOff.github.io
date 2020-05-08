ymaps.ready(init);
function init(){
    // Создание карты.
    var myMap = new ymaps.Map("map", {
        // Координаты центра карты.
        // Порядок по умолчанию: «широта, долгота».
        // Чтобы не определять координаты центра карты вручную,
        // воспользуйтесь инструментом Определение координат.
        center: [localStorage.from1, localStorage.from2],
        zoom: 3,
        controls: []}, {suppressMapOpenBlock: true}
    );
    myMap.geoObjects.add(new ymaps.Placemark([localStorage.from1, localStorage.from2],{},{
    	iconLayout: 'default#image',
        iconImageHref: 'images/finish.png',
        iconImageSize: [34, 34],
        iconImageOffset: [-16,-32],
    }))
    myMap.geoObjects.add(new ymaps.Placemark([localStorage.to1, localStorage.to2]))
	
	var distance = document.querySelector(".distance span")
	distance_km = ymaps.formatter.distance(
        ymaps.coordSystem.geo.getDistance(
        	[localStorage.from1, localStorage.from2],
        	[localStorage.to1, localStorage.to2]
        )
    )
    distance.innerHTML = distance_km

    var point = document.querySelector(".point")
    var point_bar = document.querySelector(".pointBar-active")

    point_ed = parseInt(distance_km) * 1
    point.innerHTML = 1000 - point_ed
    if (point.innerHTML <= 0) {
    	point.innerHTML = 0
    }

    point_bar.style.width = point.innerHTML / 10 + "%"

    // Создаем ломаную, используя класс GeoObject.
    var myGeoObject = new ymaps.GeoObject({
        // Описываем геометрию геообъекта.
        geometry: {
            // Тип геометрии - "Ломаная линия".
            type: "LineString",
            // Указываем координаты вершин ломаной.
            coordinates: [
                [localStorage.from1, localStorage.from2],
        		[localStorage.to1, localStorage.to2]
            ]
        },
    }, {
        // Задаем опции геообъекта.
        // Цвет линии.
        strokeColor: "#FFFF00",
        // Ширина линии.
        strokeWidth: 3
    });
    myMap.geoObjects.add(myGeoObject);

}