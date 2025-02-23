// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************

// ********** close links ************
const toggleBtn = document.querySelector('.nav-toggle');
const linksContainer = document.querySelector('.links-container');

toggleBtn.addEventListener('click', () => {
    console.log('toggle click');
    linksContainer.classList.toggle('show-links');
});
// ********** fixed navbar ************
const nav = document.querySelector('.nav');
const topLink = document.querySelector('.top-link');

window.addEventListener('scroll', () => {
    if(window.scrollY > 140) {
        nav.classList.add('fixed-nav');
        topLink.classList.add('show-link');
    } else {
        nav.classList.remove('fixed-nav');
        topLink.classList.remove('show-link');
    }
});

topLink.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
    });
});

// ********** smooth scroll ************
// select links
const links = document.querySelectorAll('.scroll-link');
// console.log(links);

links.forEach((link) => {
    link.addEventListener('click', () => {
        window.scrollTo({
            top: link.offsetTop - 100,
            behavior: 'smooth'
        });
    });
});
