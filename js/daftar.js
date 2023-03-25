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

const nama = localStorage.getItem("Nama");
const tampil = document.getElementById("tampil");
tampil.innerHTML = nama;

const daftar = document.getElementById("daftar");
daftar.onclick = saveReservasi;

function saveReservasi(){
    let checkfasilitas = [];
    let fasilitas = document.getElementById("fasilitas");
    for (let i=0; i < fasilitas.length; i++){
        if (fasilitas[i].checked == true){
            checkfasilitas.push(fasilitas[i].value);
        }
    }

    const nama = document.getElementById("nama").value;
    const email = document.getElementById("email").value;
    const hp = document.getElementById("hp").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;
    const room = document.getElementById("room").value;
    
    const lantai = document.getElementById("lantai").value;
    const note = document.getElementById("note").value;

    const reservasi = {nama, email, hp, date, time, room, fasilitas , lantai, note}

    sessionStorage.setItem("reservasi", JSON.stringify(reservasi));

    alert("Reservasi Berhasil");
}

