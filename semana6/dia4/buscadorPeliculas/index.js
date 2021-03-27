import { getPeliculasByName } from "./servicios.js";

const formBusqueda = document.getElementById("formBusqueda");
const inputBusqueda = document.getElementById("inputBusqueda");
const containerPelicula = document.getElementById("containerPelicula");

formBusqueda.onsubmit = e => {
    e.preventDefault();
    let busqueda = inputBusqueda.value.trim();
    busqueda !== "" && buscarPelicula(busqueda);
}

const dibujarPeliculas = peliculas => {
    containerPelicula.innerHTML = "";
    peliculas.forEach(objPelicula => {
        const col = document.createElement("div");
        col.classList.add("col-md-3");
        col.classList.add("mb-3");
        let poster = objPelicula.poster_path ? `https://image.tmdb.org/t/p/w500${objPelicula.poster_path}` : "http://placehold.it/200"
        col.innerHTML = `
        <div class="card">
          <img src=${poster} alt="" class="card-img-top">
          <div class="card-body">
            <h4 class="card-title">${objPelicula.original_title}</h4>
            <p class="card-text">
              ${objPelicula.overview}
            </p>
            <ul class="movie__features">
              <li>
                <small class="text-muted">
                  <i class="fas fa-calendar"></i> ${objPelicula.release_date}
                </small>
              </li>
              <li>
                <small class="text-muted">
                  <i class="fas fa-star text-warning"></i> ${objPelicula.vote_average}
                </small>
              </li>
              <li>
                <small class="text-muted">
                  <i class="fas fa-heart text-danger"></i> ${objPelicula.vote_count}
                </small>
              </li>
              </ul>
          </div>
        </div>
        `
        containerPelicula.appendChild(col);
    });
}

const buscarPelicula = busqueda => {
    getPeliculasByName(busqueda).then((peliculas) => {
        dibujarPeliculas(peliculas);
    });
}