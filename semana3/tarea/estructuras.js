/**
 * 3.1 Realice un algoritmo para determinar si una persona puede votar
 * con base en su edad en las próximas elecciones. 
 */

// let edadesPoblacion = [13, 18, 34, 55, 32, 11];

// if(edadesPoblacion >= 18) {
//     console.log("Puede votar");
// } else {
//     console.log("No tiene edad suficiente para votar");
// }

/**
 * 3.5 Se tiene el nombre y la edad de tres personas. Se desea saber el
 * nombre y la edad de la persona de menor edad.
 */
// let nombres = ["Juan", "Carlos", "Mario"];
// let edades = [19, 15, 20];

// for(let i = 0; i<edades.length; i++) {
//     if(edades[i] < 18) {
//         console.log(`Nombre: ${nombres[i]}`);
//         console.log(`Edad: ${edades[i]}`);
//     }
// }

// let opt = 1;

// if(edades[0] <18) opt = 0;
// else if (edades[1] < 18) opt = 1;
// else if(edades[2] < 18) opt = 2;

// console.log(`Nombre: ${nombres[opt]}`);
// console.log(`Edad: ${edades[opt]}`);


/**
 * 3.6 Realice el diagrama de flujo, el pseudocódigo y el diagrama N/S que
 * muestren el algoritmo para determinar el costo y el descuento que
 * tendrá un artículo. Considere que si su precio es mayor o igual a $200 
 * se le aplica un descuento de 15%, y si su precio es mayor a $100 pero 
 * menor a $200, el descuento es de 12%, y si es menor a $100, sólo 10%.
 */

// precio = 199;
// descuento = 0;

// if(precio >= 200) {
//     descuento = precio*0.15;
// }else if(precio >= 100) {
//     descuento =  precio*0.12;
// } else {
//     descuento = precio*0.1;
// }

// console.log(`Precio: ${precio}`);
// console.log(`Descuento: ${descuento}`);
// console.log(`Total a pagar: ${precio - descuento}`);

/**
 * 3.11 Se les dará un bono por antigüedad a los empleados de una tienda. 
 * Si tienen un año, se les dará $100; si tienen 2 años, $200, y así sucesivamente 
 * hasta los 5 años. Para los que tengan más de 5, el bono será de $1000. Realice 
 * un algoritmo y represéntelo mediante el diagrama de flujo, el pseudocódigo y
 * diagrama N/S que permita determinar el bono que recibirá un trabajador.
 */

// let years = 3;
// let bono = 0;

// if(years > 5) {
//     bono = 1000;
// } else {
//     bono = 100*years;
// }

// console.log(`Su bono por los ${years} trabajados es: $. ${bono}`);

/**
 * 3.12 Realice un algoritmo que permita determinar el sueldo semanal de un trabajador
 * con base en las horas trabajadas y el pago por hora, considerando que a partir
 * de la hora número 41 y hasta la 45, cada hora se le paga el doble, de la hora
 * 46 a la 50, el triple, y que trabajar más de 50 horas no está permitido.
 */

// let sueldoMinimo = 400;
// let sueldoPorHora = sueldoMinimo/40;
// let sueldoExtra = 0;
// let horasTrabajo = 45;

// if(41 <= horasTrabajo && horasTrabajo <= 45){
//     sueldoExtra = (horasTrabajo - 40) * sueldoPorHora * 2;
// } else if(46 <= horasTrabajo && horasTrabajo <= 50) {
//     sueldoExtra = (sueldoPorHora * 10) + ((horasTrabajo -  45)*3*sueldoPorHora)
// }

// console.log(`Su sueldo por las ${horasTrabajo} horas trabajadas es: $. ${sueldoMinimo + sueldoExtra}`);

/**
 * 3.14 Realice un algoritmo que, con base en una calificación proporcionada (0-10),
 * indique con letra la calificación que le corresponde: 10 es “A”, 9 es “B”,
 * 8 es “C”, 7 y 6 son “D”, y de 5 a 0 son “F”.
 */

// let nota = 8;
// let letra;

// if(nota <= 10 && nota >= 0) {
//     letra = (nota === 7 || nota === 6) ? "D" : "F";
//     if(nota === 10) letra = "A"
//     if(nota === 9) letra = "B"
//     if(nota === 8) letra = "C"
//     console.log(`Su nota es ${letra}`);
// } else {
//     console.log("Ingrese una nota correcta");
// }

/**
 * 3.15 Realice un algoritmo que, con base en un número proporcionado(1-7),
 * indique el día de la semana que le corresponde (L-D).
 */

// let numero = 4;
// let dia;

// if(numero >= 1 && numero <=7) {
//     if(numero === 1) dia = "Lunes";
//     if(numero === 2) dia = "Martes";
//     if(numero === 3) dia = "Miercoles";
//     if(numero === 4) dia = "Jueves";
//     if(numero === 5) dia = "Viernes";
//     if(numero === 6) dia = "Sabado";
//     if(numero === 7) dia = "Domingo";
//     console.log(`Es ${dia}`);
// }

/**
 * 3.16 El secretario de educación ha decidido otorgar un bono por desempeño a todos los profesores
 * con base en la puntuación siguiente: Realice un algoritmo que permita determine el monto de bono que
 * percibirá un profesor (debe capturar el valor del salario mínimo y los puntos del profesor).
 */

// let salarioMinimo = +prompt("Salario minimo:");
// let puntos = +prompt("Puntos:");
// let bono;

// if(puntos >= 0) {
//     if(puntos <= 100){    
//         bono = salarioMinimo;
//     }else if (puntos > 100 && puntos <= 150){
//         bono = salarioMinimo*2;
//     } else {
//         bono = salarioMinimo*3;
//     }
//     console.log(`Su bono es de: $.${bono}`);
// }else {
//     console.log("Ingrese bien los puntos");
// }

/**
 * 3.18 Realice un algoritmo y represéntelo mediante el diagrama de flujo, el pseudocódigo y
 * el diagrama N/S que permitan determinar la cantidad del bono navideño que recibirá un
 * empleado de una tienda, considerando que si su antigüedad es mayor a cuatro años o su 
 * sueldo es menor de dos mil pesos, le corresponderá 25 % de su sueldo, y en caso contrario 
 * sólo le corresponderá 20 % de éste
 */

// let tiempo = 5;
// let sueldo = 5000;

// (tiempo > 4 || sueldo < 2000) 
//         ? console.log(`Su bono es de: ${sueldo*0.25}`)
//         : console.log(`Su bono es de: ${sueldo*0.2}`);


/**
 * 3.19 La secretaria de salud requiere un diagrama de flujo que le represente el algoritmo
 * que permita determinar qué tipo de vacuna (A, B o C) debe aplicar a una persona, considerando
 * que si es mayor de 70 años, sin importar el sexo, se le aplica la tipo C; si tiene entre 16 y 
 * 69 años, y es mujer, se le aplica la B, y si es hombre, la A; si es menor de 16 años, se le aplica
 * la tipo A, sin importar el sexo.
 */

// let edad = 10;
// let sexo = "mujer";
// let vacunaTipo;

// if(edad >= 70) {
//     vacunaTipo = "C";
// } else if(edad >= 16) {
//     vacunaTipo = (sexo === "mujer") ? "B" : "A";
// } else vacunaTipo = "A";

// console.log(`Tipo de vacuna: ${vacunaTipo}`);