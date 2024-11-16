function updatemenu() {
    if (document.getElementById('responsive-menu').checked == true) {
      document.getElementById('menu').style.borderBottomRightRadius = '0';
      document.getElementById('menu').style.borderBottomLeftRadius = '0';
    }else{
      document.getElementById('menu').style.borderRadius = '20px';
    }
  }
  let currentIndex = 0;

  function showSlide(index) {
      const slides = document.querySelectorAll(".slide");
      if (index >= slides.length) {
          currentIndex = 0;
      } else if (index < 0) {
          currentIndex = slides.length - 1;
      } else {
          currentIndex = index;
      }
  
      // Muestra la diapositiva actual
      slides.forEach((slide, i) => {
          slide.classList.remove("active");
          if (i === currentIndex) {
              slide.classList.add("active");
          }
      });
  
      // Mueve el contenedor de diapositivas
      document.querySelector(".slides").style.transform = `translateX(-${currentIndex * 100}%)`;
  }
  
  function changeSlide(step) {
      showSlide(currentIndex + step);
  }
  
  // Cambia la imagen automáticamente cada 5 segundos
  setInterval(() => {
      changeSlide(1);
  }, 5000);
  