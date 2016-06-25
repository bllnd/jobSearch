<?php
function sayHello() {
  return 'Hello World'.'<br />';
}
echo sayHello();
?>

<?php
function sayIt($word1, $word2 = 'World') {
  return $word1.' '.$word2.'<br />';
}
echo sayIt('Hello ','Brad');
?>

<?php
include 'functions.php';
echo add(7,2);
?>

