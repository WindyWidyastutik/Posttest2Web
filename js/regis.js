const daftar = document.getElementById("daftar");
daftar.onclick = regis;


function regis(e) {
    e.preventDefault();

    const nama = document.getElementById("daf_nama").value;
    const pass = document.getElementById("daf_pass").value;
    const email = document.getElementById("daf_email").value;


    localStorage.setItem("Nama", nama);
    localStorage.setItem("Password", pass);
    localStorage.setItem("Email", email);

    // if()
    alert("berhasil daftar");
    window.location = "login.html";

}


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