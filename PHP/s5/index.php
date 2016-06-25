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

<?php
$phrase = 'I like to eat apples';
$phrase = str_replace('apples', 'oranges', $phrase);
// echo $phrase;
$name_array = array('Brad','Bob','Mike', 'Sarah','Michelle'.'<br />');
// print_r($name_array);
$name_str = implode(', ', $name_array);
  echo $name_str;
 ?>

<?php
$car_string = 'toyota, dodge, mazda, kia';
$car_array = explode(', ', $car_string);
print_r($car_array);
 ?>

 <?php
class AreAnagrams
{
    public static function areStringsAnagrams($a, $b)
    {
        return count_chars($a,1) == count_chars($b,1);
    }
}

echo AreAnagrams::areStringsAnagrams('neural', 'unreal') ? '<br />'.'True' : 'False';
  ?>