const titulo = document.getElementById("titulo");
const lista = document.getElementById("lista");

titulo.innerText = "Cargando...."

axios.get("https://jsonplaceholder.typicode.com/todos")
    .then((rpta) => {
        titulo.innerText = "Ya cargo";
        const {data} = rpta;
        data.forEach(objData => {
            let li = document.createElement("li");
            li.innerHTML = `${objData.title} - ${objData.completed ? "Completado" : "Incompleto"}`;
            lista.appendChild(li);
        });
    }).catch((error) => {
        titulo.innerText = "Ups!!! No se pudo cargar la data"
    });
