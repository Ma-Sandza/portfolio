const ul = document.getElementById("ul");
const navButton = document.getElementById("nav__button");

navButton.addEventListener("click", ()=>{
    if(ul.style.display === "flex"){
        ul.style.display = "none";
    } else {
        ul.style.display = "flex";
    }
})