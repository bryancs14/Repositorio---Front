function buscarPorDni(dni, fn) {
    
    let rpta = "en blanco";

    setTimeout(function(){
        rpta = "Jorge";
        fn(rpta);
    }, 2000);

}

buscarPorDni("455799", function (nombre) {
    console.log(nombre);
});