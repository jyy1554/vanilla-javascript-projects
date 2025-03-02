// MDN
// The DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading.
// The load event is fired when the whole page has loaded, including all dependent resources such as stylesheets and images.

const btn = document.querySelector('.switch-btn');
const video = document.querySelector('.video-container');
const preloader = document.querySelector('.preloader');

btn.addEventListener('click', () => {
    btn.classList.toggle('slide');

    if(btn.classList.contains('slide')) {
        video.pause();
    } else {
        video.play();
    }
});

// preloader
window.addEventListener('load', () => { // 웹페이지의 로드가 완료되었을때 (문서의 모든 콘텐츠가 로드된 후 실행). DOMContentLoaded는 DOM 트리가 완성되자마자 실행
    preloader.remove('hide-preloader');
});