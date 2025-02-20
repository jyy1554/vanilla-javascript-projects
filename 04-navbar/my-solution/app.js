// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

const navButton = document.querySelector('.nav-toggle');
const menuWindow = document.querySelector('.links');

navButton.addEventListener('click', () => {

    if(navButton.classList.toggle('c')) {
        menuWindow.classList.add('show-links');
    } else {
        menuWindow.classList.remove('show-links');
    }
    
});