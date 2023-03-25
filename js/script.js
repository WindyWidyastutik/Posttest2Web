const navbarNav = document.querySelector('.navbar-nav');
document.querySelector('#menu').onclick = () =>{
    navbarNav.classList.toggle('active');
};

//hilangin menu klik sembarang//
const menu = document.querySelector('#menu');

document.addEventListener('click', function(e){
    if(!menu.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
})