// MDN
// The DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading.
// The load event is fired when the whole page has loaded, including all dependent resources such as stylesheets and images.

const btn = document.querySelector('.switch-btn');
const preload = document.querySelector('.preloader');
const video = document.querySelector('.video-container');

window.addEventListener('DOMContentLoaded', () => {

});

btn.addEventListener('click', () => {
    if(!video.classList.contains('stop')) {
        video.pause();
    } else {
        video.play();
    }

    video.classList.toggle('stop');
});