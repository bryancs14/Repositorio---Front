console.log(1);

console.log(2);

//setTimeout - Tarea asincrona, espera 2000 milisegundos para realizarse
                setTimeout(() => {
                    console.log(3);
                }, 2000);

console.log(4);

console.log(5);

const getCoords = (ciudad, callback) => {
    let rpta = undefined;
    setTimeout(() => {
        rpta = [-16.1566, -70.4555];
        callback(rpta);
    }, 3000);
    return rpta;
}

let coordenadas = getCoords("Trujillo", (rpta) => {
    console.log("Resultado");
    console.log(rpta);
});

for (const n of ["Jaime", "Gabi", "Mia"]) {
    console.log(n);
}
