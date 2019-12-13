// resultsに結果を代入
var results = ['大凶','凶','末吉','吉','小吉','中吉','大吉'];

// btnに代入
var btn = document.getElementById('js-button');

// pを生成
var p = document.createElement('p');
// class名を追加
p.className = 'text-result';


//　クリックイベント
btn.addEventListener('click', function() {
  var number = Math.floor(Math.random() * results.length);
  document.getElementById("js-result").appendChild(p);
  p.innerHTML = results[number];
}, false);