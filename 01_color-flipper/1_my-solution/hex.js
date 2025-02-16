const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const buttonElement = document.getElementById('btn');
const colorElement = document.querySelector('.color');

buttonElement.addEventListener('click', () => {
    const color = randomColor();

    document.body.style.backgroundColor = color;
    colorElement.innerText = color;
});

function randomColor() {
    let hexColor = '#';
    let randomNum;

    for (let i=0; i < 6; i++) {
        randomNum = Math.floor(Math.random() * 100 % 16);
        hexColor += hex[randomNum];
    }

    return hexColor;
}