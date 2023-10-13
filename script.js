let searchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('.search-bar-container');
let formBtn = document.querySelector('#login-btn');
let loginForm = document.querySelector('.login-form-container');
let formClose = document.querySelector('#form-close');
let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
let videoBtn = document.querySelectorAll('.vid-btn');


 window.onscroll = () =>{
    searchBtn.classList.remove('fa-times');
 searchBar.classList.remove('active');
 menu.classList.remove('fa-times');
 navbar.classList.remove('active');
 loginForm.classList.remove('active');
 }

menu.addEventListener('click', ()=>{
 menu.classList.toggle('fa-times');
 navbar.classList.toggle('active');
});


searchBtn.addEventListener('click', ()=>{
 searchBtn.classList.toggle('fa-times');
 searchBar.classList.toggle('active');
});
//serach bar ko lagi gareko ho utha css bata .active bata dom  



formBtn.addEventListener('click', ()=>{
 loginForm.classList.add('active');
});

formClose.addEventListener('click', ()=>{
 loginForm.classList.remove('active');
});
//form ko lagi gareko on home screen 

videoBtn.forEach(btn =>{
btn.addEventListener('click', ()=>{
document.querySelector('.controls .active').classList.remove('active');
btn.classList.add('active');
let src = btn.getAttribute('data-src');
document.querySelector('#video-slider').src = src;
});
});
//video ko lagi on home screen video slider 

var swiper = new Swiper(".review-silder", {
   spaceBetween:20,
   loop:true,
   autoplay: {
    delay: 2500,
    disableOnInteraction: false,
   },
   breakpoints: {
    640: {
        slidesPerView: 1,
    },
    768: {
        slidesPerView: 2,
    },
    1024: {
        slidesPerView:3,
    },
   },
  });
//testimonials ko lagi slide js 
var swiper = new Swiper(".brand-silder", {
   spaceBetween:20,
   loop:true,
   autoplay: {
    delay: 2500,
    disableOnInteraction: false,
   },
   breakpoints: {
    640: {
        slidesPerView: 1,
    },
    768: {
        slidesPerView: 2,
    },
    1024: {
        slidesPerView:3,
    },
   },
  });
// need to fix it brand section ko lagi
