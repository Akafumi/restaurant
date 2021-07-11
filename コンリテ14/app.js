$('.slider').slick({
  autoplay: true,
//自動的に動き出すか
  infinite: true,
//スライドをループさせるか
  slideToShow: 4,
//スライドに画像を4枚見せる
  slideToScroll: 4,
//1回のスクロールで画像を4枚見せる
  prevArrow: '<div class="slick-prev"></div>'
//矢印部分Previewのhtmlの変更
  nextArrow: '<div class="slick-next"></div>'
//矢印部分Nextのhtmlの変更
  dots: true,
//下部ナビゲーションの表示
  responsive: [
    {
    breakpoint: 769,//モニターの横幅が769px以下の見せ方
    settings: {
      slidesToShow: 2,//スライドを画面に2枚見せる
      slidesToScroll: 2,//1回のスクロールで2枚の画像を移動して見せる
    }
  },
  {
    breakpoint: 426,//モニターの横幅が426px以下の見せ方
    settings: {
      slideToShow: 1,//スライドを画面に1枚見せる
      slideToScroll: 1,//1回のスクロールで1枚の画像を移動して見せる
    }
  }
  ]
});

