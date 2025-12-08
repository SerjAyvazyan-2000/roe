



const heroSwiper = new Swiper('.d-hero-swiper', {
  slidesPerView: 8,
  spaceBetween: 11,
  speed: 400,
  watchOverflow: true,
  resizeObserver: true,
  updateOnWindowResize: true,
  roundLengths: true,
  loop:true,

  pagination: {
    el: '.d-hero-paginatiion',
    clickable: true,
  },

  navigation: {
    nextEl: '.d-hero-swiper-next',
    prevEl: '.d-hero-swiper-prev',
  },

  breakpoints: {
    0: {
      slidesPerView: 4,
      slidesPerGroup: 4,
      spaceBetween: 6,
      grid: {
        rows: 2,  
        fill: "row"
      },
    },
    576: { slidesPerView: 4 },
    800: { slidesPerView: 4 },
    992: { slidesPerView: 6 },
    1200: { slidesPerView: 8 },
  },
});