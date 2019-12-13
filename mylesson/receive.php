<?php
  date_default_timezone_set('Asia/Tokyo');
?>
<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>検索結果</title>
</head>
<body>
  <h1>検索結果</h1>
  <dl>
    <dt>ご利用日</dt>
    <dd>
      <?php
        echo htmlspecialchars($_POST['year'].$_POST['mouth'].$_POST['date'], ENT_QUOTES, 'utf-8');
      ?>
    </dd>
    <dt>ご利用人数</dt>
    <dd>
      <?php
        echo htmlspecialchars($_POST['human'], ENT_QUOTES, 'utf-8');
      ?>
    </dd>
    <dt>泊数</dt>
    <dd>
      <?php
        echo htmlspecialchars($_POST['nights'], ENT_QUOTES, 'utf-8');
      ?>
    </dd>
    <dt>料金</dt>
    <dd>
      <?php
        echo htmlspecialchars($_POST['minPrice'].'～'.$_POST['maxPrice'], ENT_QUOTES, 'utf-8');
      ?>
    </dd>
  </dl>
  <p>上記に一致のプランは下記になります。</p>

  <section>
    <h2>★猫と過ごせるハッピープラン</h2>
  </section>

  <p><a href="index.php">検索ページへ戻る</a></p>
</body>
</html>
