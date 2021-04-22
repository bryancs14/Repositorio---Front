import React from "react";
import { crearDocumento, subirArchivos } from "../services/galeriaServices";
import { useForm } from "react-hook-form";

let imagenLocal;

const CreateDocumentView = () => {
  //register, sirve para registrar cada input de nuestro formulario
  //handleSubmit, para manejar el submit del formulario
  //errors, para manejar los errores de los inputs

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //esta funcion recibira un evento
  const manejarImagen = (e) => {
    let miImagen = e.target.files[0];
    console.log(miImagen);
    imagenLocal = miImagen;
  };

  //recibe de forma automatica data, es un objeto con toda la info de los inputs
  const escucharSubmit = (data) => {
    console.log(data);
    subirArchivos(imagenLocal.name, imagenLocal);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(escucharSubmit)}>
        <div className="form-group">
          <label>Nombre Imagen</label>
          <input
            type="text"
            className="form-control"
            {...register("nombre", { required: true })}
          />
          {errors.nombre && 
            <small className="text-danger">
              El nombre de la foto es obligatorio
            </small>
          }
        </div>
        <div className="form-group">
          <label>Imagen</label>
          <input
            type="file"
            className="form-control"
            onChange={(e) => {
              manejarImagen(e);
            }}
          />
        </div>
        <button type="submit" className="btn btn-small btn-primary">
          Agregar foto
        </button>
      </form>
    </div>
  );
};

export default CreateDocumentView;
