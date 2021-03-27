const endpointBusqueda = "https://api.themoviedb.org/3/search/movie?api_key=eb48e75b90661ba05779c8e7f79c7e73&language=es-ES&page=1&include_adult=false&query=";
export const getPeliculasByName = async (busqueda) => {
    let rpta = await axios.get(endpointBusqueda + busqueda);
    return rpta.data.results;
}