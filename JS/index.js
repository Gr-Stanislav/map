const mymap = L.map('mapid').setView([50.450737, 30.548078], 11);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
   // attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1Ijoic3RhbmlzbGF2LWdyIiwiYSI6ImNrbWc5ZHp2MTNjczgyeGp4ZXo0eGtpd3IifQ.QuweLdJGlwQinTsI2pUEBw'
}).addTo(mymap);


const markerHom = L.marker([50.503721, 30.423178]).addTo(mymap);
markerHom.bindPopup("Мой дом)").openPopup();

const markerWork = L.marker([50.4376183,30.5251408]).addTo(mymap);
markerWork.bindPopup("Сдесь я работу работаю и реализую мечты клиентов<br><b>W8Shipping</b>").openPopup();

const markerPaintBall = L.marker([50.4511654,30.3335653]).addTo(mymap);
markerPaintBall.bindPopup("Один из замых крутых Пейнтбольных клубов в Киеве").openPopup();

const popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("Долгота и Широта: " + e.latlng.toString())
        .openOn(mymap);
}

mymap.on('click', onMapClick);

//Карты круть