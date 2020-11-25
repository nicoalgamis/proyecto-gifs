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

// TREANDING
let imagen = document.getElementById("imagenCarrusel");
let imagen1 = document.getElementById("imagenCarrusel1");
let imagen2 = document.getElementById("imagenCarrusel2");
trendingArray = []


let urlTrendings = fetch ("http://api.giphy.com/v1/gifs/trending?api_key=bev5PXIqefIQlBW4oY690KBimi2IWjOj&limit=12")
.then (param => param.json())
.then (param =>{

    for(let i = 0; i < 12; i++) {
        let imgCarrusel = param.data[i].images.downsized.url;
        trendingArray.push(imgCarrusel);
    }
    imagen.src = trendingArray[0];
    imagen1.src = trendingArray[1];
    imagen2.src = trendingArray[2];
});

    // LLAMADO A LAS FLECHAS DEL CARRUSEL
let FlechaDerecha = document.getElementById("rightSlider");
let FlechaIzquierda = document.getElementById("leftslider");

    // CAMBIAR FOTOS DEL CARRUSEL

posicionActual = 0

FlechaDerecha.addEventListener("click", function(){
    if (posicionActual < (trendingArray.length - 3)) {
        imagen.src = trendingArray[posicionActual + 1]
        imagen1.src = trendingArray[posicionActual + 2]
        imagen2.src = trendingArray[posicionActual + 3]
        posicionActual++;
    }
})
FlechaIzquierda.addEventListener("click", function(){
    if (posicionActual > 0) {
        imagen.src = trendingArray[posicionActual]
        imagen1.src = trendingArray[posicionActual + 1]
        imagen2.src = trendingArray[posicionActual + 2]
        posicionActual--;
    }
})
    // flecha derecha cambio de imagen

FlechaDerecha.addEventListener ("mouseover", function () {
    FlechaDerecha.src="../imagenes/Button-Slider-right-hover.svg"
})
FlechaDerecha.addEventListener("mouseleave", function (){
    FlechaDerecha.src="../imagenes//Button-Slider-right.svg"
})
// flecha izquierda cambio de imagen

FlechaIzquierda.addEventListener ("mouseover", function () {
    FlechaIzquierda.src="../imagenes/button-slider-left-hover.svg"
})

FlechaIzquierda.addEventListener("mouseleave", function (){
    FlechaIzquierda.src="../imagenes/button-slider-left.svg"
})

// CAMBIO DE IMAGEN "X" MENU HAMBURGUESA


arrayFavorito = []

function mostrarFavoritos(imagen){
    
}