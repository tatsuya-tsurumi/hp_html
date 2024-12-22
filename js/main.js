"use strict";

$(function () {
  /*---------- ハンバーガーメニュー ----------*/
  const hamburger = $(".js_hamburger");
  const nav = $(".js_nav");

  hamburger.on("click", function () {
    $(this).find(".js_hamburger_bar").toggleClass("is_active");
    nav.toggleClass("is_active");
    $(".js_body").toggleClass("is_hidden");
  });
});

/*---------- gsap ----------*/
gsap
  .timeline()
  .from(".js_copy", 1.6, { x: -1200, opacity: 0 }) 
  .from(".js_sub-copy", 1.6, { x: -300, opacity: 0 }); 

/*---------- gsap scrollTrigger ----------*/
gsap.from(".js_service", {
  scrollTrigger: {
    trigger: ".js_service-trigger",
    start: "center bottom",
  },
  duration: 2.0 ,
  y: 300, // 少し上に移動させる
  opacity: 0,
  ease: "power2.out",
});

gsap.from(".js_skill", {
  scrollTrigger: {
    trigger: ".js_skill-trigger",
    start: "center bottom",
  },
  duration: 2.0 ,
  y: 300, // 少し上に移動させる
  opacity: 0,
  ease: "power2.out",
});

let mySwiper = new Swiper ('.swiper', {

  // オプション設定
  loop: true,
  
  pagination: {
    el: '.swiper-pagination', 
    type: 'bullets', 
    clickable: true, 
  },

  //ナビゲーションボタン（矢印）表示設定
  navigation: {
    nextEl: '.swiper-button-next', 
    prevEl: '.swiper-button-prev', 
  },

  //スクロールバー表示設定
  scrollbar: {
    el: '.swiper-scrollbar', 
  },
slidesPerView: 1, 
breakpoints: {
  1080: {
    slidesPerView: 2,
    spaceBetween:120,
  },
},
});


