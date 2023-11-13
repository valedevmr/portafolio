const menuHmburguesa = document.querySelector(".menuH");
const menuli =  document.querySelector(".menu");
const anio = document.querySelector(".anio");
/**
 * cuando el documento esta cargado completamente la animacion del nombre en la foto de perfil se ejecuta textAnimation y fecha
 */

document.addEventListener('DOMContentLoaded', (event) => {
    textAnimacion();
    fecha();
});

/**
 * evento paara detectar el menu hamburguesa
*/
menuHmburguesa.addEventListener("click",()=>{
    menuli.classList.toggle("open");
    
})
/**
 * detecta el ul con la class .menu y por medio de delegacion d evento  detecta en que elemento esta dando click
 */
menuli.addEventListener("click",e=>{
    
    if(e.target.classList.contains("inicio")){
        menuli.classList.toggle("open");
    }
    else if(e.target.classList.contains("portafolio")){
        menuli.classList.toggle("open");
    }
    else if(e.target.classList.contains("skills")){
        menuli.classList.toggle("open");
    }
    else if(e.target.classList.contains("contacto")){
        menuli.classList.toggle("open");
    }
})
/**
 * por medio del evento scroll detectamos si el menu a bajado entonces cambiara de color el fondo del menu
 */
window.addEventListener("scroll",e=>{
    e.preventDefault();
    const scroll = window.scrollY;
    const nav = document.querySelector(".menu");
    
    if(scroll>80){
        document.querySelector("header").style.backgroundColor="rgba(0, 0, 19)";
        document.querySelector("header").style.boxShadow="0px 3px 6px rgba(99, 99, 99, 0.76)";
        nav.classList.remove("menucolorD");
        nav.classList.add("menucolordark");
        
        
    }
    else{
        document.querySelector("header").style.backgroundColor="transparent";
        document.querySelector("header").style.boxShadow="none";
        nav.classList.remove("menucoldark");
        nav.classList.add("menucolorD");
    
    }
   
});

/**
 * uso de la libreria typed.js para animar el areglo de texto que estara cambiando cada 2 segundos
 */
function textAnimacion(){
    var typed = new Typed('.texto', {
        strings: ['Valente Montero Rosales', 
                'Desarrollador JR',
                "Tecnologías Front End",
                "Tecnologías Back End"],
                
        smartBackspace: true,
        typeSpeed: 120,
        startDelay: 1350,
        backDelay: 2000,
        loop:Infinity // Default value
    });
}

/**
 * funcion para agregar fecha a el footer
 */
function fecha(){
    
    anio.innerHTML = " "+new Date().getFullYear()+" ";
}