

let tablaBody = document.querySelector("#tbody");

function diaSemana(dia) {
    const dias = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];
    return dias[dia];
}

function crearColumna(dato, fila) {
    let column = document.createElement("td");
    column.innerText = dato;
    fila.append(column);
}

function crearTabla() {
    temperaturas.forEach((objTemp, i) => {
        let fila = document.createElement("tr");
        const main = objTemp.main;
        const fecha = objTemp.dt_txt.split(" ");
        const dia = new Date(objTemp.dt_txt).getDay();
        fila.innerHTML = `<td>${i+1}</td><td>${main.temp}</td><td>${main.humidity}</td><td>${main.temp_min}</td><td>${main.temp_max}
                         </td><td>${fecha[0]}</td><td>${diaSemana(dia)}</td><td>${fecha[1]}</td>`
        // crearColumna(i+1, fila);
        // crearColumna(objTemp.main.temp, fila);
        // crearColumna(objTemp.main.humidity, fila);
        // crearColumna(objTemp.main.temp_min, fila);
        // crearColumna(objTemp.main.temp_max, fila);
        // crearColumna(fecha[0], fila);
        // crearColumna(diaSemana(dia), fila);
        // crearColumna(fecha[1], fila);
        tablaBody.append(fila);
    });
}





crearTabla();