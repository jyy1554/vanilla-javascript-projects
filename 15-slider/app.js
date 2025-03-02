let pageNum = 0;

const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prevBtn');
const nextBtn = document.querySelector('.nextBtn');

prevBtn.addEventListener('click', () => {
    // console.log('click prev');
    pageNum--;
    showButtons(pageNum);

    slides.forEach((slide) => {
        slide.style.transform = `translateX(${-100 * pageNum}%)`;
    });
});

nextBtn.addEventListener('click', () => {
    // console.log('click next');
    pageNum++;
    showButtons(pageNum);

    slides.forEach((slide) => {
        slide.style.transform = `translateX(${-100 * pageNum}%)`;
    });  
});

function showButtons() {
    if(pageNum >= slides.length - 1) {
        pageNum = slides.length - 1;
        nextBtn.style.display = 'none';
    } else if(pageNum <= 0) {
        pageNum = 0;
        prevBtn.style.display = 'none';
    } else {
        nextBtn.style.display = 'block';
        prevBtn.style.display = 'block';
    }
}