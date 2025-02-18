const swiperHome = new Swiper(".homeSwiper", {
  spaceBetween: 0,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  loop: true,
  speed: 1200,
  allowTouchMove: false,
});

const swiperParther = new Swiper(".partnerSwiper", {
  spaceBetween: 0,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  loop: true,
  speed: 1200,
  // allowTouchMove: false,
});