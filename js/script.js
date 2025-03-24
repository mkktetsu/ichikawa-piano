
document.addEventListener("DOMContentLoaded", () => {
    // ハンバーガーメニュー
    document.body.addEventListener("click", (e) => {
      if (e.target.closest(".js-hamburger")) {
        document.querySelector(".js-hamburger").classList.toggle("is-active");
        document.querySelector(".js-drawer").classList.toggle("is-open");
      }
    });
  
    // アコーディオン
    const accordionTitles = document.querySelectorAll(".js-accordion__title");
    if (accordionTitles.length > 0) {
      const firstAccordionTitle = accordionTitles[0];
      const firstAccordionContent = firstAccordionTitle.nextElementSibling;
      
      if (firstAccordionContent) {
        firstAccordionTitle.classList.add("is-open");
        firstAccordionContent.style.display = "block";
        firstAccordionContent.style.maxHeight = firstAccordionContent.scrollHeight + "px";
      }
  
      accordionTitles.forEach((title) => {
        title.addEventListener("click", function () {
          this.classList.toggle("is-open");
          const content = this.nextElementSibling;
          if (content) {
            content.style.display = content.style.display === "block" ? "none" : "block";
            content.style.maxHeight = content.style.display === "block" ? content.scrollHeight + "px" : null;
          }
        });
      });
    }
  

    // Swiperを常に表示・ブレイクポイントで枚数変更
const swiperInstance = new Swiper(".swiper", {
  loop: true,
  autoplay: { delay: 3000, disableOnInteraction: false },
  speed: 1500,
  spaceBetween: 10,
  slidesPerView: 1, // 初期値（スマホなど）

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    500: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
    1440: {
      slidesPerView: 5,
    },
  },
});



    // Swiperの動的初期化
    // const breakPoint = 768;
    // let swiperInstance = null;
  
    // const initSwiper = () => {
    //   swiperInstance = new Swiper(".swiper", {
    //     loop: true,
    //     autoplay: { delay: 3000, disableOnInteraction: false },
    //     slidesPerView: 1,
    //     spaceBetween: 10,
    //     speed: 1500,
    //     pagination: { el: ".swiper-pagination", clickable: true },
    //     navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },
    //     breakpoints: { 500: {
    //                     slidesPerView: 5 },
    //                     1024: {
    //                       slidesPerView: 4 }
    //                   },
    //                     });
    //                   };
  
    // const handleResize = () => {
    //   if (window.innerWidth <= breakPoint && !swiperInstance) {
    //     initSwiper();
    //   } else if (window.innerWidth > breakPoint && swiperInstance) {
    //     swiperInstance.destroy(true, true);
    //     swiperInstance = null;
    //   }
    // };
  
    // handleResize();
    // window.addEventListener("resize", handleResize);
  
    // トップへ戻るボタンの表示制御
    const topBtn = document.querySelector(".for-top-btn");
    const fvElement = document.getElementById("fv");
  
    if (topBtn && fvElement) {
      window.addEventListener("scroll", () => {
        const fvHeight = fvElement.offsetHeight;
        const scrollPosition = window.scrollY;
        topBtn.classList.toggle("hidden", scrollPosition <= fvHeight);
      });
    }
  
    // FVの画像アニメーション
    setTimeout(() => {
      document.querySelectorAll(".fv__img--lesson, .fv__img--door, .fv__img--piano").forEach((image) => {
        image.classList.add("fv__img--rotate");
      });
    }, 500);
  });
  