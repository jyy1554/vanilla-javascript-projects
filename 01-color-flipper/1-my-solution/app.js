const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const buttonElement = document.getElementById('btn');
const colorElement = document.querySelector('.color'); // getElementsByClassName 사용불가

buttonElement.addEventListener('click', () => {
    // get random number between 0-3
    // const randomNum = Math.floor(Math.random() * 10 % 4);
    const randomNumber = getRandomNumber();
    console.log(randomNumber);

    document.body.style.backgroundColor = colors[randomNumber];
    colorElement.innerText = colors[randomNumber]; 
});

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}