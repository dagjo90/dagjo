let date = new Date();
let hours = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();
const div = document.getElementById('clock');



let interval = setInterval(function() {
  date = new Date();
  hours = date.getHours();
  minutes = date.getMinutes();
  seconds = date.getSeconds();
  if (hours <10) {
    hours = "0" + hours;
}  if (minutes <10) {
    minutes = "0" + minutes;
}  if (seconds <10) {
    seconds = "0" + seconds;
}
div.textContent = hours + ':' + minutes + ':' + seconds;
}, 1000);
