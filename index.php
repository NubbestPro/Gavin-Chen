<?php

$file=file_get_contents("./content.html");
$combine=$file;

$combine = preg_replace('/<!--.*?-->/ms','',$combine);
$combine = preg_replace('/\s+/', ' ', $combine);
$combine = preg_replace('~>\s+<~', '><', $combine);

echo $combine;
exit;
?>
