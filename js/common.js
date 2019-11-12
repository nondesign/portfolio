
$(function () {
  // 任意のズレ高さピクセル数を入力
  var headerHeight = 20;
  // #で始まるアンカーをクリックした場合に処理
  $('a[href^=#]').click(function () {
    // スクロールの速度
    var speed = 400; // ミリ秒
    // アンカーの値取得
    var href = $(this).attr("href");
    // 移動先を取得
    var target = $(href == "#" || href == "" ? 'html' : href);
    // 移動先を数値で取得
    var position = target.offset().top - headerHeight;
    // スムーススクロール
    $('body,html').animate({ scrollTop: position }, speed, 'swing');
    return false;
  });

  $(window).scroll(function () {
    $('.fadein').each(function () {
      var targetElement = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > targetElement - windowHeight + 200) {
        $(this).css('opacity', '1');
        $(this).css('transform', 'translateY(0px)');
        $(this).addClass('active');
      }
    });
  });

  $('.js-button-hamburger').click(function () {
    $('body').toggleClass('is-active-drawer');

    if ($(this).attr('aria-expanded') == 'false') {
      $(this).attr('aria-expanded', true);
    } else {
      $(this).attr('aria-expanded', false);
    }
  });

});

particlesJS("particles-js",
  {
    "particles":
    {
      "number":
        { "value": 90, "density": { "enable": false, "value_area": 1262.6960138265217 } },
      "color": { "value": ["#F4E862", "#FAC671"] },
      "shape": {
        "type": "circle",
        "stroke": { "width": 0, "color": "#000000" },
        "polygon": { "nb_sides": 11 },
        "image": { "src": "img/github.svg", "width": 100, "height": 100 }
      },
      "opacity": { "value": .75, "random": true, "anim": { "enable": true, "speed": 1, "opacity_min": 0.1, "sync": false } },
      "size": { "value": 60, "random": true, "anim": { "enable": false, "speed": 40, "size_min": 0.1, "sync": false } },
      "line_linked": {
        "enable": false, "distance": 576.8629870285943, "color": "#ffffff", "opacity": 0.11216780303333779,
        "width": 2.2433560606667555
      },
      "move": {
        "enable": true, "speed": 1,
        "direction": "bottom", "random": true, "straight": true, "out_mode": "out", "bounce": false, "attract": { "enable": false, "rotateX": 2804.195075833444, "rotateY": 5047.5511365002 }
      }
    },
    "interactivity": { "detect_on": "canvas", "events": { "onhover": { "enable": false, "mode": "bubble" }, "onclick": { "enable": false, "mode": "repulse" }, "resize": true }, "modes": { "grab": { "distance": 400, "line_linked": { "opacity": 0.8632241834310288 } }, "bubble": { "distance": 400, "size": 4, "duration": 0.3, "opacity": 1, "speed": 3 }, "repulse": { "distance": 200, "duration": 0.4 }, "push": { "particles_nb": 4 }, "remove": { "particles_nb": 2 } } }, "retina_detect": true
  }); var count_particles, stats, update; stats = new Stats; stats.setMode(0); stats.domElement.style.position = 'absolute'; stats.domElement.style.left = '0px'; stats.domElement.style.top = '0px'; document.body.appendChild(stats.domElement); count_particles = document.querySelector('.js-count-particles'); update = function () { stats.begin(); stats.end(); if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) { count_particles.innerText = window.pJSDom[0].pJS.particles.array.length; } requestAnimationFrame(update); }; requestAnimationFrame(update);;
