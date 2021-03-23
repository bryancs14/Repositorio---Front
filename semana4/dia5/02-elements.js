let parrafo1 = document.getElementById("parrafo1");

/**
 * element.innerText obtiene o asigna el texto interno de un elemento
 * 
 * <p>Este textoooo</p>
 */

console.log(parrafo1.innerText);

parrafo1.innerText = "Nuevo texto"

let listaLanguage = document.querySelectorAll(".language");
listaLanguage = Array.from(listaLanguage);

function llenarPeliculas() {
    let lenguajes = document.querySelector("#parrafo1 + ul");
    peliculas.forEach((objPeli) => {
        const li = document.createElement("li");
        li.innerHTML = objPeli.original_title;
        lenguajes.append(li);
    })
    
}

llenarPeliculas();

function llenarGeneros() {
    let selectGeneros = document.getElementById("selectGeneros");
    generos.forEach((objGenero) => {
        const option = document.createElement("option");
        option.innerText = objGenero.name;
        selectGeneros.append(option);
    })
}

llenarGeneros();

function llenarPeliculas1() {
    let selectPeli = document.getElementById("selectPeliculas");
    peliculas.forEach((objPeli) => {
        const option = document.createElement("option");
        option.innerText = objPeli.original_title;
        selectPeli.append(option);
    })
}

llenarPeliculas1();