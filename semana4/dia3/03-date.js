let fechaHoy = new Date();

console.log(fechaHoy.getFullYear());

//OJO enero es igual a 0 y dciembre a 11
console.log(fechaHoy.getMonth());

console.log(fechaHoy.getDate());

let diaDeLaMadre = new Date(2021, 4, 9);

milliseconds = diaDeLaMadre - fechaHoy;
seconds = milliseconds/1000;
minutos = seconds/60;
horas = minutos/60;
dias = horas/24;

