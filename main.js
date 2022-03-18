const apiKey = `pk.eyJ1IjoianVuY28iLCJhIjoiY2t3NjJtZzE3MGx1MjJwcWxncjI0NHUwMyJ9.O5NAOZr2rr42mJUHNRy0XA`;
const myMap = L.map('map').setView([57.690434593135805, 11.974491073000591], 15);
const mapData = [
    {
        name: 'gunillas',
        iconUrl: 'misc/baguettepng.png',
        pos: [57.69155808628687, 11.978665108268643],
        popup: 'misc/baguettbild.png'
    },
    {
        name: 'baguetterian',
        iconUrl: 'misc/baguettepng.png',
        pos: [57.691971559234595, 11.978198248954529],
        popup: 'misc/baguettbild.png'
    },
    {
        name: 'bagelBaren',
        iconUrl: 'misc/baguettepng.png',
        pos: [57.694125927833326, 11.972213435973151],
        popup: 'misc/hugobild.png'
    },
    {
        name: 'subway_koppar',
        iconUrl: 'misc/baguettepng.png',
        pos: [57.70489677670071, 11.97045206615656],
        popup:'misc/hugobild.png'
    },
    {
        name: 'subway_gronsakstorget',
        iconUrl: 'misc/baguettepng.png',
        pos: [57.70379578815559, 11.963661153295135],
        popup:'misc/hugobild.png'
    },
    {
        name: 'subway_linneagatan',
        iconUrl: 'misc/baguettepng.png',
        pos: [57.69300150294481, 11.952185713973716],
        popup:'misc/hugobild.png'
    },
    {
        name: 'funnykitchen',
        iconUrl: 'misc/marker-salad.png',
        pos: [57.693324, 11.970680],
        popup:'misc/hugobild.png'
    },
    {
        name: 'picadeli_nordstan',
        iconUrl: 'misc/marker-salad.png',
        pos: [57.70772161602308, 11.96837224799729],
        popup:'misc/hugobild.png'
    },
    {
        name: 'sushi_vimi',
        iconUrl: 'misc/marker-sushi.png',
        pos: [57.69960377425105, 11.94723790341604],
        popup:'misc/hugobild.png'
    },
    {
        name: 'sushi_panda',
        iconUrl: 'misc/marker-sushi.png',
        pos: [57.69978774049167, 11.984475395204244],
        popup:'misc/hugobild.png'
    },
    {
        name: 'sushi_goldenlee',
        iconUrl: 'misc/marker-sushi.png',
        pos: [57.69427116500277, 11.91863427818037],
        popup:'misc/hugobild.png'
    },
    {
        name: 'pita',
        iconUrl: 'misc/marker-wraps.png',
        pos: [57.699217292986596, 11.969169675057799],
        popup:'misc/hugobild.png'
    },
    {
        name: 'falafel',
        iconUrl: 'misc/marker-wraps.png',
        pos: [57.69961691652918, 11.967959913209915],
        popup:'misc/hugobild.png'
    },
    {
        name: 'alleppo',
        iconUrl: 'misc/marker-pizza.png',
        pos: [57.69644945647809, 11.970431884222709],
        popup:'misc/hugobild.png'
    },
    {
        name: 'seveneleven_nordstan',
        iconUrl: 'misc/marker-seven.png',
        pos: [57.70853989590762, 11.969839171899158],
        popup:'misc/hugobild.png'
    },
    {
        name: 'seveneleven_nisse',
        iconUrl: 'misc/marker-seven.png',
        pos: [57.709042634782584, 11.972918864285733],
        popup:'misc/hugobild.png'
    },
    {
        name: 'burgerking_nordstan',
        iconUrl: 'misc/burgermarker.png',
        pos: [57.708432741880344, 11.970120313974319],
        popup:'misc/hugobild.png'
    },
    {
        name: 'seaside',
        iconUrl: 'misc/seaside.png',
        pos: [57.70139246522689, 11.945802697023833],
        popup: 'misc/hugobild.png'
    }
]


L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {    
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: apiKey
}).addTo(myMap);


// marker options
let map_icon = L.Icon.extend({
    options: {
        shadowUrl: 'misc/iconshadow.png',
        iconSize:     [32, 45], // size of the icon
        shadowSize:   [32, 45], // size of the shadow
        iconAnchor:   [13, 46], // point of the icon which will correspond to marker's location
        shadowAnchor: [12, 46],  // the same for the shadow
        popupAnchor:  [8, -84] // point from which the popup should open relative to the iconAnchor
    }
})

// Markers
const markers = [];

function addMarkers(){
    mapData.forEach(place => {
        let icon = new map_icon({ iconUrl : place.iconUrl }); // Create icon with given options
        let marker = L.marker(place.pos, { icon: icon }); // create marker
        markers.push(marker); // store marker in markerList for easy removal
        marker.addTo(myMap).bindPopup(`<div class="popupalighnment"> <h1 class="popuptext">${name}</h1> <img src="${poopup}" alt="image_of_baguetteria_no1" class="popupimage"></div>`); // Add to map
    })
}


function removeMarkers(){
    markers.forEach(marker => marker.remove())
}

// let popup_baguett = 
// `
// <div class="popupalighnment">
//     <h1 class="popuptext">Baguetterian</h1>
//     <img src="misc/baguettbild.png" alt="image_of_baguetteria_no1" class="popupimage">
// </div>
// `;
// map_icon.bindPopup(popup_baguett); 