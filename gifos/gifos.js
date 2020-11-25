// MODO NOCTURNO
let nocturno = document.getElementById("modoNocturno")
let gifos =  document.getElementById("last_gifos");
let p = document.querySelectorAll("p, h1, h2, li, a");
// localStorage.setItem("modoBlack", false);
nocturno.addEventListener("click",function(){
    document.body.classList.toggle("black");
    gifos.classList.toggle("black");
    if (document.body.classList.contains("black")) { // Cambio texto
        nocturno.innerHTML = "MODO DIURNO";
        localStorage.setItem("modoBlack", true);
    }
    else{
        nocturno.innerHTML = "MODO NOCTURNO"; //HASTA ACA!!!!
        localStorage.setItem("modoBlack", false);
    }
    for (let i = 0; i < p.length; i++) {
        p[i].classList.toggle ("white");
    }
})

let modoBlack = localStorage.getItem("modoBlack");
console.log(modoBlack);
if (modoBlack == "true"){
    document.body.classList.add("black");
}

// MENU HAMBURGUESA
const enlaces = document.getElementsByClassName("ul_nav")[0];
const hamburguesa = document.getElementsByClassName("icon-menu")[0];
const menuHamburguesa = document.getElementById("hamburguer");
let abierto = false;

const toggleMenu = () =>{
    enlaces.classList.toggle("ul_nav2");
    enlaces.style.transition = "transform 0.5s ease-in-out";   
    abierto = !abierto; 
}

//  CAMBIO X A HAMBURGUESA
const cambioImagen = () => {
    if (abierto) {
       menuHamburguesa.src="../imagenes/close.svg";

    }else{
        menuHamburguesa.src="../imagenes/burger.svg";
    }
}


menuHamburguesa.addEventListener("click", function (){
    toggleMenu();
    cambioImagen();

})