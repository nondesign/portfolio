<?php
  date_default_timezone_set('Asia/Tokyo');
?>
<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>空室検索</title>
</head>
<body>
  <h1>空室検索</h1>

  <form action="receive.php" method="post">
    <dl>
      <dt>ご利用日</dt>
      <dd>

        <select name="year">
          <?php
            for( $i = date('Y'); $i <= date('Y')+1; $i++) {
              echo '<option value="' . $i . '年">' . $i . '年</option>';
            }
          ?>
        </select>

        <select name="mouth">
          <option value="<?php echo date('n月'); ?>"><?php echo date('n月'); ?></option>
          <?php
            for( $i = 1; $i <= 12; $i++) {
              echo '<option value="' . $i . '月">' . $i . '月</option>';
            }
          ?>
        </select>

        <select name="date">
          <option value="<?php echo date('d日'); ?>"><?php echo date('d日'); ?></option>
          <?php
            for( $i = 1; $i <= date('t'); $i++) {
              echo '<option value="'. $i .'日">'. $i .'日</option>';
            }
          ?>
        </select>

      </dd>

      <dt><label for="human">ご利用人数</label></dt>
      <dd>
        <select name="human" id="human">
          <?php
            for( $i = 1; $i <= 10; $i++) {
              echo '<option value="' . $i . '人">'. $i .'人</option>';
            }
          ?>
        </select>
      </dd>

      <dt><label for="nights">泊数</label></dt>
      <dd>
        <select name="nights" id="nights">
        <?php
          for( $i = 1; $i <= 31; $i++) {
            echo '<option value="' . $i . '泊">'. $i .'泊</option>';
          }
        ?>
        </select>
      </dd>

      <dt>料金</dt>
      <dd>
        <select name="minPrice">
          <option value="">下限なし</option>
          <?php
            for( $i = 5000; $i <= 30000; $i += 2000) {
              echo '<option value="' . $i . '円">'. $i .'円</option>';
            }
          ?>
        </select> ～
        <select name="maxPrice">
          <option value="">上限なし</option>
          <?php
            for( $i = 5000; $i <= 30000; $i += 2000) {
              echo '<option value="' . $i . '円">'. $i .'円</option>';
            }
          ?>
        </select>
      </dd>
    </dl>
    <p><input type="submit" value="検索"></p>
  </form>
</body>
</html>
