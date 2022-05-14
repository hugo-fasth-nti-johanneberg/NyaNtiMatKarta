const apiKey = `pk.eyJ1IjoianVuY28iLCJhIjoiY2t3NjJtZzE3MGx1MjJwcWxncjI0NHUwMyJ9.O5NAOZr2rr42mJUHNRy0XA`;
const myMap = L.map('map').setView([57.690434593135805, 11.974491073000591], 15);
alert("Wellcome to NTI Foodmapper click on 'show all' to show all the available resturants!");
const mapData = [
    {
        name: 'Gunillas Baguetter',
        iconUrl: 'misc/baguettepng.png',
        pos: [57.69155808628687, 11.978665108268643],
        popupimage:'misc/popup_gunillas.jfif',
        type:'Baguettes'
    },
    {
        name: 'Baguetterian no1',
        iconUrl: 'misc/baguettepng.png',
        pos: [57.691971559234595, 11.978198248954529],
        popupimage:'misc/baguettbild.png',
        type:'Baguettes'
    },
    {
        name: 'BagelBaren',
        iconUrl: 'misc/baguettepng.png',
        pos: [57.694125927833326, 11.972213435973151],
        popupimage:'misc/popup_bagelbaren.png',
        type:'Baguettes'
    },
    {
        name: 'Subway Kopparmärra',
        iconUrl: 'misc/baguettepng.png',
        pos: [57.70489677670071, 11.97045206615656],
        popupimage:'misc/popup_subway.png',
        type:'Baguettes'
    },
    {
        name: 'Subway Gonsakstorget',
        iconUrl: 'misc/baguettepng.png',
        pos: [57.70379578815559, 11.963661153295135],
        popupimage:'misc/popup_subway.png',
        type:'Baguettes'
    },
    {
        name: 'Subway Linneagatan',
        iconUrl: 'misc/baguettepng.png',
        pos: [57.69300150294481, 11.952185713973716],
        popupimage:'misc/popup_subway.png',
        type:'Baguettes'
    },
    {
        name: 'Funny Kitchen',
        iconUrl: 'misc/marker-salad.png',
        pos: [57.693324, 11.970680],
        popupimage:'misc/popup_funkitchen.jfif',
        type:'Salads'
    },
    {
        name: 'Picadeli Nordstan',
        iconUrl: 'misc/marker-salad.png',
        pos: [57.70772161602308, 11.96837224799729],
        popupimage:'misc/popup_picadelli.jpg',
        type:'Salads'
    },
    {
        name: 'Sushi Vimi',
        iconUrl: 'misc/marker-sushi.png',
        pos: [57.69960377425105, 11.94723790341604],
        popupimage:'misc/a.jpeg',
        type:'Sushi'
    },
    {
        name: 'Panda Sushi',
        iconUrl: 'misc/marker-sushi.png',
        pos: [57.69978774049167, 11.984475395204244],
        popupimage:'misc/popup_pandasushi.jpeg',
        type:'Sushi'
    },
    {
        name: 'Sushi Goldenlee',
        iconUrl: 'misc/marker-sushi.png',
        pos: [57.69427116500277, 11.91863427818037],
        popupimage:'misc/popup_goldenlee.jpg',
        type:'Sushi'
    },
    {
        name: 'Pita',
        iconUrl: 'misc/marker-wraps.png',
        pos: [57.699217292986596, 11.969169675057799],
        popupimage:'misc/popup_pita.png',
        type:'Wraps'
    },
    {
        name: 'Falafel',
        iconUrl: 'misc/marker-wraps.png',
        pos: [57.69961691652918, 11.967959913209915],
        popupimage:'misc/popup_sunset.jpg',
        type:'Wraps'
    },
    {
        name: 'Alleppo',
        iconUrl: 'misc/marker-pizza.png',
        pos: [57.69644945647809, 11.970431884222709],
        popupimage:'misc/popup_aleppo.jfif',
        type:'Pizzas'
    },
    {
        name: 'Seveneleven Nordstan',
        iconUrl: 'misc/marker-seven.png',
        pos: [57.70853989590762, 11.969839171899158],
        popupimage:'misc/popup_seveeleven.png',
        type:'Seven Eleven'
    },
    {
        name: 'Seveneleven Centralstationen',
        iconUrl: 'misc/marker-seven.png',
        pos: [57.709042634782584, 11.972918864285733],
        popupimage:'misc/popup_seveeleven.png',
        type:'Seven Eleven'
    },
    {
        name: 'Burgerking Nordstan',
        iconUrl: 'misc/burgermarker.png',
        pos: [57.708432741880344, 11.970120313974319],
        popupimage:'misc/popup_burgerking.png',
        type:'Hamburgers'
    },
    {
        name: 'Seaside Stenaterminalen',
        iconUrl: 'misc/seaside.png',
        pos: [57.70139246522689, 11.945802697023833],
        popupimage:'misc/popup_seaside.jpg',
        type:'Seaside'
    },
    {
        name: 'Liam',
        iconUrl: 'misc/marker-salad.png',
        pos: [10.314780083610362, 123.90777290482451],
        popupimage:'misc/liam.png',
        type:'Salads'
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
const markertypes = [];

function addMarkers(){
    mapData.forEach(place => {
        if(markertypes.includes(place.type) == false){ markertypes.push(place.type)}

        let icon = new map_icon({ iconUrl : place.iconUrl }); // Create icon with given options
        let marker = L.marker(place.pos, { icon: icon }); // create marker
        markers.push([marker, place.type]); // store marker in markerList for easy removal
        marker.addTo(myMap).bindPopup(`<div class="popupalighnment"> <h1 class="popuptext">${place.name}</h1> <img src="${place.popupimage}" alt="image_of_baguetteria_no1" class="popupimage"></div>`); // Add to map
    })
}
//.bindPopup(`<div class="popupalighnment"> <h1 class="popuptext">${name}</h1> <img src="${poopup}" alt="image_of_baguetteria_no1" class="popupimage"></div>`);//

function removeMarkers(){
    markers.forEach(marker => {
        markertypes.splice(marker[1], 1);
        marker[1] == null
        marker[0].remove();
    })
}

function toggleSpecificMarker(type){
    if(markertypes.includes(type) == true){ 
        markertypes.splice(type, 1)
        markers.forEach(marker => {
            if(marker[1] == type){
                marker[1] == null
                marker[0].remove()}
        })
    } else {
        markertypes.push(type)
        mapData.forEach(place => {
            if(place.type == type){
                let icon = new map_icon({ iconUrl : place.iconUrl }); // Create icon with given options
                let marker = L.marker(place.pos, { icon: icon }); // create marker
                markers.push([marker, place.type]); // store marker in markerList for easy removal
                marker.addTo(myMap).bindPopup(`<div class="popupalighnment"> <h1 class="popuptext">${place.name}</h1> <img src="${place.popupimage}" alt="image_of_baguetteria_no1" class="popupimage"></div>`); // Add to map
            }
        })
    }
}


// let popup_baguett = 
// `
// <div class="popupalighnment">
//     <h1 class="popuptext">Baguetterian</h1>
//     <img src="misc/baguettbild.png" alt="image_of_baguetteria_no1" class="popupimage">
// </div>
// `;
// map_icon.bindPopup(popup_baguett); 