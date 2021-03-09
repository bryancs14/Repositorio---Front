window.addEventListener('scroll', function() {

    let circular = document.getElementById('circular');
    let animacion = circular.getElementsByTagName('circle')[1];
    let posicionObj1 = animacion.getBoundingClientRect().top;
    let tamanoPantalla = window.innerHeight/2;
    
    if(posicionObj1 < tamanoPantalla) {
        animacion.style.animation = 'mover 3s linear'
        animacion.style.animationFillMode = 'forwards'
    }
    
})