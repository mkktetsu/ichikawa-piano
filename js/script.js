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
    spaceBetween: 10, // スライド間の余白
    speed: 5000, // スライドの速度（ms）
    freeMode: true, // フリースクロールモードを有効化
    freeModeMomentum: false, // モメンタムを無効化して一定速度で動かす
    autoHeight: true, // スライドの高さを自動調整 12/29追加


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

const swiper = new Swiper(".swiper", {
  autoHeight: true,
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
    });
    }, 1000); 
});
//fvの文字が順番に落ちてくる表示
document.addEventListener("DOMContentLoaded", () => {
    const title = document.querySelector(".fv__title");
    const text = title.textContent;
    title.innerHTML = ""; // 元のテキストをクリア
    text.split("").forEach((char, index) => {
      const span = document.createElement("span");
      span.textContent = char === " " ? "\u00A0" : char; // 空白文字も保持
      title.appendChild(span);
    });
  });