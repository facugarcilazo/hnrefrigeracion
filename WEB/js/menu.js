const inicio = document.querySelector(".inicio");
const menu = document.querySelector(".menu")


inicio.addEventListener("click", () => {
    menu.classList.toggle("appear")
})

window.addEventListener("click", e => {
    if (menu.classList.contains("appear")
        && e.target != menu && e.target != inicio){
    menu.classList.toggle("appear")
        
    }
})