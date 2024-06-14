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
    const carousels = document.querySelector('.carousels');
    const prevsButton = document.querySelector('.prevs');
    const nextsButton = document.querySelector('.nexts');
  
    let currentIndexs = 0;
  
    prevsButton.addEventListener('click', function () {
      if (currentIndexs > 0) {
        currentIndexs--;
      } else {
        currentIndexs = carousels.children.length - 1;
      }
      updateCarousels();
    });
  
    nextsButton.addEventListener('click', function () {
      if (currentIndexs < carousels.children.length - 1) {
        currentIndexs++;
      } else {
        currentIndexs = 0;
      }
      updateCarousels();
    });
  
    function updateCarousels() {
      const transformValues = -currentIndexs * 100 + '%';
      carousels.style.transform = 'translateX(' + transformValues + ')';
    }
  });
