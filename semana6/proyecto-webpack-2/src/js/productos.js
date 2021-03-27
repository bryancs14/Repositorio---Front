import { getPosts } from "./servicios";

getPosts().then((data) => {
    console.log(data);
    console.log("holis");
})