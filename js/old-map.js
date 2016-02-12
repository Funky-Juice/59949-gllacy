function fid_12(ymaps) {
    var map = new ymaps.Map("ya-map", {
        center: [30.329383, 59.939346],
        zoom: 16,
        type: "yandex#map"
    });
    map.controls
        .add("zoomControl");
    map.geoObjects
        .add(new ymaps.Placemark([30.323157, 59.938689], {
            balloonContent: ''
        }, {
            preset: "twirl#lightblueDotIcon"
        }));
};