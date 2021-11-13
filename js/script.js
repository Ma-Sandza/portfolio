const ul = document.getElementById("ul");
const navButton = document.getElementById("nav__button");

navButton.addEventListener("click", ()=>{
    if(ul.style.display === "flex"){
        ul.style.display = "none";
    } else {
        ul.style.display = "flex";
    }
})

document.onclick = function(e){
    if(e.target.id !== "nav__button" && e.target.id !== "nav__links"){
        ul.style.display = "none";
    }
}