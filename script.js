var elem = document.querySelector('.gallery');

document.addEventListener("DOMContentLoaded", () => {
    var masonry = new Masonry( '.gallery', {
        itemSelector: '.gal-item'
    });
});
