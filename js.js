document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.querySelector('.carousel');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
  
    let currentIndex = 0;
  
    prevButton.addEventListener('click', function () {
      if (currentIndex > 0) {
        currentIndex--;
      } else {
        currentIndex = carousel.children.length - 1;
      }
      updateCarousel();
    });
  
    nextButton.addEventListener('click', function () {
      if (currentIndex < carousel.children.length - 1) {
        currentIndex++;
      } else {
        currentIndex = 0;
      }
      updateCarousel();
    });
  
    function updateCarousel() {
      const transformValue = -currentIndex * 100 + '%';
      carousel.style.transform = 'translateX(' + transformValue + ')';
    }
  });

  document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.querySelector('.carousel2');
    const prevButton = document.querySelector('.prev2');
    const nextButton = document.querySelector('.next2');
  
    let currentIndex = 0;
  
    prevButton.addEventListener('click', function () {
      if (currentIndex > 0) {
        currentIndex--;
      } else {
        currentIndex = carousel.children.length - 1;
      }
      updateCarousel();
    });
  
    nextButton.addEventListener('click', function () {
      if (currentIndex < carousel.children.length - 1) {
        currentIndex++;
      } else {
        currentIndex = 0;
      }
      updateCarousel();
    });
  
    function updateCarousel() {
      const transformValue = -currentIndex * 100 + '%';
      carousel.style.transform = 'translateX(' + transformValue + ')';
    }
  });
  