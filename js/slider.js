const slider = document.querySelector('.swiper-container');

let mySwiper;

function mobileSlider() {
  if (window.innerWidth <= 768 && slider.dataset.mobile == 'false') {
     mySwiper = new Swiper(slider, {
      direction: 'horizontal',
      loop: true,
      slidesPerView: 2,
      pagination: {
        el: '.swiper-pagination',
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      scrollbar: {
        el: '.swiper-scrollbar',
      },
    });
    slider.dataset.mobile = 'true';
  }

  if(window.innerWidth > 768) {
    slider.dataset.mobile = 'false';
    if (slider.classList.contains('swiper-container-initialized')) {
      mySwiper.destroy();
    }
  }
}

mobileSlider();

window.addEventListener('resize', () => {
  mobileSlider();
});


