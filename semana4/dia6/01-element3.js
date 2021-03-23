const qs = _ => document.querySelector(_);
const qsAll = _ => document.querySelectorAll(_);

let lis = qsAll(".header__item");
lis = Array.from(lis);


lis.forEach((headerItem) => {
    headerItem.onclick = function() {
        let itemActive = document.querySelector(".header__item.active");
        itemActive.classList.remove("active");
        headerItem.classList.add("active")
    }
})


let headerTheme = document.querySelector(".header__theme");
let linkTheme = document.querySelector("#link__theme");

headerTheme.onclick = function() {
    (linkTheme.getAttribute("href").includes("ligth"))
    ? linkTheme.setAttribute("href", "01-element3-dark.css")
    : linkTheme.setAttribute("href", "01-element3-ligth.css")
}