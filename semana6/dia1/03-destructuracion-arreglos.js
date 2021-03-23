/**
 * Destructuracion de arreglos
 */

let edades = [12, 34, 67, 56, 68];

let [a, b, ...resto] = edades;

console.log(resto);
console.log(b);