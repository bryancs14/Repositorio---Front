function Receta() {
    this.nombre = "";
    this.ingresiente = [
        {nombre: "", cantidad: 0, unidadMedida: ""}
    ];
    this.tiempo = 0;
    this.tipo = "";
    this.info = function () {
        console.log(`El plato ${nombre} es un plato ${tipo}`);
    }
}

