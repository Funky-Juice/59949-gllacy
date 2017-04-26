'use strict';

ymaps.ready(function () {
  var myMap = new ymaps.Map('ya-map', {
      center: [59.939346, 30.329383],
      zoom: 16,
      controls: []
    },{
      suppressMapOpenBlock: true
    },{
      searchControlProvider: 'yandex#search'
    }),
    myPlacemark = new ymaps.Placemark(([59.938669, 30.323057]), {

    }, {
      // Опции.
      // Необходимо указать данный тип макета.
      iconLayout: 'default#image',
      // Своё изображение иконки метки.
      iconImageHref: 'img/map_pin.png',
      // Размеры метки.
      iconImageSize: [218, 142],
      // Смещение левого верхнего угла иконки относительно
      // её "ножки" (точки привязки).
      iconImageOffset: [-39, -139]
    });
  myMap.geoObjects.add(myPlacemark);
  myMap.controls.remove("rulerControl");
  myMap.controls.remove("searchControl");
  myMap.controls.remove("trafficControl");
  myMap.controls.remove("typeSelector");
  myMap.controls.remove("zoomControl");
  myMap.controls.remove("geolocationControl");
  myMap.controls.remove("routeEditor");
});
