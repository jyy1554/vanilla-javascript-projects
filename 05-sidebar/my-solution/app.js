const sidebarToggle = document.querySelector('.sidebar-toggle');
const sidebar = document.querySelector('.sidebar');
const closeBtn = document.querySelector('.close-btn');  

sidebarToggle.addEventListener('click', () => {
    sidebar.classList.toggle('show-sidebar');
    console.log('sidebar click');
});

closeBtn.addEventListener('click', () => {
    sidebar.classList.toggle('show-sidebar');
    console.log('close button click');
});