let navlist = document.querySelector(".nav-list");
let button = document.querySelector(".toggle-btn");
let button_close = document.querySelector(".toggle-button-container2");
let body = document.querySelector("body");

   button.addEventListener("click", function(){
    navlist.classList.toggle("open");
    button.style.display = "none";
    button_close.style.display = "flex";
    body.style.backgroundColor = "rgba(228, 227, 227, 0.897)";
   });

   button_close.addEventListener("click", function(){
     navlist.classList.remove("open");
     button.style.display = "flex";
     button_close.style.display = "none";
     body.style.backgroundColor = "";
   })

// swaiper js
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 60,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints:{
    0:{
      slidesPerView: 1,
    },
    520:{
      slidesPerView: 2,
    },
    950:{
      slidesPerView: 3,
    },
  },
});