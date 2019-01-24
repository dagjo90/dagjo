var date = new Date();
var day = date.getDay();
var hour = date.getHours();
var minutes = date.getMinutes();
var col2 = document.getElementsByClassName("col2");
var col3 = document.getElementsByClassName("col3");
var col4 = document.getElementsByClassName("col4");
var col5 = document.getElementsByClassName("col5");
var col6 = document.getElementsByClassName("col6");
var col7 = document.getElementsByClassName("col7");
var col8 = document.getElementsByClassName("col8");
var i;

function tableau () {

if (day === 1) { // lundi = 1
  if (hour < 12 && hour > 0|| hour === 12 && minutes <5 ){
  for (i=0; i< 8; i++ ) {
  col2[i].style.backgroundColor = "rgb(175, 17, 28)";
}} if (hour === 12 && minutes >=5 || hour === 13 && minutes < 30){
  for (i=1; i< 8; i++ ) {
  col2[i].style.backgroundColor = "rgb(175, 17, 28)";
}} if (hour === 13 && minutes >=30 || hour === 14 && minutes < 45){
  for (i=2; i< 8; i++ ) {
  col2[i].style.backgroundColor = "rgb(175, 17, 28)";
}} if (hour === 14 && minutes >=45 ||  hour === 15 || hour === 16 && minutes < 15){
for (i=3; i< 8; i++ ) {
col2[i].style.backgroundColor = "rgb(175, 17, 28)";
}}if (hour === 16 && minutes >=15 || hour === 17 || hour === 18 && minutes < 15){
for (i=4; i< 8; i++ ) {
col2[i].style.backgroundColor = "rgb(175, 17, 28)";
}}if (hour === 18 && minutes >=15 || hour === 19 || hour === 20 && minutes < 20){
for (i=5; i< 8; i++ ) {
col2[i].style.backgroundColor = "rgb(175, 17, 28)";
}}if (hour === 20 && minutes >=20 || hour === 21 || hour === 22 && minutes < 25){
for (i=6; i< 8; i++ ) {
col2[i].style.backgroundColor = "rgb(175, 17, 28)";
}}if (hour === 22 && minutes >=25 || hour === 23 || hour === 0 && minutes < 5){
for (i=7; i< 8; i++ ) {
col2[i].style.backgroundColor = "rgb(175, 17, 28)";
}}

}

 if (day === 2) {
   if (hour < 12 || hour === 12 && minutes <5 ){
   for (i=0; i< 8; i++ ) {
   col3[i].style.backgroundColor = "rgb(175, 17, 28)";
 }} if (hour === 12 && minutes >=5 || hour === 13 && minutes < 30){
   for (i=1; i< 8; i++ ) {
   col3[i].style.backgroundColor = "rgb(175, 17, 28)";
 }} if (hour === 13 && minutes >=30 || hour === 14 && minutes < 45){
   for (i=2; i< 8; i++ ) {
   col3[i].style.backgroundColor = "rgb(175, 17, 28)";
 }} if (hour === 14 && minutes >=45 || hour === 15 || hour === 16 && minutes < 15){
 for (i=3; i< 8; i++ ) {
 col3[i].style.backgroundColor = "rgb(175, 17, 28)";
}}if (hour === 16 && minutes >=15 || hour === 17 || hour === 18 && minutes < 15){
 for (i=4; i< 8; i++ ) {
 col3[i].style.backgroundColor = "rgb(175, 17, 28)";
}}if (hour === 18 && minutes >=15 || hour === 19 || hour === 20 && minutes < 20){
 for (i=5; i< 8; i++ ) {
 col3[i].style.backgroundColor = "rgb(175, 17, 28)";
}}if (hour === 20 && minutes >=20 || hour === 21 || hour === 22 && minutes < 25){
 for (i=6; i< 8; i++ ) {
 col3[i].style.backgroundColor = "rgb(175, 17, 28)";
}}if (hour === 22 && minutes >=25 || hour === 23 || hour === 0 && minutes < 5){
 for (i=7; i< 8; i++ ) {
 col3[i].style.backgroundColor = "rgb(175, 17, 28)";
 }}


 }

 if (day === 3) {
   if (hour < 12 || hour === 12 && minutes <5 ){
   for (i=0; i< 8; i++ ) {
   col4[i].style.backgroundColor = "rgb(175, 17, 28)";
 }} if (hour === 12 && minutes >=5 || hour === 13 && minutes < 30){
   for (i=1; i< 8; i++ ) {
   col4[i].style.backgroundColor = "rgb(175, 17, 28)";
 }} if (hour === 13 && minutes >=30 || hour === 14 && minutes < 45){
   for (i=2; i< 8; i++ ) {
   col4[i].style.backgroundColor = "rgb(175, 17, 28)";
 }} if (hour === 14 && minutes >=45 ||  hour === 15 || hour === 16 && minutes < 15){
 for (i=3; i< 8; i++ ) {
 col4[i].style.backgroundColor = "rgb(175, 17, 28)";
}}if (hour === 16 && minutes >=15 || hour === 17 || hour === 18 && minutes < 15){
 for (i=4; i< 8; i++ ) {
 col4[i].style.backgroundColor = "rgb(175, 17, 28)";
}}if (hour === 18 && minutes >=15 || hour === 19 || hour === 20 && minutes < 20){
 for (i=5; i< 8; i++ ) {
 col4[i].style.backgroundColor = "rgb(175, 17, 28)";
}}if (hour === 20 && minutes >=20 || hour === 21 || hour === 22 && minutes < 25){
 for (i=6; i< 8; i++ ) {
 col4[i].style.backgroundColor = "rgb(175, 17, 28)";
}}if (hour === 22 && minutes >=25 || hour === 23 || hour === 0 && minutes < 5){
 for (i=7; i< 8; i++ ) {
 col4[i].style.backgroundColor = "rgb(175, 17, 28)";
 }}
  }

 if (day === 4) {

   if (hour < 12 || hour === 12 && minutes <5 ){
   for (i=0; i< 8; i++ ) {
   col5[i].style.backgroundColor = "rgb(175, 17, 28)";
 }} if (hour === 12 && minutes >=5 || hour === 13 && minutes < 30){
   for (i=1; i< 8; i++ ) {
   col5[i].style.backgroundColor = "rgb(175, 17, 28)";
 }} if (hour === 13 && minutes >=30 || hour === 14 && minutes < 45){
   for (i=2; i< 8; i++ ) {
   col5[i].style.backgroundColor = "rgb(175, 17, 28)";
 }} if (hour === 14 && minutes >=45 || hour === 15 || hour === 16 && minutes < 15){
 for (i=3; i< 8; i++ ) {
 col5[i].style.backgroundColor = "rgb(175, 17, 28)";
}}if (hour === 16 && minutes >=15 || hour === 17 || hour === 18 && minutes < 15){
 for (i=4; i< 8; i++ ) {
 col5[i].style.backgroundColor = "rgb(175, 17, 28)";
}}if (hour === 18 && minutes >=15 || hour === 19 || hour === 20 && minutes < 20){
 for (i=5; i< 8; i++ ) {
 col5[i].style.backgroundColor = "rgb(175, 17, 28)";
 }}if (hour === 20 && minutes >20 || hour === 21 || hour === 22 && minutes < 25){
 for (i=6; i< 8; i++ ) {
 col5[i].style.backgroundColor = "rgb(175, 17, 28)";
}}if (hour === 22 && minutes >=25 || hour === 23 || hour === 0 && minutes < 5){
 for (i=7; i< 8; i++ ) {
 col5[i].style.backgroundColor = "rgb(175, 17, 28)";
 }}


  } if (day === 5) {
    if (hour < 12 || hour === 12 && minutes <5 ){
    for (i=0; i< 8; i++ ) {
    col6[i].style.backgroundColor = "rgb(175, 17, 28)";
  }} if (hour === 12 && minutes >=5 || hour === 13 && minutes < 30){
    for (i=1; i< 8; i++ ) {
    col6[i].style.backgroundColor = "rgb(175, 17, 28)";
  }} if (hour === 13 && minutes >=30 || hour === 14 && minutes < 45){
    for (i=2; i< 8; i++ ) {
    col6[i].style.backgroundColor = "rgb(175, 17, 28)";
  }} if (hour === 14 && minutes >=45 || hour === 15 || hour === 16 && minutes < 15){
  for (i=3; i< 8; i++ ) {
  col6[i].style.backgroundColor = "rgb(175, 17, 28)";
}}if (hour === 16 && minutes >=15 || hour === 17 || hour === 18 && minutes < 15){
  for (i=4; i< 8; i++ ) {
  col6[i].style.backgroundColor = "rgb(175, 17, 28)";
}}if (hour === 18 && minutes >=15 || hour === 19 || hour === 20 && minutes < 20){
  for (i=5; i< 8; i++ ) {
  col6[i].style.backgroundColor = "rgb(175, 17, 28)";
}}if (hour === 20 && minutes >=20 || hour === 21 || hour === 22 && minutes < 25){
  for (i=6; i< 8; i++ ) {
  col6[i].style.backgroundColor = "rgb(175, 17, 28)";
}}if (hour === 22 && minutes >=25 || hour === 23 || hour === 0 && minutes < 5){
  for (i=7; i< 8; i++ ) {
  col6[i].style.backgroundColor = "rgb(175, 17, 28)";
  }}
  }
  if (day === 6) {
    if (hour < 12 || hour === 12 && minutes <5 ){
    for (i=0; i< 8; i++ ) {
    col7[i].style.backgroundColor = "rgb(175, 17, 28)";
  }} if (hour === 12 && minutes >=5 || hour === 13 && minutes < 30){
    for (i=1; i< 8; i++ ) {
    col7[i].style.backgroundColor = "rgb(175, 17, 28)";
  }} if (hour === 13 && minutes >=30 || hour === 14 && minutes < 45){
    for (i=2; i< 8; i++ ) {
    col7[i].style.backgroundColor = "rgb(175, 17, 28)";
  }} if (hour === 14 && minutes >=45 || hour === 15 || hour === 16 && minutes < 15){
  for (i=3; i< 8; i++ ) {
  col7[i].style.backgroundColor = "rgb(175, 17, 28)";
}}if (hour === 16 && minutes >=15 || hour === 17 || hour === 18 && minutes < 15){
  for (i=4; i< 8; i++ ) {
  col7[i].style.backgroundColor = "rgb(175, 17, 28)";
}}if (hour === 18 && minutes >=15 || hour === 19 || hour === 20 && minutes < 20){
  for (i=5; i< 8; i++ ) {
  col7[i].style.backgroundColor = "rgb(175, 17, 28)";
}}if (hour === 20 && minutes >=20 || hour === 21 || hour === 22 && minutes < 25){
  for (i=6; i< 8; i++ ) {
  col7[i].style.backgroundColor = "rgb(175, 17, 28)";
}}if (hour === 22 && minutes >=25 || hour === 23 || hour === 0 && minutes < 5){
  for (i=7; i< 8; i++ ) {
  col7[i].style.backgroundColor = "rgb(175, 17, 28)";
  }}
  }


   if (day === 0) { // dimanche = 0

     if (hour < 12 || hour === 12 && minutes <5 ){
     for (i=0; i< 8; i++ ) {
     col8[i].style.backgroundColor = "rgb(175, 17, 28)";
   }} if (hour === 12 && minutes >=5 || hour === 13 && minutes < 30){
     for (i=1; i< 8; i++ ) {
     col8[i].style.backgroundColor = "rgb(175, 17, 28)";
   }} if (hour === 13 && minutes >=30 || hour === 14 && minutes < 45){
     for (i=2; i< 8; i++ ) {
     col8[i].style.backgroundColor = "rgb(175, 17, 28)";
   }} if (hour === 14 && minutes >=45 || hour === 15 || hour === 16 && minutes < 15){
   for (i=3; i< 8; i++ ) {
   col8[i].style.backgroundColor = "rgb(175, 17, 28)";
 }}if (hour === 16 && minutes >=15 || hour === 17 || hour === 18 && minutes < 15){
   for (i=4; i< 8; i++ ) {
   col8[i].style.backgroundColor = "rgb(175, 17, 28)";
 }}if (hour === 18 && minutes >=15 || hour === 19 || hour === 20 && minutes < 20){
   for (i=5; i< 8; i++ ) {
   col8[i].style.backgroundColor = "rgb(175, 17, 28)";
 }}if (hour === 20 && minutes >=20 || hour === 21 || hour === 22 && minutes < 25){
   for (i=6; i< 8; i++ ) {
   col8[i].style.backgroundColor = "rgb(175, 17, 28)";
 }}if (hour === 22 && minutes >=25 || hour === 23 || hour === 0 && minutes < 5){
   for (i=7; i< 8; i++ ) {
   col8[i].style.backgroundColor = "rgb(175, 17, 28)";
   }}
  }


}
tableau();
