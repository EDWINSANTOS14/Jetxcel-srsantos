

let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("photoshop");
        habilidades[3].classList.add("wordpress");
        habilidades[4].classList.add("drupal");
        habilidades[5].classList.add("comunicacion");
        habilidades[6].classList.add("trabajo");
        habilidades[7].classList.add("creatividad");
        habilidades[8].classList.add("dedicacion");
        habilidades[9].classList.add("proyect");
    }
}


//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
} 




let slideIndex = 0;
let slideInterval;
showSlides();

function showSlides() {
    let slides = document.querySelectorAll('.slide');
    let dots = document.querySelectorAll('.dot');
    
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; // Ocultar todas las diapositivas
    }
    
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(' active', '');
    }
    
    slides[slideIndex - 1].style.display = "flex"; // Mostrar la diapositiva actual
    slides[slideIndex - 1].classList.add('zoom-animation');
    dots[slideIndex - 1].className += " active";
    
    clearTimeout(slideInterval);
    slideInterval = setTimeout(showSlides, 7000); // Cambiar la diapositiva cada 7 segundos
}

function currentSlide(n) {
    slideIndex = n - 1; // Ajustar el índice para que coincida con la diapositiva correcta
    let slides = document.querySelectorAll('.slide');
    let dots = document.querySelectorAll('.dot');
    
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; // Ocultar todas las diapositivas
    }
    
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(' active', '');
    }
    
    slides[slideIndex].style.display = "flex"; // Mostrar la diapositiva actual
    slides[slideIndex].classList.add('slide-in-animation');
    dots[slideIndex].className += " active";
    
    clearTimeout(slideInterval);
    slideInterval = setTimeout(showSlides, 7000); // Reiniciar el temporizador de las diapositivas
}

// SECCION DE + DE 1000 TAZAS DE CAFE
document.addEventListener("DOMContentLoaded", function() {
    const interests = document.querySelectorAll('.interes');

    const observerOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    interests.forEach(interest => {
        observer.observe(interest);
    });
});