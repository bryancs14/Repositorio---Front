let formulario = document.querySelector("#formulario");
let inputColor = document.querySelector("#inputColor");
let btnGuardar = document.querySelector("#btnGuardar");
let body = document.querySelector("body");

formulario.onsubmit = (e) => {
    e.preventDefault();
    let color = inputColor.value;
    body.style.backgroundColor = color;


    /**
     * Guardar datos en el local storage
     * OJO: solo guarda datos STRING
     */
    localStorage.setItem("fondo", color);
}

//Funcion anonima

(() => {
    //Obtener valores de local storage
    if(localStorage.getItem("fondo")) {
        body.style.backgroundColor = localStorage.getItem("fondo");
        inputColor.value = localStorage.getItem("fondo");
    }
})()

document.querySelector("#btnBorrar").onclick = e => {
    localStorage.removeItem("fondo");
    body.style.backgroundColor = "unset"
    inputColor.value = "#000";
}