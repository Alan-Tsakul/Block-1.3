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

let buttonShowAll = document.querySelector('.swiper-show-all__btn'),
imageShowAll = document.querySelector('.swiper-show-all__img'),
elems = document.querySelectorAll('.hidden'),
elemstablet = document.querySelectorAll('.hidden-tablet');

buttonShowAll.addEventListener('click', () => {
  for(let i = 0; i < elems.length; i++){
    for(let j = 0; j < elemstablet.length; j++){
      elems[i].classList.toggle('hidden');
      elemstablet[j].classList.toggle('hidden-tablet');
      imageShowAll.classList.toggle('rotate');
      buttonShowAll.classList.toggle('swiper-show-all__btn-mod');
    }
    }
});
