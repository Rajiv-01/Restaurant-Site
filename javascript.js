// Hanburger icon 

const menuBtn = document.querySelector('.hamburger');
let tophead = document.querySelector('.top-header');
let menubar = document.querySelector('#menu-bar');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtn.classList.add('open');
    menuOpen = true;
    tophead.style.top = "40px";
    menubar.style.transform = "translateY(0px)";
  } else {
    menuBtn.classList.remove('open');
    menuOpen = false;
    tophead.style.top = "-60px";
    menubar.style.transform = "translateY(-30px)";
  }
});