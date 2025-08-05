function moveCarousel(button, direction) {
  const container = button.parentElement.querySelector('.carousel-track');
  const itemWidth = container.querySelector('.carousel-item').offsetWidth + 20; // card width + gap
  const scrollAmount = itemWidth * direction;
  container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
}