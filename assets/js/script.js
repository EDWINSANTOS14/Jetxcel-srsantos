
 // Alternar el menú
 function toggleMenu() {
    const menu = document.querySelector('nav');
    const navResponsive = document.querySelector('.nav-responsive');
    const closeBtn = document.querySelector('.close-btn');
    
    // Solo activar el menú en pantallas móviles
    if (window.innerWidth <= 768) {
        // Alternar la clase 'responsive' del menú
        menu.classList.toggle('responsive');
        navResponsive.classList.toggle('active');
        
        // Mostrar el botón de cerrar ('x') si el menú está abierto
        closeBtn.style.display = menu.classList.contains('responsive') ? 'block' : 'none';
    }
}

// Cerrar el menú
function closeMenu() {
    const menu = document.querySelector('nav');
    const navResponsive = document.querySelector('.nav-responsive');
    const closeBtn = document.querySelector('.close-btn');
    
    // Solo cerrar el menú y ocultar el botón de cerrar en pantallas móviles
    if (window.innerWidth <= 768) {
        menu.classList.remove('responsive');
        navResponsive.classList.remove('active');
        closeBtn.style.display = 'none'; // Ocultar el botón de cerrar
    }
}

// Asegurarse de que el botón de cerrar esté oculto en pantallas grandes al cambiar el tamaño de la ventana
window.addEventListener('resize', function() {
    const closeBtn = document.querySelector('.close-btn');
    const menu = document.querySelector('nav');
    
    if (window.innerWidth > 768) {
        // Ocultar el botón de cerrar y eliminar cualquier clase 'responsive' en pantallas grandes
        closeBtn.style.display = 'none';
        menu.classList.remove('responsive');
    }
});


// SECCIÓN DE + DE 1000 TAZAS DE CAFÉ
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

// Función para pausar el slider en hover
function pauseSlides() {
    clearTimeout(slideInterval);
}

// Función para reanudar el slider después de pausar
function resumeSlides() {
    slideInterval = setTimeout(showSlides, 7000);
}

// Agregar eventos de hover para pausar y reanudar el slider
document.querySelectorAll('.slide').forEach(slide => {
    slide.addEventListener('mouseenter', pauseSlides);
    slide.addEventListener('mouseleave', resumeSlides);
});

// Inicializar el slider
showSlides();
