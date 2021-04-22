import {fire, firebase} from "../config/firebase";

const db = fire.firestore()

const crearDocumento = (objDocumento) => {
    return db.collection("documento").add({...objDocumento})
}

const subirArchivos = (nombreArchivo,  Archivo) => {
    //referencia para subirlo a firebase
    const refStorage = firebase.storage().ref(`fotos/${nombreArchivo}`)
    //tara de subida
    const tarea = refStorage.put(Archivo)
    tarea.on("state_changed",
    () => {}, //funcion para evaluar la subida
    () => {}, //funcion para manejar errores
    () => { //funcion cuando ya termino la subida
        // aqui ya tengo la url de descarga
        tarea.snapshot.ref.getDownloadURL()
        .then((urlImagen) => {console.log(urlImagen);})
    }
    )
}

export {
    crearDocumento,
    subirArchivos
}