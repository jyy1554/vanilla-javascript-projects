/**
 * using selectors inside the element
 */
const questions = document.querySelectorAll('.question');

questions.forEach((question) => {
    const btn = question.querySelector('.question-btn');
    // console.log(btn);

    btn.addEventListener('click', () => {
        questions.forEach((item) => {   // 괄호 안에 question이라고 쓰면 안됨. 위와 중복됨
            if (item !== question) {
                item.classList.remove('show-text');
            }
        });
        
        question.classList.toggle('show-text');
    });
});


/**
 * traversing the dom
 */
// const btns = document.querySelectorAll('.question-btn');

// console.log(btns);

// btns.forEach((btn) => {
//     btn.addEventListener('click', (e) => {
//         console.log(e.currentTarget.parentElement.parentElement);
        
//         const question = e.currentTarget.parentElement.parentElement;
//         question.classList.toggle('show-text');
//     });
// })