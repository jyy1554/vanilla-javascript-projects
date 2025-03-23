const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prevBtn');
const nextBtn = document.querySelector('.nextBtn');

slides.forEach((slide, index) => {
    slide.style.left = `${index * 100}%`;
});

let counter = 0;

nextBtn.addEventListener('click', () => {
    // console.log('click next');
    counter++;
    carousel();
});

prevBtn.addEventListener('click', () => {
    // console.log('click prev');
    counter--;
    carousel();
});

function carousel() {
    // working with slides
    // if (counter === slides.length) {
    //     counter = 0;
    // }
    // if (counter < 0) {
    //     counter = slides.length - 1;
    // }

    // working with buttons
    if (counter < slides.length - 1) {
        nextBtn.style.display = 'block';
    } else {
        nextBtn.style.display = 'none';
    }

    if (counter > 0) {
        prevBtn.style.display = 'block';
    } else {
        prevBtn.style.display = 'none';
    }

    slides.forEach((slide) => {
        slide.style.transform = `translateX(-${counter * 100}%)`;
    });  
}

// 처음 로딩 시 prevBtn 안보이게 하려고
prevBtn.style.display = 'none';