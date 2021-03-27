const climaCiudad = document.getElementById("climaCiudad");
const climaIcono = document.getElementById("climaIcono");
const climaTemp = document.getElementById("climaTemp");
const climaTempMin = document.getElementById("climaTempMin");
const climaTempMax = document.getElementById("climaTempMax");
const climaSensacion = document.getElementById("climaSensacion");
const climaHumedad = document.getElementById("climaHumedad");
const formBusqueda = document.getElementById("formBusqueda");
const inputBusqueda = document.getElementById("inputBusqueda");
const cargando = document.getElementById("cargando");


const dibujarClima = (rpta) => {
    climaCiudad.innerText = rpta.data.name;
    climaTemp.innerText = rpta.data.main.temp;
    climaTempMin.innerText = rpta.data.main.temp_min;
    climaTempMax.innerText = rpta.data.main.temp_max;
    climaSensacion.innerText = rpta.data.main.feels_like;
    climaHumedad.innerText = rpta.data.main.humidity;
    climaIcono.src = `http://openweathermap.org/img/wn/${rpta.data.weather[0].icon}@4x.png`
}

const getClimaByCityName = (ciudad) => {
    cargando.removeAttribute("hidden");
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=456eb7bff8adb5539b0e6703c48ee2ca&units=metric`)
    .then((rpta) => {
        cargando.setAttribute("hidden", "hidden");
        dibujarClima(rpta);
    }).catch((error) => {
        cargando.setAttribute("hidden", "hidden");
        alert("Error ingrese un nombre correcto")
    })
}

formBusqueda.onsubmit = e => {
    e.preventDefault();
    let ciudad = inputBusqueda.value.trim();
    if(ciudad === "") return;
    getClimaByCityName(ciudad);
}

