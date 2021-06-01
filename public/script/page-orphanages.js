// create map
const map = L.map('mapid').setView([-21.7593034,-41.3247732], 14);

// create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
}).addTo(map);

// create icon
const icon = L.icon({
    iconUrl: "/img/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
})

// create popup overlay
const popup = L.popup({
    closeButton: false,
    className: 'map-popup',
    minWidth: 240,
    minHeight: 240
}).setContent('Lar das meninas <a href="/orphanage?id=1" class="choose-orphanage"> <img src="/img/arrow-white.svg"> </a>');

// create and add marker
L.marker([-21.7593034,-41.3247732],{ icon })
    .addTo(map)
    .bindPopup(popup)
 