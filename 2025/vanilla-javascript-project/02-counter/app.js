// set initial count
let count = 0;
// let number = document.getElementById('value').innerHTML + 0; // .value는 inputs과 같은 form element에만 먹음. innerHTML 써야됨

// select value and buttons
const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');
// const counter = document.getElementById('value');
// const decreaseBtn = document.querySelector('.decrease');
// const resetBtn = document.querySelector('.reset');
// const increaseBtn = document.querySelector('.increase');

btns.forEach((btn) => {
    // console.log(btn);
    btn.addEventListener('click', (e) => {
        const styles = e.currentTarget.classList;

        if(styles.contains('decrease')) {
            count--;
        } else if(styles.contains('increase')) {
            count++;
        } else {
            count = 0;
        }

        if(count > 0) {
            value.style.color = 'green';
        } else if(count < 0) {
            value.style.color = 'red';
        } else {
            value.style.color = '#222';
        }
        
        value.textContent = count;
    });
});

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