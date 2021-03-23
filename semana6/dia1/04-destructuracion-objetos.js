/**
 * Destructuracion de objetos
 */

let objPersona = {
    nombre: "Jorge",
    apellido: "Garnica",
    edad: 29,
}


// No hacer crack
let copia = objPersona;

copia.apellido = "Blanco"

console.log(copia);
console.log(objPersona);

//

let {edad} = objPersona;

console.log(edad);

//

