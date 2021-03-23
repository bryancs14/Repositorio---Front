import {peliculas} from "./data-peliculas.js";

const contenedor = document.querySelector("#contenedor");
const modalImagen   = document.querySelector("#modalImagen");
const modalTitulo   = document.querySelector("#modalTitulo");
const modalOverview = document.querySelector("#modalOverview");
const modalPelicula = new bootstrap.Modal(document.getElementById("modalPelicula"));
const mainCarrousel = document.querySelector(".main-carousel");

const classElem = (clase, elemento="div") => {
    const div = document.createElement(elemento);
    div.classList.add(clase);
    return div;
}

const abrirModalPelicula = (objPelicula) => {
    modalImagen.src = `https://image.tmdb.org/t/p/w500${objPelicula.poster_path}`;
    modalTitulo.innerText = objPelicula.original_title;
    modalOverview.innerText = objPelicula.overview;
    modalPelicula.show();
}


const fillMovies = () => {

    peliculas.forEach((objPelicula) => {
        const col = classElem("col-md-3");
        col.classList.add("mb-3");
        const card = classElem("card");
        card.innerHTML = `<img src="https://image.tmdb.org/t/p/w500${objPelicula.poster_path}" alt="" class="card-img-top">`;
        const cardBody = classElem("card-body");
        cardBody.innerHTML = `<h4 class="card-title">${objPelicula.title}</h4>`;
        const cardText = classElem("card-text", "p");
        const cardSpan = document.createElement("span");
        cardSpan.innerText = `${objPelicula.overview.substr(0,100)}`;
        cardText.appendChild(cardSpan);
        const cardLink = classElem("text-muted", "a");
        cardLink.innerText = "ver más...";
        cardLink.href = "#";
        cardLink.onclick = (e) => {
            e.preventDefault();
            // cardSpan.innerText = `${objPelicula.overview}`
            // abrirModalPelicula();
        };
        const cardFeatures = classElem("movie__features", "ul");
        const iconoAdulto = (objPelicula.adult) ? `<i class="fas fa-ban text-danger"></i>` : `<i class="fas fa-check text-success"></i>`;
        const listaString = `
        <li><small class="text-muted"><i class="fas fa-calendar"></i>${objPelicula.release_date}</small></li>
        <li><small class="text-muted"><i class="fas fa-star text-warning"></i>${objPelicula.vote_average}</small></li>
        <li><small class="text-muted"><i class="fas fa-heart text-danger"></i>${objPelicula.vote_count}</small></li>
        <li>
            <small class="text-muted">
                Familiar
                ${iconoAdulto}
            </small>
        </li>
        `;
        cardFeatures.innerHTML = listaString;
        
        col.appendChild(card);
        card.appendChild(cardBody);
        contenedor.appendChild(col);
        cardText.appendChild(cardLink);
        cardBody.appendChild(cardText);
        cardBody.appendChild(cardFeatures);

        col.onclick = () => {
            abrirModalPelicula(objPelicula);
        }
    })

}

fillMovies();

const iniciarFlickity = () => {
    const elem = document.querySelector(".main-carousel");
    var flkty = new Flickity( elem, {
        cellAlign: 'left',
        contain: true
    });
}

const dibujarPopulares = () => {
    peliculas.forEach((objPelicula) => {
        const cell = classElem("carousel-cell");
        cell.innerHTML = `<img src="https://image.tmdb.org/t/p/w500${objPelicula.poster_path}" alt="">`;
        mainCarrousel.appendChild(cell);
    })
}


//Los cell van antes
dibujarPopulares();

iniciarFlickity();
