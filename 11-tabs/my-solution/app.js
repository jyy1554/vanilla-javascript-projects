const btns = document.querySelectorAll('.tab-btn');
const contents = document.querySelectorAll('.content');

btns.forEach((btn) => {
    // console.log(btn.dataset.id);

    btn.addEventListener('click', (e) => {
        btns.forEach((btn) => {
            btn.classList.remove('active');
        });
        
        btn.classList.add('active');

        for(let i = 0; i < contents.length; i++) {
            if(contents[i].dataset.id === btn.dataset.id) {
                contents[i].classList.add('active');
            } else {
                contents[i].classList.remove('active');
            }
        }
    });
});