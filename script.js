document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.section__concepto_img img');
  
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateX(0)';
          entry.target.style.transition = 'all 0.5s ease-in-out';
          observer.unobserve(entry.target); // Deja de observar después de que la imagen haya aparecido
        }
      });
    }, {
      threshold: 0.1
    });
  
    images.forEach((img, index) => {
      img.style.opacity = '0';  
      img.style.transform = index % 2 === 0 ? 'translateX(-50%)' : 'translateX(50%)'; // Diferente dirección
      observer.observe(img);  // Observa cada imagen
    });
  });
  

  //Proyectos

  document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.box-img img');
  
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          entry.target.style.transition = 'all 0.8s ease-in-out';  // Suavidad de la animación
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1
    });
  
    images.forEach(img => {
      img.style.opacity = '0';  // Oculto inicialmente
      img.style.transform = 'translateY(20px)';  // Comienza un poco desplazada hacia abajo
      observer.observe(img);
    });
  });
  

  // menu hamburguesa 
// Selecciona los elementos del DOM
const hamburger = document.querySelector('.hamburger');
const closeBtn = document.querySelector('.close');
const navLinks = document.querySelector('.nav-links');

// Evento para el menú hamburguesa
hamburger.addEventListener('click', () => {
    navLinks.classList.add('active');     // Muestra el menú
    hamburger.style.display = 'none';     // Oculta el ícono de hamburguesa
    closeBtn.style.display = 'block';     // Muestra el ícono de cerrar (X)
});

// Evento para el botón de cerrar
closeBtn.addEventListener('click', () => {
    navLinks.classList.remove('active');  // Esconde el menú
    closeBtn.style.display = 'none';      // Oculta el ícono de cerrar (X)
    hamburger.style.display = 'block';    // Muestra el ícono de hamburguesa
});

//**MODAL */
// Selecciona el modal y otros elementos
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("imgInModal");
const captionText = document.getElementById("caption");
const close = document.querySelector('.close-modal');
const images = document.querySelectorAll(".modal-img");

let currentIndex = 0; // Índice actual de la imagen

// Función para mostrar la imagen en el modal
function showModal(index) {
    modal.style.display = "block";
    modalImg.src = images[index].src;
    currentIndex = index; // Actualiza el índice
    document.body.classList.add('no-scroll'); // Deshabilita el scroll
}

// Función para cerrar el modal
function closeModal() {
    modal.style.display = "none";
    document.body.classList.remove('no-scroll'); // Habilita el scroll
}

// Agrega eventos a cada imagen
images.forEach((img, index) => {
    img.addEventListener('click', () => showModal(index));
});

// Cierra el modal cuando se hace clic en la 'X'
close.onclick = closeModal;

// Cierra el modal al hacer clic fuera de la imagen
modal.onclick = function(e) {
    if (e.target !== modalImg && e.target !== prevBtn && e.target !== nextBtn) {
        closeModal();
    }
};

// Funciones para navegar entre imágenes
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

prevBtn.addEventListener('click', (e) => {
    e.stopPropagation(); // Evita que el clic en la flecha cierre el modal
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
    showModal(currentIndex);
});

nextBtn.addEventListener('click', (e) => {
    e.stopPropagation(); // Evita que el clic en la flecha cierre el modal
    currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
    showModal(currentIndex);
});
