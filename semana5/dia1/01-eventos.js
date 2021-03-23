let inputNombre = document.querySelector("#inputNombre");
let formulario = document.querySelector("#form");
let inputApellido = document.querySelector("#inputApellido");
let inputEmail = document.querySelector("#inputEmail");
let selectPais = document.querySelector("#selectPais");
let selectDepartamento = document.querySelector("#selectDepartamento");
// formulario.addEventListener("click", ()=>{

// })

// formulario.onclick = (e) => {
//     console.log(e.target);
// } 

let paises = [
    { id: 12343, nombre: "Perú" },
    { id: 12, nombre: "México" },
    { id: 13, nombre: "China" },
    { id: 19, nombre: "Argentina" },
];

let departamentos = [
    { id: 22, nombre: "Lima", idPais: 12343, stock: true},
    { id: 23, nombre: "Puno", idPais: 12343, stock: false},
    { id: 24, nombre: "Wujan", idPais: 13, stock: true},
    { id: 25, nombre: "Acapulco", idPais: 12, stock: true},
    { id: 26, nombre: "Fujian", idPais: 13, stock: false},
    { id: 27, nombre: "Buenos Aires", idPais: 19, stock: true},
    { id: 28, nombre: "Cordova", idPais: 19, stock: false},
    { id: 29, nombre: "Tulum", idPais: 12, stock: true},
]



let datos = {
    nombre: "",
    apellido: "",
    email: ""
}

let myOninput = (e) => {
    datos[e.target.name] = e.target.value;
    console.log(datos);
}

inputNombre.oninput = myOninput;
// = (e) => {
//     myOninput(e);
// };
inputApellido.oninput = myOninput;
inputEmail,oninput = myOninput;


formulario.onsubmit = (e) => {
    //sirve para detener la ejecucion normal de un evento por defecto
    //una etiqueta "a" nos redirecciona a una pagina con el evento click
    //una etiqueta form nos actuliza la pagina con un evento enter 
    e.preventDefault();
    let regexLetras = new RegExp('^[a-zA-Zñ]{1,5}$');
    if(regexLetras.test(datos.nombre)) {
       if(regexLetras.test(datos.apellido)){
           console.log("Haciendo onsubmit");
       }else{
           inputApellido.classList.add("error-input");
       }
    } else {
        inputNombre.classList.add("error-input");
    }
}

const llenarPaises = function() {
    selectPais.innerHTML = "<option value='0' selected disabled>Seleccione un pais</option>";
    paises.forEach((pais)=>{
        let option = document.createElement("option");
        option.innerText = pais.nombre;
        option.value = pais.id;
        selectPais.appendChild(option); 
    })
}

const llenarDepartamentosById = function(idPaisSeleccionado) {
    selectDepartamento.innerHTML = "<option value='0' selected>Seleccione un Departamento</option>";
    if(idPaisSeleccionado == 0){
        selectDepartamento.setAttribute("disabled", "disabled");
        return;
    }
    let depasPorPais = departamentos.filter((objDepto) => {
        if(objDepto.idPais === +idPaisSeleccionado){
            return objDepto;
        }
    });
    // console.log(depasPorPais);
    depasPorPais.forEach((objDepto)=>{
        let option = document.createElement("option");
        option.innerText = objDepto.nombre;
        option.value = objDepto.id;
        selectDepartamento.appendChild(option); 

        !objDepto.stock && option.setAttribute("disabled", "disabled");
    })


    selectDepartamento.removeAttribute("disabled")
}

llenarPaises();
selectPais.onchange = () => {
    let idPaisSeleccionado = selectPais.value;
    llenarDepartamentosById(idPaisSeleccionado);
    // selectDepartamento.setAttribute("disabled", "")
}


