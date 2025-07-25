<?php

$file=file_get_contents("./content.html");
$combine=$file;

$combined = preg_replace('/<!--.*?-->/ms','',$combined);
$combined = preg_replace('/\s+/', ' ', $combined);
$combined = preg_replace('~>\s+<~', '><', $combined);

echo $combine;
exit;
?>
