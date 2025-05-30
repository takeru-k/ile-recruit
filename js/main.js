$(function () {
  $('.js-btn').on('click', function () {        // js-btnクラスをクリックすると、
    $('.l-header__nav, .c-hamburger__line').toggleClass('open'); // メニューとバーガーの線にopenクラスをつけ外しする
  })

});

// toggle
$(function(){
	$('.c-toggle__header').click(function(){
		$(this).toggleClass('selected');
		$(this).next().slideToggle();
	});
});

document.addEventListener('DOMContentLoaded', function() {
  var header = document.querySelector('.l-header'); // ヘッダーエレメントを取得

  // スクロール時のイベントリスナーを追加
  window.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY; // 現在のスクロール位置を取得
    var screenWidth = window.innerWidth; // 現在のウィンドウの幅を取得

    // 画面幅が1024px以上で、スクロール位置が76pxを超えた場合（ヘッダーの高さ）
    if (screenWidth >= 1024 && scrollPosition > 76) {
      header.style.background = '#fff'; // 背景色を白に変更
    
    }
  });
});