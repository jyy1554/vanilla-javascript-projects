const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
//#f1f5f8

const buttonElement = document.getElementById('btn');
const colorElement = document.querySelector('.color');

buttonElement.addEventListener('click', () => {
    let hexColor = '#';

    for (let i=0; i < 6; i++) {
        hexColor += hex[getRandomNumber()];
    }

    colorElement.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
});

function getRandomNumber() {
    return Math.floor(Math.random() * hex.length);
}

// function randomColor() {
//     let hexColor = '#';
//     let randomNum;

//     for (let i=0; i < 6; i++) {
//         randomNum = Math.floor(Math.random() * 100 % 16);
//         hexColor += hex[randomNum];
//     }

//     return hexColor;
// }