const toggleBtn = document.querySelector('.sidebar-toggle');
// const sidebarToggle = document.querySelector('.sidebar-toggle');
const sidebar = document.querySelector('.sidebar');
const closeBtn = document.querySelector('.close-btn');  

toggleBtn.addEventListener('click', () => {
    sidebar.classList.toggle('show-sidebar');
    console.log('sidebar click');

    // if(sidebar.classList.contains('show-sidebar')) {
    //     sidebar.classList.remove('show-sidebar');
    // } else {
    //     sidebar.classList.add('show-sidebar');
    // }
});

closeBtn.addEventListener('click', () => {
    sidebar.classList.toggle('show-sidebar');
    console.log('close button click');
});