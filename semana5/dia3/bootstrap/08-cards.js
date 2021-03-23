const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
    card.onmouseover = () => {
        card.classList.remove("shadow-sm");
        card.classList.add("shadow"); 
    }

    card.onmouseout = () => {
        card.classList.remove("shadow");
        card.classList.add("shadow-sm"); 
    }
})