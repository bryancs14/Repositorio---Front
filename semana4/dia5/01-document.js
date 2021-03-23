/**
 * documetn es un objeto que representa a todo el DOM, ademas tiene
 * propiedades para crear, modificar, asignar eventos con referencia
 * al DOM
 */

console.log(document);


/**
 * document.getElementById("id")
 */
const parrafo1 = document.getElementById("parrafo1");

console.log(parrafo1);

let languageList = document.getElementsByClassName("language");

console.log(languageList);
console.log(languageList[1]);

//Array.from(iterable) convierte una coleccion de elementos a un arreglo genuino
languageList = Array.from(languageList);

languageList.forEach(element => {
    console.log(element);
});

/**
 * document.querySelector("Selector tipo css")
 * Devuelve el unico elemento que coincida con el selector css que enviemos a la seccion
 */

let logo = document.querySelector("footer>p.logo");

console.log(logo);

/**
 * document.querySelectorAll("Selector tipo css")
 */

let hijosFotter = document.querySelectorAll("footer>*");

console.log(hijosFotter);

/**
 * document.createElement()
 * Devuelve la referencia a un elemento HTML de acuerdo
 * al nombre de la etiqueta pasada como parametro
 * OJO: Este elemento no está presente en el DOM aún
 */

let header = document.createElement("header");
console.log(header);

let body = document.querySelector("body");
//element.appenChild: inyecta un nuevo elemento hijo a ese padre
// body.appendChild(header);

body.prepend(header);
