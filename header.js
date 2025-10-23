
window.addEventListener('scroll', function() {
  const slider = document.getElementById('parallaxSlider');
  const scrollPosition = window.pageYOffset;
  const speedFactor = 0.3; 
  const yOffset = scrollPosition * speedFactor;
  slider.style.transform = `translate3d(0px, ${-yOffset}px, 0px)`;
});
