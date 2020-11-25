// MODO NOCTURNO
let nocturno = document.getElementById("modoNocturno")
let gifos =  document.getElementById("last_gifos");
let p = document.querySelectorAll("p, h1, h2, li, a");

/*ver mas global vars*/
const cantidadResultadosNuevos = 12;
let offsetVerMas = 0;

/*favoritos global vars*/
let arrayFavorito = [];

function addFavouritesEvent(){
    var elements = document.getElementsByClassName("favoritosClass");

    for (var i = 0; i < elements.length; i++) {

        elements[i].addEventListener('click', (e) => { //e = event
            
            const imageId = e.target.getAttribute("data-reference-id");
            const imageSrc = document.getElementById(imageId).src;
            
            if (arrayFavorito.includes(imageSrc)) {
                // meGusta.src = "/assets/icon-fav.svg"
                let indice = arrayFavorito.indexOf(imageSrc);
                arrayFavorito.splice(indice, 1);
                e.target.src="/imagenes//icon-fav.svg";
            }
            else {
                arrayFavorito.push(imageSrc);
                e.target.src="/imagenes/icon-fav-active.svg";
            }
            localStorage.setItem("arrayFavorito", JSON.stringify(arrayFavorito));
        });
    }

}

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
//console.log(modoBlack);
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
    enlaces.style.transition = "transform 0.5s ease-in-out"
    abierto = !abierto
}

// CAMBIO X A HAMBURGUESA
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

const imagen = document.getElementById("imagenCarrusel");
const imagen1 = document.getElementById("imagenCarrusel1");
const imagen2 = document.getElementById("imagenCarrusel2");

const favouriteIconImage1 = document.getElementById("fav1");
const favouriteIconImage2 = document.getElementById("fav2");
const favouriteIconImage3 = document.getElementById("fav3");

trendingArray = []

const urlTrendings = fetch ("http://api.giphy.com/v1/gifs/trending?api_key=bev5PXIqefIQlBW4oY690KBimi2IWjOj&limit=12")
.then (param => param.json())
.then (param =>{

    for(let i = 0; i < 12; i++) {
        let imgCarrusel = param.data[i].images.downsized.url;
        trendingArray.push(imgCarrusel);
    }
    imagen.src = trendingArray[0];
    favouriteIconImage1.setAttribute("data-reference-id","imagenCarrusel")
    imagen1.src = trendingArray[1];
    favouriteIconImage2.setAttribute("data-reference-id","imagenCarrusel1")
    imagen2.src = trendingArray[2];
    favouriteIconImage3.setAttribute("data-reference-id","imagenCarrusel2")
    addFavouritesEvent();
});

// LLAMADO A LAS FLECHAS DEL CARROUSEL
let FlechaDerecha = document.getElementById("rightSlider");
let FlechaIzquierda = document.getElementById("leftslider");

// CAMBIAR FOTOS DEL CARROUSEL

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

FlechaDerecha.addEventListener ("mouseover", function () { FlechaDerecha.src="/imagenes/Button-Slider-right-hover.svg" })
FlechaDerecha.addEventListener("mouseleave", function (){ FlechaDerecha.src="/imagenes//Button-Slider-right.svg" })
// flecha izquierda cambio de imagen

FlechaIzquierda.addEventListener ("mouseover", function () {
    FlechaIzquierda.src="/imagenes/button-slider-left-hover.svg"
})

FlechaIzquierda.addEventListener("mouseleave", function (){
    FlechaIzquierda.src="/imagenes/button-slider-left.svg"
})

// BUSCADOR
let barraBusqueda = document.getElementById("search");
let lupaBuscador = document.getElementById("img_lupa");
let barraOpciones = document.getElementById("box-search");
let opcionesP = document.getElementsByClassName("p_opciones");

// CAMBIO DE IMAGEN DE LUPA A X // AGREGAR OPCION DE BUSQUEDA  
barraBusqueda.addEventListener("keyup", function(e){
    if(barraBusqueda.value != ""){
        lupaBuscador.src="/imagenes/close.svg"
        barraOpciones.classList.toggle("oculto");
    }else{
        lupaBuscador.src="/imagenes/icon-search.svg"
        barraOpciones.classList.toggle("oculto")
    }
    //CLICK EN LA X (CAMBIO IMG Y INPUT VACIO)

    busquedaTermino(barraBusqueda.value);
    if(e.keyCode==13){
        busqueda(barraBusqueda.value, 0);
    }

})
lupaBuscador.addEventListener("click", function(){
    barraBusqueda.value = "";
    lupaBuscador.src="/imagenes/icon-search.svg"
})

