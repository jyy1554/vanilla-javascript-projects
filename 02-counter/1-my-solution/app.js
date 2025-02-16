let number = document.getElementById('value').innerHTML + 0;
// .value는 inputs과 같은 form element에만 먹음. innerHTML 써야됨

const counter = document.getElementById('value');
const decreaseBtn = document.querySelector('.decrease');
const resetBtn = document.querySelector('.reset');
const increaseBtn = document.querySelector('.increase');

decreaseBtn.addEventListener('click', () => {
    number--;
    console.log(number);

    changeColor(number);
    counter.textContent = number;
});

resetBtn.addEventListener('click', () => {
    number = 0;
    console.log(number);

    changeColor(number);
    counter.textContent = number;
});

increaseBtn.addEventListener('click', () => {
    number++;
    console.log(number);

    changeColor(number);
    counter.textContent = number;
});

function changeColor(number) {
    if (number < 0) {
        counter.style.color = 'red';
    } else if (number === 0) {
        counter.style.color = 'black';
    } else {
        counter.style.color = 'green';
    }
}