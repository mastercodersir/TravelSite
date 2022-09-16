//swiper
var swiper = new Swiper(".mySwiper", {
        speed: 600,
        parallax: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
      },
  });
//BURGER MENU 
$(document).ready(function(){
  $('.sidebarbtn').click(function(){
      $('.sidebar').toggleClass('active');
      $('.sidebarbtn').toggleClass('toggle');
  })
})