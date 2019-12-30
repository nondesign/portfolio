$(function () {
  new WOW().init();

  // ドロワーメニュー
  $('.button-hamburger').click(function () {
    $('body').toggleClass('is-active');

    if ($(this).attr('aria-expanded') == 'false') {
      $(this).attr('aria-expanded', 'true');
    } else {
      $(this).attr('aria-expanded', 'false');
    }
  });

  // スムーススクロール
  $('a[href^="#"]').click(function () {
    // ヘッダーの高さを取得
    var headerHeight = $('.l-header').innerHeight()

    // 目的地の取得（自身のhref属性を取得）
    var id = $(this).attr('href');

    // 目的地の位置を取得
    var position = $(id).offset();
    // console.log(id);

    // html要素とbody要素にアニメーション
    $('html, body').animate({
      scrollTop: position.top - headerHeight
    }, 500);
    return false;
  });

  // トップへ戻るボタン
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('.l-pagetop').fadeIn();
    } else {
      $('.l-pagetop').fadeOut();
    }
  });

  $('.l-pagetop').click(function () {
    $('body,html').animate({
      scrollTop: 0
    }, 500);
    return false;
  });

  $('.singer-collab').css('display', 'none');
  $('.playing').css('display', 'none');

  // タブの切り替え
  $('.js-button').click(function () {
    $('.js-button').removeClass('active');
    $(this).addClass('active');

    var index = $('.js-button').index(this);
    $('.contents li').css('display', 'none');
    $('.contents li').eq(index).fadeIn();
  });

});
