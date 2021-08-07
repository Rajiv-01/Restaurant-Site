// Hanburger icon 

const menuBtn = document.querySelector('.hamburger');
let tophead = document.querySelector('.top-header');
let menubar = document.querySelector('#menu-bar');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtn.classList.add('open');
    menuOpen = true;
    tophead.style.transform = 'translateY(0px)'
    tophead.style.background = 'rgba(0,76,71,0.9)';
    menubar.style.transform = "translateY(0px)";
  } else {
    menuBtn.classList.remove('open');
    menuOpen = false;
    tophead.style.transform = 'translateY(-100px)';
    tophead.style.background = 'transparent';
    menubar.style.transform = "translateY(-40px)";
  }
});