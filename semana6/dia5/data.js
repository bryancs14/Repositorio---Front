export const API = "algo";
export const despedida = () => {
    console.log("despidiendo");
}

const saludar = () => {
    console.log("saludando");
}

//Solo se puede usar export default
//una sola vez por archivo JS
export default saludar;