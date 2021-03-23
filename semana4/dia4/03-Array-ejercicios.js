function agregarGeneros() {
    let peliculasModificadas = peliculas.map((objPeli) => {
        let names = objPeli.genre_ids.map((idGenero) => {
            let ObjGeneroEncontrado = generos.find((objGenero) => {
                if(idGenero === objGenero.id){
                    return objGenero;
                }
            });
            return ObjGeneroEncontrado.name;
        });
        objPeli.genres = names;
        return objPeli;
    });
    console.log(peliculasModificadas);
}


// function agregarGeneros() {
//     let peliculasModificadas = peliculas.map((objPeli) => {
//       let names = objPeli.genre_ids.map((idGenero) => {
//         let objGeneroEncontrado = generos.find((objGenero) => {
//           if (objGenero.id === idGenero) {
//             return objGenero
//           }
//         })
//         return objGeneroEncontrado.name;
//       })
//       objPeli.genres = names;
//       return objPeli;
//     });
//     console.log(peliculasModificadas);
//   }

// console.log(agregarGeneros());


function generoById(idGenero) {
    let ObjGeneroEncontrado = generos.find((gen) => {
        if(idGenero === gen.id) return gen;
    });
    console.log(ObjGeneroEncontrado);
}

// console.log(generoById(16));

function getGenerosByIds(idsGeneros) {
    let generosName = idsGeneros.map((idGenero) => {
        return (generos.find((objGenero) => {
            if(idGenero === objGenero.id){
                return objGenero;
            }
        }).name);
        // return objGeneroEncontrado.name;
    });
    console.log(generosName);
}

getGenerosByIds([16, 12]);