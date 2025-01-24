
$(function () {
    // ハンバーガーメニュー
    $(".js-hamburger").click(function () {
        $(".js-hamburger").toggleClass("is-active");
        $(".js-drawer").fadeToggle();
    });
});

$(function () {
    //アコーディオン
    $(".js-accordion__item:first-child .js-accordion__content").css(
    "display",
    "block"
    );
    $(".js-accordion__item:first-child .js-accordion__title").addClass("is-open");
    $(".js-accordion__title").on("click", function () {
    $(this).toggleClass("is-open");
    $(this).next().slideToggle(300);
    });
});


const swiperSlides = document.getElementsByClassName("swiper-slide");
const breakPoint = 500; // ブレークポイントを設定
let swiper;
let swiperBool;

window.addEventListener(
  "load",
  () => {
    if (breakPoint < window.innerWidth) {
      swiperBool = false;
    } else {
      createSwiper();
      swiperBool = true;
    }
  },
  false
);

window.addEventListener(
  "resize",
  () => {
    if (breakPoint < window.innerWidth && swiperBool) {
      swiper.destroy(false, true);
      swiperBool = false;
    } else if (breakPoint >= window.innerWidth && !swiperBool) {
      createSwiper();
      swiperBool = true;
    }
  },
  false
);

const swiper = new Swiper(".swiper", {
  loop: true, // ループさせる
  autoplay: {
      delay: 3000, // 3秒ごとにスライド
      disableOnInteraction: false, // ユーザー操作後も自動再生を継続
  },
  pagination: {
      el: ".swiper-pagination",
      clickable: true,
  },
  navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
  },
});