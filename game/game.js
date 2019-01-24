


var scb = document.getElementById("scb");
var ctx = scb.getContext("2d");

var xPos = 25;
var yPos = 425;
var ePos = 200;
var velocityY = -0.9;
var velocity = 0.3;
var h = 25;

ctx.moveTo(0, 450);
ctx.lineTo(600, 450);
ctx.stroke();

ctx.moveTo(600, 450);
ctx.lineTo(600, 600);
ctx.stroke();

ctx.moveTo(700, 450);
ctx.lineTo(700, 700);
ctx.stroke();

ctx.moveTo(700, 450);
ctx.lineTo(900, 450);
ctx.stroke();


ctx.fillStyle="red";
ctx.fillRect(601,475,98,25);




ctx.fillStyle="blue";
ctx.rect(xPos,yPos,25,h);
ctx.fill();

ctx.fillStyle="red";
ctx.fillRect(ePos,425,25,25);


function eMove () {
  if (ePos >=300 && velocity > 0) {
    velocity *= -1;
  } else if (ePos <= 200 && velocity < 0) {
  velocity *= -1;
}
ePos += velocity;
}



/*move*/
function move(e) {
//alert(e.keyCode);


  if (e.keyCode === 39) { // si droite
    if (yPos < 425) { //si en l'air
      if (xPos >= 825){ // si juste avant la fin
        xPos = 875; // va a la fin
      } else { // si en l'air
      xPos +=50; // avance plus vite
    }} else {
      if (xPos >= 860){ // si au sol et juste avant la fin
        xPos = 875; // va a la fin
      } else {// si au sol
    xPos +=15;
}}

} if (e.keyCode === 37){ //gauche

  if (yPos < 425) { //si en l'air
    if (xPos <= 50){ // si juste au début
      xPos = 0; // va au début
    } else { // si en l'air
    xPos -=50; // recule plus vite
  }} else {
    if (xPos <= 15){ // si au sol et juste au début
      xPos = 0; // va a la fin
    } else {
  xPos -=15;
  }


}}if (e.keyCode === 32) {
    if (yPos >= 425) {
      yPos -= 75;
}


  } if (e.keyCode === 40) {
       yPos = 437;
       h = 12;
  } if (e.keyCode === 38) {
    h = 25;
    yPos = 425;
}



scb.width = scb.width;
ctx.fillStyle="blue";
ctx.rect(xPos,yPos,25,h);
ctx.fill();
ctx.moveTo(0, 450);
ctx.lineTo(600, 450);
ctx.stroke();

ctx.moveTo(600, 450);
ctx.lineTo(600, 600);
ctx.stroke();

ctx.moveTo(700, 450);
ctx.lineTo(700, 700);
ctx.stroke();

ctx.moveTo(700, 450);
ctx.lineTo(900, 450);
ctx.stroke();

/*couleur lave*/
ctx.fillStyle="red";
ctx.fillRect(601,475,98,25);

ctx.fillStyle="red";
ctx.fillRect(ePos,425,25,25);
}



let interval = setInterval(function() {


  if(yPos > 450) {

      alert('You are dead, your friends are dead, your family is dead, your fucking pets are being skinned alive, your mum is a fucking whore, you suck at life, the whole world hates you, you are going to hell, live with it, GAME OVER');
      yPos = 300;
      xPos = 25;
        }
        if (xPos >= 875) {
          alert ('Conglaturation you have completed a grate game and prooved the justice of our culture, now go and rest our heroes !');
          yPos = 300;
          xPos = 25;
        }
if (xPos < 600 || xPos >690){
  if (yPos < 425) {
    yPos += 1;
  }
} if (xPos > 600 && xPos < 690) {
  if (yPos < 500) {
    yPos += 1;
  }
}
if (xPos >= ePos-25 && xPos < ePos + 26 && yPos > 400 && yPos < 451) {
  alert('You are dead, your friends are dead, your family is dead, your fucking pets are being skinned alive, your mum is a fucking whore, you suck at life, the whole world hates you, you are going to hell, live with it, GAME OVER');
  xPos = 25;
  yPos = 300;
}

 scb.width = scb.width;
  ctx.fillStyle="blue";
  ctx.rect(xPos,yPos,25,h);
  ctx.fill();
  ctx.moveTo(0, 450);
  ctx.lineTo(600, 450);
  ctx.stroke();

  ctx.moveTo(600, 450);
  ctx.lineTo(600, 600);
  ctx.stroke();

  ctx.moveTo(700, 450);
  ctx.lineTo(700, 700);
  ctx.stroke();

  ctx.moveTo(700, 450);
  ctx.lineTo(900, 450);
  ctx.stroke();


  ctx.fillStyle="red";
  ctx.fillRect(601,475,98,25);
  ctx.fillStyle="red";
  ctx.fillRect(ePos,425,25,25);
  eMove ();
} ,0.33)


document.onkeydown = move;
