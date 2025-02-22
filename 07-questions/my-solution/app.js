//using selectors inside the element
// traversing the dom
const questons = document.querySelectorAll('.question');
const questionBtns = document.querySelectorAll('.question-btn');

console.log(questionBtns);

// questionBtns[0].addEventListener('click', () => {
//     console.log('click1');

//     questons[0].classList.toggle('show-text');
//     questons[1].classList.remove('show-text');
//     questons[2].classList.remove('show-text');
// });

// questionBtns[1].addEventListener('click', () => {
//     console.log('click2');

//     questons[0].classList.remove('show-text');
//     questons[1].classList.toggle('show-text');
//     questons[2].classList.remove('show-text');
// });

// questionBtns[2].addEventListener('click', () => {
//     console.log('click3');

//     questons[0].classList.remove('show-text');
//     questons[1].classList.remove('show-text');
//     questons[2].classList.toggle('show-text');
// });

for (let i = 0; i < 3; i++) {
    questons[i].addEventListener('click', () => {
        console.log(`click ${i + 1}`);

        for (let j = 0; j < 3; j++) {
            if (j == i) {
                questons[j].classList.toggle('show-text');
            } else {
                questons[j].classList.remove('show-text');
            }
        }
    });
}