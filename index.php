<?php

$file=file_get_contents("./content.html");

$copyYear = 2019; 
$curYear = date('Y'); 
$file = str_replace('&copy; 2019 - 2024', '&copy; '.$copyYear.(($copyYear != $curYear) ? ' - '.$curYear : ''), $file);


$combine=$file;

$combine = preg_replace('/<!--.*?-->/ms','',$combine);
$combine = preg_replace('/\s+/', ' ', $combine);
$combine = preg_replace('~>\s+<~', '><', $combine);

echo $combine;
exit;
?>
