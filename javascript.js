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
const menucontainer=document.querySelector(".menu-container");
let firstmenu=document.querySelector(".first");
let secondmenu=document.querySelector(".second");
menucontainer.addEventListener('scroll',function(event){
  scroll=menucontainer.scrollLeft;
  if (scroll>250) {
      firstmenu.style.transform = 'scale(0.8)'
      firstmenu.style.boxShadow = 'none'
      firstmenu.style.opacity = '0.6'
  }
  else {
     firstmenu.style.transform = 'scale(1.15)'
    firstmenu.style.boxShadow = '0 0 100px black'
    firstmenu.style.opacity = '1'
  }
  if(scroll >250 && scroll < 650 ){
    secondmenu.classList.add('scale-menu');
  }
  else {
    secondmenu.classList.remove('scale-menu');
  }

} );