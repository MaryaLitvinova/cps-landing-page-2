import '../scss/style.scss';
import Swiper, { Navigation, Pagination } from 'swiper';
import 'swiper/modules/navigation/navigation.scss';
import 'swiper/modules/pagination/pagination.scss';

const modalMenu = document.getElementById("modal_menu");
const openMenu = document.getElementById("modal_menu__open");
const closeMenu = document.getElementsByClassName("modal_menu__close")[0];
openMenu.onclick = function() {
  modalMenu.style.display = "block";
  document.body.style.overflow = 'hidden';
}
closeMenu.onclick = function() {
  modalMenu.style.display = "none";
  document.body.style.overflow = 'visible';
}
window.onclick = function(event) {
  if (event.target == modalMenu) {
    modalMenu.style.display = "none";
  }
}

const modalCall = document.getElementById("modal_call");
const openCall = document.getElementById("modal_call__open");
const closeCall = document.getElementsByClassName("modal_call__close")[0];
openCall.onclick = function() {
  modalCall.style.display = "block";
  document.body.style.overflow = 'hidden';
}
closeCall.onclick = function() {
  modalCall.style.display = "none";
  document.body.style.overflow = 'visible';
}
window.onclick = function(event) {
  if (event.target == modalCall) {
    modalCall.style.display = "none";
  }
}

const modalSms = document.getElementById("modal_sms");
const openSms = document.getElementById("modal_sms__open");
const closeSms = document.getElementsByClassName("modal_sms__close")[0];
openSms.onclick = function() {
  modalSms.style.display = "block";
  document.body.style.overflow = 'hidden';
}
closeSms.onclick = function() {
  modalSms.style.display = "none";
  document.body.style.overflow = 'visible';
}
window.onclick = function(event) {
  if (event.target == modalSms) {
    modalSms.style.display = "none";
  }
}

var init = false;
  function swiperCard() {
    if (window.innerWidth <= 768) {
      if (!init) {
        init = true;
        swiper = new Swiper('.swiper', {
          modules: [Navigation, Pagination],
          loop: false,
          spaceBetween: 16,
          slideClass: 'swiper-slide',
          pagination: {
            el: '.swiper-pagination',
            tupe: 'bullets',
            clickable: true
          },
          slidesPerView: 'auto'
          });
      }
    } else if (init) {
      swiper.destroy();
      init = false;
    }
  }
  swiperCard();
  window.addEventListener("resize", swiperCard);

