import axios from "axios";

console.log("inicio javascript");

console.log("holaa");
axios.get("https://reqres.in/api/users").then((data) => {
    console.log(data);
});