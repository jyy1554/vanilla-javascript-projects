// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************
const date = document.getElementById('date');

date.innerHTML = new Date().getFullYear();

// ********** close links ************
const navToggle = document.querySelector('.nav-toggle');
const linksContainer = document.querySelector('.links-container');
const links = document.querySelector('.links');

navToggle.addEventListener('click', () => {
    // linksContainer.classList.toggle('show-links');   // 이렇게 써도 되나. link가 늘어나거나 줄어들면 css를 또 변경해줘야 됨 (하드코딩)
    
    // links는 dynamic하기 때문에, dynamic하게 변경되는 links에 유연하게 대처하기 위한 코드
    const containerHeight = linksContainer.getBoundingClientRect().height;
    console.log(containerHeight); // 0 나옴. 왜냐하면 CSS에서 links-container의 height를 0으로 해놓았어서

    const linksHeight = links.getBoundingClientRect().height;
    console.log(linksHeight);

    if(containerHeight === 0) {
        linksContainer.style.height = `${linksHeight}px`;
    } else {
        linksContainer.style.height = 0;
    }
});

// ********** fixed navbar ************
const navbar = document.getElementById('nav');
const topLink = document.querySelector('.top-link');

window.addEventListener('scroll', () => {
    // console.log(window.scrollY);

    const scrollHeight = window.scrollY;
    const navHeight = navbar.getBoundingClientRect().height;

    if(scrollHeight > navHeight) {
        navbar.classList.add('fixed-nav');
    } else {
        navbar.classList.remove('fixed-nav');
    }

    if(scrollHeight > 500) {    // 500은 임의로 넣은 값
        topLink.classList.add('show-link');
    } else {
        topLink.classList.remove('show-link');
    }
});

// ********** smooth scroll ************
// select links
const scrollLinks = document.querySelectorAll('.scroll-link');
// console.log(links);

scrollLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
        // prevent default
        e.preventDefault(); // link에 따라 스크롤이 함부로 움직이지 못하게 함

        // navigate to specific spot
        const id = e.currentTarget.getAttribute('href').slice(1); // 1부터 뒤에 다 남김. #home -> home
        console.log(id);
        const element = document.getElementById(id);
        // calculate the heights
        const navHeight = navbar.getBoundingClientRect().height;
        const containerHeight = linksContainer.getBoundingClientRect().height;
        const fixedNav = navbar.classList.contains('fixed-nav');
        let position = element.offsetTop - navHeight;

        if(!fixedNav) {
            position = position - navHeight;
        }

        if(navHeight > 82) {
            position = position + containerHeight;
        }
        console.log(position);

        window.scrollTo({
            left: 0,
            top: position,
        });

        linksContainer.style.height = 0; // 자동 스크롤 시 자동으로 닫히도록
    });
});
