var miMapa = L.map('miMapa').setView([51.505, -0.09], 13);


L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(miMapa);

let marker = L.marker([51.5, -0.09]).addTo(miMapa);

const btnPuno = document.getElementById("btnPuno");

miMapa.on("click", ({latlng: {lat, lng}})=>{
    console.log(lat);
})

btnPuno.onclick = () => {
    miMapa.flyTo([-16.505, -70.09], 13);
    marker.setLatLng([-16.505, -70.09])
}