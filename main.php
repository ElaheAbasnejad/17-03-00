<?php
/*
$test1=[
    'nam'=>'ali',
    'fnam'=>'alaei',
    'age'=>30,
    'address'=>'fars-shiraz->8stferdosi'
];
$j=json_encode($test1);
header("content-type:application/json");
echo $j;
*/
$x=$_POST['x'];
$y=$_POST['y'];
$z=$x+ $y;
$res=['z'=>$z];
header("content-type:application/json");
echo json_encode($res);
?>