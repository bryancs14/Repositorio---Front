const formulario = document.getElementById("formulario");
const inputTitulo = document.getElementById("inputTitulo");
const inputDescripcion = document.getElementById("inputDescripcion");
const tbody = document.getElementById("tbody")

let arrayTODOS = [];
console.log(swal);

formulario.onsubmit = function(e) {
    e.preventDefault();
    if(inputTitulo.value.trim() === "" || inputDescripcion.value.trim() === "") {
        //mostrar error
        Swal.fire({
            icon: "error",
            title: "Ops...",
            text: "Todos los campos con necesarios",
        })
        return;
    }

    let objTODO =  {
        titulo: inputTitulo.value,
        descripcion: inputDescripcion.value
    }

    arrayTODOS.push(objTODO);
    //json.sringify retora un string que viene a ser el objetoJSON en forma string
    localStorage.setItem("todos", JSON.stringify(arrayTODOS));
    this.reset();
    dibujarTODOS();
}
/**
 * Funcion que toma el arrayTODOS y los dibuja en el <tbody>
 */

const dibujarTODOS = () => {
    //Limpiando el tbody antes de hacer nada
    tbody.innerHTML = "";
    arrayTODOS.forEach((objTODO, i) => {
        const tr = document.createElement("tr");
        const tdNro = document.createElement("td");
        const tdTarea = document.createElement("td");
        const tdAcciones = document.createElement("td");
        const btnEliminar = document.createElement("button");
        
        btnEliminar.innerText = "Eliminar";
        btnEliminar.onclick = () => {
            eliminarTODO(i);
        }
        tdNro.innerText = i+1;
        tdTarea.innerHTML = /*html */`
            <h3>${objTODO.titulo}</h3>
            <p>${objTODO.descripcion}</p>`;
        tdAcciones.appendChild(btnEliminar);

        tr.appendChild(tdNro);
        tr.appendChild(tdTarea);
        tr.appendChild(tdAcciones);

        tbody.appendChild(tr);
    });
}

const eliminarTODO = function(posicion) {

    /**
     * array.splice(posicion, nro_elementos)
     * eliminar el nro_elementos del arreglo a partir de la posicion posicion
     */
    arrayTODOS.splice(posicion, 1);
    //actualizar el local storage
    localStorage.setItem("todos", JSON.stringify(arrayTODOS));
    dibujarTODOS();
}

function inicio() {
    if(localStorage.getItem("todos")){
        console.log("holaaa");
        arrayTODOS = JSON.parse(localStorage.getItem("todos"));
        dibujarTODOS();
    }
    // Waves.attach("button");
    // Waves.init();
}
inicio();

Waves.attach("input", ['waves-block']);
    Waves.init();