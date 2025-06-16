const gallery = document.querySelector('.menu-gallery');
let scrollAmount = 0;

setInterval(() => {
  gallery.scrollBy({
    left: 320,
    behavior: 'smooth'
  });

  scrollAmount += 320;

  // Reset scroll if at end
  if (scrollAmount >= gallery.scrollWidth - gallery.clientWidth) {
    scrollAmount = 0;
    gallery.scrollTo({ left: 0, behavior: 'smooth' });
  }
}, 3000); // every 3 seconds
