// 各セクションスクロール時のアニメーション
$(document).ready(function() {
  $(window).on("scroll", function() {
    $(".scroll-fadein").each(function() {
      const elementTop = $(this).offset().top;
      const windowBottom = $(window).scrollTop() + $(window).height();
      if (elementTop < windowBottom - 50) { 
        $(this).addClass("show");
      }
    });
  });
});

// ページ訪問時のアニメーション
$(document).ready(function () {
  const $keyvisual = $('.fadein');
  $(window).on('scroll', function () {
    const scrollTop = $(window).scrollTop();
    const windowHeight = $(window).height();
    const offsetTop = $keyvisual.offset().top;
    if (scrollTop + windowHeight > offsetTop) {
      $keyvisual.addClass('show');
    }
  });
  $(window).trigger('scroll');
});