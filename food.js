var swiper = new Swiper('.food-slider', {
    grabCursor:true,
    loop:true,
    centerdSlides:true,
    pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
    breakpoints: {
    0: {
      slidesPerView: 1,
    },
    700: {
      slidesPerView: 2,
    },
    1000: {
      slidesPerView: 3,
    },
  },
});