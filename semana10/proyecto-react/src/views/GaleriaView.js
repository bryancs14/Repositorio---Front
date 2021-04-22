import React, { useState } from 'react'
import {crearDocumento} from "../services/galeriaServices"

const GaleriaView = () => {

    const [documentos, setDocumentos] = useState([])

    const enviarDocumento = async () => {
        let objDocumento = {
            url: "https://picsum.photos/400",
            nombre: "foto random"
        }
        let docCreado = await crearDocumento(objDocumento)
        console.log(docCreado);
    }


    return (
        <div>
            Crear Documento
            <button onClick={enviarDocumento}>Crear!!</button>
        </div>
    )
}

export default GaleriaView