// URL SERCH
recomendacion = document.getElementById("recomendacion")
recomendacion1 = document.getElementById("recomendacion1")
recomendacion2 = document.getElementById("recomendacion2")
recomendacion3 = document.getElementById("recomendacion3")


function busquedaTermino(valor){
    
    fetch (`http://api.giphy.com/v1/gifs/search?api_key=bev5PXIqefIQlBW4oY690KBimi2IWjOj&q=${valor}&limit=4`)
    .then (param => param.json())
    .then (param =>{ 
        searchArray = [];
        
        for (let i = 0; i < param.data.length && i < 4; i++) {
            let dato = param.data[i].title;
            searchArray.push(dato);
        }
        recomendacion.innerHTML = searchArray[0];
        recomendacion1.innerHTML = searchArray[1];
        recomendacion2.innerHTML = searchArray[2];
        recomendacion3.innerHTML = searchArray[3];
        //console.log(searchArray);
    });
}
let boton = document.createElement("button"); // VAR BOTÓN "VER MAS"!
let arrayBuscados = [];
// AGREGAR GIFS BUSCADOS
function busqueda(valor, offsetValue){
    const limite = offsetValue + cantidadResultadosNuevos;
    arrayBuscados = [];
    fetch(`http://api.giphy.com/v1/gifs/search?api_key=2Yn9FN3BmE8DqIq2KEG6rApYylEX0ZdQ&q=${valor}&limit=${limite}`)
    .then(resp => resp.json())
    .then(resp => {
        offsetVerMas = (resp && resp.data) ? resp.data.length : 0;

        for (let i = 0; i < offsetVerMas; i++) {
            let element = resp.data[i].images.downsized.url;
            arrayBuscados.push(element)
        }

        crearImagenes(arrayBuscados, "div_img_encontradas");
        crearTitulo(valor);
        if(limite == offsetVerMas){
            crearBoton(valor);
        }
        addFavouritesEvent();
    });
  }
    // CREA TÍTULO
  function crearTitulo(value){
    let tituloEncontrado = document.getElementById("titulo_encontrado");
    tituloEncontrado.setAttribute ("class", "titulo_encontrado")
    tituloEncontrado.innerHTML = value;
  }

//   CREA LA IMAGEN LLAMADA DE LA BUSQUEDA
  function crearImagenes(arrayUrl, nombreDiv){
      //let favoritoTrending = document.getElementById("corazonTranding");
      let divNuevo = document.getElementById(nombreDiv)
      divNuevo.innerHTML = "";
      for (let i = 0; i < arrayUrl.length; i++) {
        let divRosa = document.createElement("div")
        let favorito = document.createElement("img")
        let expandir = document.createElement("img")
        let descargar = document.createElement("img")
        let imagenCreada = document.createElement("img")
        const newImageId = "imageId-"+i;
        imagenCreada.setAttribute("id", newImageId)
        let divNuevo1 = document.createElement("div")
        favorito.src="/imagenes//icon-fav.svg";
        favorito.setAttribute('imagenOriginal', arrayUrl[i]);
        favorito.classList.add("favoritosClass");
        favorito.setAttribute("data-reference-id",newImageId)
        expandir.src="/imagenes//icon-max-normal.svg";
        descargar.src="/imagenes//icon-download.svg";
        divRosa.appendChild(favorito);
        divRosa.appendChild(expandir);
        divRosa.appendChild(descargar);
        divRosa.classList.add("div_buscados");
        imagenCreada.src = arrayUrl[i];
        divNuevo1.appendChild(imagenCreada);
        divNuevo1.appendChild(divRosa);
        divNuevo.appendChild(divNuevo1);
        
    }
}
       

//   BOTON
function crearBoton (valor){
    let divBoton = document.getElementById("contain_button");
    boton.setAttribute("class", "button_see_more");
    boton.innerHTML = "Ver Mas";
    divBoton.appendChild(boton);
    boton.addEventListener("click", () =>{ 
        busqueda(valor, offsetVerMas);
    })
}

