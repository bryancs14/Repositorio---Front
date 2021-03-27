import axios from "axios";

console.log("Hola mundo");
for (const n of [1,2,3,4,5]) {
    console.log(n);
}

// fetch("https://reqres.in/api/users").then((peticion => {
//     return peticion.json();
// })).then(data => {
//     console.log(data);
// })

axios.get("https://reqres.in/api/users").then((data) => {
    console.log(data);
})