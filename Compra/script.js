const zoomImage = document.getElementById('zoom-image');
const container = document.querySelector('.zoom-container');

container.addEventListener('mousemove', function(event) {
  const { left, top, width, height } = this.getBoundingClientRect();
  const x = (event.clientX - left) / width;
  const y = (event.clientY - top) / height;

  zoomImage.style.transformOrigin = `${x * 100}% ${y * 100}%`;
});

container.addEventListener('mouseenter', function() {
  zoomImage.classList.add('zoomed');
});

container.addEventListener('mouseleave', function() {
  zoomImage.classList.remove('zoomed');
});
