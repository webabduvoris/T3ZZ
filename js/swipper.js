const swiper = new Swiper(".mySwiper", {
      slidesPerView: 3,
      spaceBetween: 110,
      freeMode: true,
      pagination: {
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 30,
        },
        600: {
          slidesPerView: 1,
          spaceBetween: 30,
        },
        700: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        900: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        1170: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        1200: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      }
});