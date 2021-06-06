// create map
const map = L.map('mapid').setView([-21.7593034,-41.3247732], 14);

// create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
}).addTo(map);

// create icon
const icon = L.icon({
    iconUrl: "/img/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68]
})

// create and add marker
let marker;

map.on('click', (event) => {
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng]').value = lng;

    // Remove icon
    marker && map.removeLayer(marker);

    // add new icon 
    marker = L.marker([lat, lng], { icon })
    .addTo(map)
})

// photos upload

function addPhotoField(){
    const container = document.querySelector('#images')
    const fieldsContainer = document.querySelectorAll('.new-upload')

    const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true)

    const input = newFieldContainer.children[0]
    
    if(input.value != ""){
        input.value = ""
        container.appendChild(newFieldContainer)
    }

}

function removePhotoField(event){
    const span = event.currentTarget

    const fieldsContainer = document.querySelectorAll('.new-upload')

    if(fieldsContainer.length <= 1){
        span.parentNode.children[0].value = ''
        return
    }

    span.parentNode.remove()
}

// select yes or not

function toggleSelect(event) { 

    document.querySelectorAll('.button-select button')
    .forEach(button => button.classList.remove('active'))

    const button = event.currentTarget
    button.classList.add('active')
    
    const input = document.querySelector('[name="open_on_weekends"]')

    input.value = button.dataset.value
}