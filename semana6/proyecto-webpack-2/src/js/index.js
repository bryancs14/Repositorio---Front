import { getUsers } from "./servicios";


getUsers().then((data) => {
    console.log(data);
})