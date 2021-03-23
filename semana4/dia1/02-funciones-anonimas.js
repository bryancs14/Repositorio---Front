const sumar = function(a,b) {
    return a+b;
};

function multiplicar(n1, n2, funcion){
    let sumatoria = 0;
    for(let i = 0; i<n1; i++) {
        sumatoria = funcion(sumatoria, n2);
    }
    console.log(sumatoria);
}

multiplicar(5,3, sumar)



