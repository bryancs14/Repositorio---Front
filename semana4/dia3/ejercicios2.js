/**
 * Funcion que recibe un ID de pelicula e imprime la lista de generos que pertenecen a esta pelicula
 * @param {*} peliId 
 */

const mostrarGenerosByPeliId = (peliId) => {
    for (const peli of peliculas) {
        if(peli.id === peliId){
            console.log(`Pelicula: ${peli.original_title}`);
            for (const genero of generos) {
                for(let i = 0; i < peli.genre_ids.length; i++){
                    if(genero.id === peli.genre_ids[i]){
                        console.log(genero.name);
                    }
                }
            }
            return;
        }
    }
}

// mostrarGenerosByPeliId(529203);


const mostarPeliculasByGeneroName = (genero) => {
    for (const gen of generos) {
        if(genero === gen.name) {
            console.log(`Genero: ${genero}`);
            for (const peli of peliculas) {
                for (const generito of peli.genre_ids) {
                    if(gen.id === generito){
                        console.log(peli.original_title);
                    }
                }
            }
        }
    }
}

// mostarPeliculasByGeneroName("Adventure");

const peliculasTop = () => {
    let peliculasTop = [];
    for (const pelicula of peliculas) {
        if(pelicula.vote_average >= 7) peliculasTop.push(pelicula.original_title);
    }

    for (const pelicula of peliculasTop) {
        console.log(pelicula);
    }
}

peliculasTop();
