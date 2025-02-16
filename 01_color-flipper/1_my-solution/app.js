const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const buttonElement = document.getElementById('btn');
const colorElement = document.querySelector('.color'); // getElementsByClassName 사용불가

buttonElement.addEventListener('click', () => {
    const randomNum = Math.floor(Math.random() * 10 % 4);
    const color = colors[randomNum];

    document.body.style.backgroundColor = color;
    colorElement.innerText = color; 
});