document.addEventListener("DOMContentLoaded", () => {
  // ハンバーガーメニュー
  document.body.addEventListener("click", (e) => {
      if (e.target.closest(".js-hamburger")) {
          document.querySelector(".js-hamburger").classList.toggle("is-active");
          document.querySelector(".js-drawer").classList.toggle("fade");
      }
  });

  // アコーディオン
  document.querySelectorAll(".js-accordion__title").forEach((title) => {
      title.addEventListener("click", function () {
          this.classList.toggle("is-open");
          const content = this.nextElementSibling;
          if (content) content.style.display = content.style.display === "block" ? "none" : "block";
      });
  });

  document.addEventListener("DOMContentLoaded", () => {
    // 最初のアコーディオンを開いた状態にする
    const firstAccordionTitle = document.querySelector(".js-accordion__title");
    const firstAccordionContent = document.querySelector(".js-accordion__content");

    if (firstAccordionTitle && firstAccordionContent) {
        firstAccordionTitle.classList.add("is-open"); // タイトルの開くスタイル
        firstAccordionContent.style.display = "block"; // 表示する
        firstAccordionContent.style.maxHeight = firstAccordionContent.scrollHeight + "px"; // 高さを自動調整
    }

    // アコーディオンのクリックイベント
    document.querySelectorAll(".js-accordion__title").forEach((title) => {
        title.addEventListener("click", function () {
            this.classList.toggle("is-open");
            const content = this.nextElementSibling;

            if (content.style.display === "block") {
                content.style.display = "none";
                content.style.maxHeight = null;
            } else {
                content.style.display = "block";
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    });
});


  // Swiperの動的初期化
  const breakPoint = 768;
  let swiperInstance = null;

  const createSwiper = () => {
      swiperInstance = new Swiper(".swiper", {
        loop: true,
        autoplay: {
        delay: 0,
        disableOnInteraction: false,
        },

    slidesPerView: 'auto', // 画面に表示するスライド数を自動調整
    spaceBetween: 0, // スライド間の余白
    speed: 5000, // スライドの速度（ms）
    freeMode: true, // フリースクロールモードを有効化
    freeModeMomentum: false, // モメンタムを無効化して一定速度で動かす
    autoHeight: false, // 自動高さ調整を無効化
    breakpoints: {
        // スライドの表示枚数：500px以上の場合
        500: {
        slidesPerView: 3,
        }
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
  };

  const handleResize = () => {
      if (window.innerWidth <= breakPoint) {
          if (!swiperInstance) createSwiper();
      } else {
          if (swiperInstance) swiperInstance.destroy(false, true);
      }
  };

  handleResize();
  window.addEventListener("resize", handleResize);
});

// 既存のSwiperインスタンスを削除
const swiper = new Swiper(".swiper", {
    loop: true,
    autoplay: {
        delay: 3000, // 3秒ごとに切り替え
        disableOnInteraction: false,
    },
    slidesPerView: 1, // デフォルトは1枚表示
    spaceBetween: 10,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        // 768px未満の場合
        768: {
            slidesPerView: 1,
            spaceBetween: 10,
        }
    }
});

//topへ戻るボタンを表示消す設定
document.addEventListener("DOMContentLoaded", () => {
    const fvElement = document.getElementById("fv"); // FVセクション
    const topBtn = document.querySelector(".for-top-btn"); // トップボタン

    window.addEventListener("scroll", () => {
        const fvHeight = fvElement.offsetHeight; // FVの高さ
        const scrollPosition = window.scrollY; // 現在のスクロール位置

        // FVが表示されている間は非表示、超えたら表示
        if (scrollPosition > fvHeight) {
            topBtn.classList.remove("hidden");
        } else {
            topBtn.classList.add("hidden");
        }
    });
});
//↓FVの画像を順番に回転させる
document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
    const images = document.querySelectorAll(".fv__img--lesson");
    images.forEach((image) => {
        image.classList.add("fv__img--rotate");
    });
    }, 400); 
});

document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
    const images = document.querySelectorAll(".fv__img--door");
    images.forEach((image) => {
        image.classList.add("fv__img--rotate");
    });
    }, 1500); 
});

document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
    const images = document.querySelectorAll(".fv__img--piano");
    images.forEach((image) => {
        image.classList.add("fv__img--rotate");
    })
    ;
    }, 1000); 
});
//fvの文字が順番に落ちてくる表示
// document.addEventListener("DOMContentLoaded", () => {
//     const title = document.querySelector(".fv__title");
//     const text = title.textContent;
//     title.innerHTML = ""; // 元のテキストをクリア
//     text.split("").forEach((char, index) => {
//       const span = document.createElement("span");
//       span.textContent = char === " " ? "\u00A0" : char; // 空白文字も保持
//       title.appendChild(span);
//     });
//   });