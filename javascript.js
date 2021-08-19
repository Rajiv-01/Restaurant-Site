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

//scrolling of menu book
const menuslides=document.querySelector('.menu-slides')
const menucontainer=document.querySelector(".menu-container");
// for menu book
let firstmenu=document.querySelector(".first");
let secondmenu=document.querySelector(".second");
let thirdmenu=document.querySelector(".third");
let fourthmenu=document.querySelector(".fourth");
let fifthmenu=document.querySelector(".five");
let sixthmenu=document.querySelector(".six");
let seventhmenu=document.querySelector(".seven");
let eightmenu=document.querySelector(".eight");
let ninthmenu=document.querySelector(".nine");
let tenthmenu=document.querySelector(".ten");
let eleventhmenu=document.querySelector(".eleven");
// for small slide
let special=document.querySelector(".special");
let combo=document.querySelector(".combos");
let indian=document.querySelector(".indian");
let seafood=document.querySelector(".seafood");
let mexican=document.querySelector(".mexican");
let chinese=document.querySelector(".chinese");
let italian=document.querySelector(".italian");
let sweet=document.querySelector(".sweet");
let beverages=document.querySelector(".beverages");
let bakery=document.querySelector(".bakery");
let soup=document.querySelector(".soups");
//scrolling of menubook
menucontainer.addEventListener('scroll',function(event){
  scroll=menucontainer.scrollLeft;
  if (scroll>200) {
      firstmenu.style.boxShadow = 'none'
      firstmenu.style.opacity = '0.6'
      firstmenu.style.transform= 'perspective(1000px) rotate3d(0, 1, 0, 30deg) scale(0.8)';
      special.classList.remove('blured','topshift')
  }
  else {
     firstmenu.style.transform = 'scale(1.15)'
    firstmenu.style.boxShadow = '5px 10px 50px black'
    firstmenu.style.opacity = '1'
    special.classList.add('blured')
  }
  if(scroll >200 && scroll <=700 ){
    secondmenu.classList.add('scale-menu');
    combo.classList.add('blured')
  }
  else {
    secondmenu.classList.remove('scale-menu');
    combo.classList.remove('blured')
  }
  if(scroll >700 && scroll <=1100 ){
    thirdmenu.classList.add('scale-menu');
    indian.classList.add('blured')
  }
  else {
    thirdmenu.classList.remove('scale-menu');
    indian.classList.remove('blured')
  }
  if(scroll >1100 && scroll <= 1500 ){
    fourthmenu.classList.add('scale-menu');
    seafood.classList.add('blured')
  }
  else {
    fourthmenu.classList.remove('scale-menu');
    seafood.classList.remove('blured')
  }
  if(scroll >1500 && scroll <= 1900 ){
    fifthmenu.classList.add('scale-menu');
    mexican.classList.add('blured')
  }
  else {
    fifthmenu.classList.remove('scale-menu');
    mexican.classList.remove('blured')
  }
  if(scroll >1900 && scroll <= 2300 ){
    sixthmenu.classList.add('scale-menu');
    chinese.classList.add('blured')
  }
  else {
    sixthmenu.classList.remove('scale-menu');
    chinese.classList.remove('blured')
  }
  if(scroll >2300 && scroll <= 2700 ){
    seventhmenu.classList.add('scale-menu');
    italian.classList.add('blured')
  }
  else {
    seventhmenu.classList.remove('scale-menu');
    italian.classList.remove('blured')
  }
  if(scroll >2700 && scroll <= 3300 ){
    eightmenu.classList.add('scale-menu');
    sweet.classList.add('blured')
  }
  else {
    eightmenu.classList.remove('scale-menu');
    sweet.classList.remove('blured')
  }
  if(scroll >3300 && scroll <= 3700 ){
    ninthmenu.classList.add('scale-menu');
    beverages.classList.add('blured')
  }
  else {
    ninthmenu.classList.remove('scale-menu');
    beverages.classList.remove('blured')
  }
  if(scroll >3700 && scroll <= 4100 ){
    tenthmenu.classList.add('scale-menu');
    bakery.classList.add('blured')
  }
  else {
    tenthmenu.classList.remove('scale-menu');
    bakery.classList.remove('blured')
  }
  if(scroll >4100 && scroll <= 4500 ){
    eleventhmenu.classList.add('scale-menu');
    soup.classList.add('blured')
  }
  else {
    eleventhmenu.classList.remove('scale-menu');
    soup.classList.remove('blured')
  }
  if (scroll>2700) {
    // statement\
    menuslides.scrollLeft=1000;
  }
  else {
    menuslides.scrollLeft=-1000;
  }

} );