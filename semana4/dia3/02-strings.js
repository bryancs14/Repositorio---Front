let frase = "Los programadores son buenos";

console.log(`Tamaño de la frase: ${frase.length}`);

console.log(frase.charAt(2));

//Mayusculas
console.log(frase.toUpperCase());

//Minusculas
console.log(frase.toLowerCase());

console.log(frase.split(" "));

//Obtener la posicion en la que aparece un determinado caracter o una determinada cadena
console.log(frase.indexOf("prog"));

//Si no existe el caracter retorna -1
console.log(frase.indexOf("mate"));

//Obtener la cadena sin los espacios en blancos externos de la cadena
let correo = "    bryan@hotmail.com"

console.log(correo);
console.log(correo.trim());

//Obtener la subcadena desde la posicion 5, 2 adelante
console.log(frase.substr(5,2));

//Obtener la subcadena desde la posicion 5 hasta la 6(no inlcuye la 7)
console.log(frase.substring(5, 8));

