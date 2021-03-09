/**Ejercicio compra de articulo */
// let costoPrenda = 5000;
// let nombrePrenda = "Cartera Gucci"
// let creditCardCash = 8000;

// if(creditCardCash >= costoPrenda) {
//     creditCardCash -= costoPrenda;
//     console.log(`Saldo disponible: ${creditCardCash}`);
//     console.log("Gracias por su compra");
// } else {
//     console.log("No tiene saldo dsiponible");
//     console.log(`Le faltan ${costoPrenda - creditCardCash}`);
// }

// console.log("Hasta Pronto");


/**
 * Si el producto tiene un costo mayor o igual a 500 soles
 * y es jueves se descuenta un 15%,
 * si es domingo se descuenta un 10%,
 * cualquier otro dia no hay descuento
 */


//  debugger;
//  let dia = "jueves";
//  let precioProducto = 480.00;
// if(precioProducto >= 500) {
//     if(dia === "jueves"){
//         precioProducto *= (1 - 0.15);
//     } else if (dia === "domingo"){
//         precioProducto *= (1 - 0-1);
//     }
// }

// console.log(`Precio del producto: ${precioProducto}`);

// let num1 = 5;
// let num2 = 4;
// let num3 = 3;
// let mayor;

// if(num1 >= num2) {
//     if(num1 >= num3){
//         mayor = num1;
//     } else {
//         mayor=num3;
//     }
// }
// else if(num2 >= num3){
//     mayor = num2;
// } else {
//     mayor=num3;
// }

// console.log(mayor);


let cantAlumnos = 20;
let costo;

if(cantAlumnos >= 100) {
    costo = cantAlumnos * 65;
} else if(cantAlumnos >= 50 && cantAlumnos <100){
    costo = cantAlumnos * 70;
} else if(cantAlumnos >= 30 && cantAlumnos <50){
    costo = cantAlumnos * 95;
} else costo = 4000;

console.log(costo);


let horas;
let cobro;

if(horas <= 2) {
    cobro = horas * 5;
} else if(horas <= 5){
    cobro = 10 + (horas - 2)*4
} else if(horas <= 10){
    cobro = 22 + (horas - 5)*3
} else cobro = horas * 2;