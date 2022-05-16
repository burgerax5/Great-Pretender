const menuBtn = document.querySelector('.nav-menu-btn')
let menuNav = document.getElementById('mobileNav')
let overlay = document.getElementById('overlay')

let menuOpen = false;
menuBtn.addEventListener('click', () => {
    if (!menuOpen){
        menuBtn.classList.add('open');
        menuNav.style.width = '300px';
        overlay.style.display = 'block';
        menuOpen = true;
    }
    else{
        menuBtn.classList.remove('open');
        menuNav.style.width = '0';
        overlay.style.display = 'none';
        menuOpen = false;
    }
});