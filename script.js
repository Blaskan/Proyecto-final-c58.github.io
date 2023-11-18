const carouselContainer = document.querySelector('.carousel');
let currentIndex = 0;

function showImage(index) {
  const newPosition = -index * 100 + '%';
  carouselContainer.style.transform = `translateX(${newPosition})`;
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % 2;
  showImage(currentIndex);
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + 4) % 4;
  showImage(currentIndex);
}

setInterval(nextSlide, 3000);
