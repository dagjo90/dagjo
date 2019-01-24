var scb = document.getElementById("scb");
var ctx = scb.getContext("2d");

var left = document.getElementById('leftButton');

var jumpSound = new Audio();
jumpSound.src = "jump.wav";

var winning = new Audio();
winning.src = "win.wav";

var door = new Audio();
door.src = "door.wav";
door.loop = false;

var click = new Audio ();
click.src = "switch.wav";
click.loop = false;

var dying = new Audio();
dying.src = "death.wav";

var shock = new Audio();
shock.src = "toc.wav";

var theme = new Audio();
theme.src = 'theme.wav';

var ePos = 200; //position ennemi
var e2Pos = 800;
var e3Pos = 1800;
var e4Pos = 3700;
var e5Pos = 4500;
var e6Pos = 5000;

var eVelocity = 0.8; // velocité ennemi

var bYPos = 435; // position y bouton
var bHeight = 15; //hauteur bouton

var dHeight = 0; // hauteur porte
var dXpos = 800;
var dYpos = 350;
var dWidth = 0;
//personnage
var rectangle = {

  height:25,
  jumping:true,
  width:25,
  x:25,
  x_velocity:0,
  y:400,
  y_velocity:0

};

var controller = {

  left:false,
  right:false,
  up:false,
  keyListener:function(event) {

    var key_state = (event.type == "keydown")?true:false;

    switch(event.keyCode) {

      case 37:// gauche
        controller.left = key_state;
      break;
      case 32:// haut
        controller.up = key_state;
      break;
      case 39:// droite
        controller.right = key_state;
      break;

    }

  }

};



// son porte

function doorSound() {
  door.play();
}
// déplacements ennemi

function eMove () {
  if (eVelocity > 0) {
    if (ePos >= 300) {
    eVelocity *= -1;
  }} else if (ePos <= 200 && eVelocity < 0) {
  eVelocity *= -1;
}
ePos += eVelocity;
e2Pos += eVelocity;
e3Pos += eVelocity;
e4Pos += eVelocity;
e5Pos  += eVelocity;
e6Pos  += eVelocity;

}

function restart() {
  rectangle.y_velocity =0;
  rectangle.x_velocity =0;
  rectangle.y = 0;
  rectangle.x = 0;
  rectangle.height = 0;
  location.reload();
}

function death () {
  rectangle.x_velocity =0;
  rectangle.y_velocity =0;
  eVelocity *=0;
  if (controller.left) {
    rectangle.x_velocity = 0;
  }
  if (controller.right) {
    rectangle.x_velocity = 0;
  }
  if (controller.up && rectangle.jumping === false) {
rectangle.y_velocity = 0;
  }
  setTimeout(restart, 2000);
}

  loop = function() {

// saut touche espace
     // si au sol


  if (controller.up && rectangle.jumping === false) { // si touche haut et si pas déjà en saut
    rectangle.y_velocity -= 20;
    rectangle.jumping = true;
    jumpSound.play();

  }

// touche gauche


  if (controller.left) {
    rectangle.x_velocity -= 0.7;
  }

//touche droite

  if (controller.right) {
    rectangle.x_velocity += 0.7;
  }

//physique de base
  rectangle.y_velocity += 1;// gravity a chaque loop il tombe de 1
  rectangle.x += rectangle.x_velocity; // à chaque loop il ajoute la vélocité
  rectangle.y += rectangle.y_velocity;
  rectangle.x_velocity *= 0.9;// friction, la vélocité ralentit à chaque loop
  rectangle.y_velocity *= 0.9;// friction

  // arrete de tomber si avant x = 600 & apres x = 680

if (bHeight === 15){
  if (rectangle.y > 500 - 50 - 25 && rectangle.x < 600 || rectangle.y > 500 - 50 - 25  && rectangle.x >680 && rectangle.x < 1100) { //1 et 2
    rectangle.jumping = false;
    rectangle.y = 500 - 50 - 25;
    rectangle.y_velocity = 0;


  } else if (rectangle.y > 500 - 100 - 25 && rectangle.y <  500 - 100 - 15 && rectangle.x > 1175 && rectangle.x < 1300) { // 3
    rectangle.jumping = false;
    rectangle.y = 500 - 100 - 25;
    rectangle.y_velocity = 0;

  } else if (rectangle.y > 500 - 150 - 25 && rectangle.y <  500 - 150 - 15 &&  rectangle.x > 1375 && rectangle.x < 1500) {
    rectangle.jumping = false;
    rectangle.y = 500 - 150 - 25;
    rectangle.y_velocity = 0;

  } else if (rectangle.y > 500 - 200 - 25 && rectangle.y <  500 - 200 - 15 && rectangle.x > 1575 && rectangle.x < 2100) {
    rectangle.jumping = false;
    rectangle.y = 500 - 200 - 25;
    rectangle.y_velocity = 0;

  } else if (rectangle.y > 500 - 150 - 25 && rectangle.y <  500 - 150 - 15 && rectangle.x > 2175 && rectangle.x < 2800) {
    rectangle.jumping = false;
    rectangle.y = 500 - 150 - 25;
    rectangle.y_velocity = 0;

  } else if (rectangle.y > 500 - 100 - 25 && rectangle.y <  500 - 100 - 15 && rectangle.x > 2775 && rectangle.x < 2850) {
    rectangle.jumping = false;
    rectangle.y = 500 - 100 - 25;
    rectangle.y_velocity = 0;

  } else if (rectangle.y > 500 - 50 - 25 && rectangle.y <  500 - 50 - 15 && rectangle.x > 2825 && rectangle.x < 3000) {
    rectangle.jumping = false;
    rectangle.y = 500 - 50 - 25;
    rectangle.y_velocity = 0;

  } else if (rectangle.y > 500 - 100 - 25 && rectangle.y <  500 - 100 - 15 && rectangle.x > 2975 && rectangle.x < 3050) {
    rectangle.jumping = false;
    rectangle.y = 500 - 100 - 25;
    rectangle.y_velocity = 0;

  } else if (rectangle.y > 500 - 150 - 25 && rectangle.y <  500 - 150 -15 && rectangle.x > 3025 && rectangle.x < 3250) {
    rectangle.jumping = false;
    rectangle.y = 500 - 150 - 25;
    rectangle.y_velocity = 0;

  } else if (rectangle.y > 500 - 75 - 25 && rectangle.y <  500 - 75 -15 && rectangle.x > 3325 && rectangle.x < 4000) { // 7
    rectangle.jumping = false;
    rectangle.y = 500 - 75 - 25;
    rectangle.y_velocity = 0;

  } else if (rectangle.y > 500 - 125 - 25 && rectangle.y <  500 - 125 - 15 && rectangle.x > 4075 && rectangle.x < 4300) { //air 1
    rectangle.jumping = false;
    rectangle.y = 500 - 125 - 25;
    rectangle.y_velocity = 0;

  } else if (rectangle.y > 500 - 175 - 25 && rectangle.y <  500 - 175 - 15 && rectangle.x > 4375 && rectangle.x < 4700) { //air 2
    rectangle.jumping = false;
    rectangle.y = 500 - 175 - 25;
    rectangle.y_velocity = 0;

  } else if (rectangle.y > 500 - 50 - 25 && rectangle.y <  500 - 50 - 15 && rectangle.x > 4775 && rectangle.x < 5400) { // fin
    rectangle.jumping = false;
    rectangle.y = 500 - 50 - 25;
    rectangle.y_velocity = 0;

  } else if (rectangle.y < 500 - 200 && rectangle.x > 2290 && rectangle.x < 2900) { // mur haut
    rectangle.jumping = true;
    rectangle.y_velocity = -1;
    rectangle.y = 300;
    shock.play();

  }





}

    if (bHeight === 8){

    if (rectangle.y > 500 - 50 - 25 && rectangle.x < 600 || rectangle.y > 500 - 50 - 25  && rectangle.x > 680) {
      rectangle.jumping = false;
      rectangle.y = 500 - 50 - 25;
      rectangle.y_velocity = 0;
    }


if (rectangle.y >= bYPos - 25 && rectangle.x > 4925 && rectangle.x < 4965) {
     rectangle.jumping = false;
     rectangle.y = bYPos - 25;
     rectangle.y_velocity = 0;

   }

}

  // ne peut pas sortir du canvas à gauche
  if (rectangle.x <= 0) {
    rectangle.x = 0;
    rectangle.x_velocity = 0;
    if (controller.left) {
      rectangle.x_velocity *=0;
      shock.play();
    }

}

//bloqué à droite
if (rectangle.x >= 5375) {
  rectangle.x = 5375;
  rectangle.x_velocity = 0;
  if (controller.right) {
    rectangle.x_velocity *=0;
    shock.play();
  }
}

// collision avec la lave
  if(rectangle.y > 500) {
      dying.play();
      death();
        }

//fin du jeu
      if (rectangle.x >= 5360 && dHeight === 121 &&rectangle.y > 300) {
          winning.play();
          setTimeout(restart, 2000);
        }



// bouton noir enfoncé
if (rectangle.y >= 415 && rectangle.x < 4965 && rectangle.x > 4925){
  dWidth = 50;
  dHeight = 121;
  bYPos = 442;
  bHeight = 8;
  if (rectangle.jumping === true) {
  click.play();
  setTimeout(doorSound, 200);
}}
// collision ennemis

if (rectangle.x >= ePos-22 && rectangle.x < ePos + 24 && rectangle.y > 406 && rectangle.y < 450) { //1
  dying.play();
  death();
} if (rectangle.x >= e2Pos-22 && rectangle.x < e2Pos + 24 && rectangle.y > 406 && rectangle.y < 450) {//2
  dying.play();
  death();
}if (rectangle.x >= e3Pos-22 && rectangle.x < e3Pos + 24 && rectangle.y > 256 && rectangle.y < 300) {//3
  dying.play();
  death();
} if(rectangle.x >= e4Pos-22 && rectangle.x < e4Pos + 24 && rectangle.y > 381 && rectangle.y < 425) {//4
  dying.play();
  death();
} if(rectangle.x >= e5Pos-22 && rectangle.x < e5Pos + 24 && rectangle.y > 281 && rectangle.y < 325) {//5
  dying.play();
  death();
} if(rectangle.x >= e6Pos-22 && rectangle.x < e6Pos + 24 && rectangle.y > 406 && rectangle.y < 450) {//6
  dying.play();
  death();
}

// collision bouton coté gauche

if (rectangle.y >= bYPos -25 && rectangle.x >= 4924  && rectangle.x < 4925) {
  rectangle.x_velocity = 0;
  rectangle.x = 4924;
  if (controller.right) {
    rectangle.x_velocity *=0;
    shock.play();
  }
}

// collision bouton coté droit
if (rectangle.y >= bYPos -25 && rectangle.x <= 4967  && rectangle.x >= 4966) {
  rectangle.x_velocity = 0;
  rectangle.x = 4966;

if (controller.right) {
  rectangle.x_velocity +=1;
} if (controller.left) {
  rectangle.x_velocity *=0;
  shock.play();
}}

// collision bordure

//mur suspendu
if (rectangle.y <300 && rectangle.x >= 2300-24 && rectangle.x <= 2300) {
  rectangle.x = 2300 - 25;
  rectangle.x_velocity = 0;
  shock.play();
  if (controller.right) {
    rectangle.x = 2300 - 25;
    rectangle.x_velocity *=0;
  }
}

// escaliers

if (rectangle.y >325 && rectangle.x >= 2795 && rectangle.x <= 2800) { //1
  rectangle.x = 2800;

  if (controller.left) {
    rectangle.x = 2800;
    rectangle.x_velocity = 0;
    shock.play();
  }
} if (rectangle.y > 375 && rectangle.x >= 2845 && rectangle.x <= 2850) { //2
  rectangle.x = 2850;

  if (controller.left) {
    rectangle.x = 2850;
    rectangle.x_velocity = 0;
    shock.play();

  }
} if (rectangle.y > 375 && rectangle.x >= 2975 && rectangle.x <= 2980) { //3
  rectangle.x = 3000-25;

  if (controller.right) {
    rectangle.x = 3000 -25;
    rectangle.x_velocity = 0;
    shock.play();
  }
} if (rectangle.y > 325 && rectangle.x >= 3025 && rectangle.x <= 3030) { //4
  rectangle.x = 3025;
  if (controller.right) {
    rectangle.x = 3025;
    rectangle.x_velocity = 0;
shock.play();
  }
}

 scb.width = scb.width;

 //camera
 if (rectangle.x >= 4700) {
   ctx.translate(-4500,0);
 } else {
 ctx.translate(-rectangle.x +200,0);
}

// sol
ctx.fillStyle="#694629";
ctx.fillRect(-200,0,200,500); //mur gauche
ctx.fillRect(-100,450,700,50);//sol début
ctx.fillRect(700,450,400,50);// 2eme plateforme
ctx.fillRect(1200,400,100,200); //plateforme 3
ctx.fillRect(1400,350,100,300); //plateforme 4
ctx.fillRect(1600,300,300,400); //plateforme 5
ctx.fillRect(1899,300,201,100); //plateforme 5 suspendue
ctx.fillRect(2200,350,600,150); //plateforme 6
ctx.fillRect(2300,0,600,300); //mur haut
ctx.fillRect(2799,400,51,100); //plateforme 6 escalier
ctx.fillRect(2849,450,151,50); //plateforme 6 escalier
ctx.fillRect(2999,400,51,100); //plateforme 6 escalier
ctx.fillRect(3049,350,201,200); //plateforme 6 escalier

ctx.fillRect(3350,425,650,75); //plateforme 7
ctx.fillRect(4100,375,200,50); //plateforme 8 air
ctx.fillRect(4400,325,300,50); //plateforme 9 air
ctx.fillRect(4800,450,600,50); //plateforme 10 fin

//personnage
 ctx.fillStyle="blue";
 ctx.fillRect(rectangle.x,rectangle.y,rectangle.width,rectangle.height);

 // porte
 ctx.fillStyle="black";
 ctx.fillRect(5350,330,dWidth,dHeight);

//lave
 ctx.fillStyle="red";
 ctx.fillRect(600,475,100,25); //1
 ctx.fillRect(1100,475,100,25); //2
 ctx.fillRect(1300,450,100,150); //3
 ctx.fillRect(1500,400,100,250); //4

 //ennemi
 ctx.fillStyle="red";
 ctx.fillRect(ePos,425,25,25);
 ctx.fillRect(e2Pos,425,25,25);
 ctx.fillRect(e3Pos,275,25,25);
 ctx.fillRect(e4Pos,400,25,25);
 ctx.fillRect(e5Pos,300,25,25);
 ctx.fillRect(e6Pos,425,25,25);

 eMove ();

 //bouton
 ctx.fillStyle="black";
 ctx.fillRect(4950,bYPos, 15, bHeight);

//herbe
ctx.strokeStyle="green";
ctx.lineWidth=5;

// 1ere plateforme
  ctx.moveTo(0, 450);
  ctx.lineTo(600, 450);

//mur gauche
  ctx.moveTo(0, 0);
  ctx.lineTo(0, 450);

// 2eme plateforme
  ctx.moveTo(700, 450);
  ctx.lineTo(1100, 450);

//3eme plateforme
ctx.moveTo(1200,400);
ctx.lineTo(1300,400);


//4eme plateforme
ctx.moveTo(1400,350);
ctx.lineTo(1500,350);


//5eme plateforme
ctx.moveTo(1600,300);
ctx.lineTo(2100,300);

//6eme plateforme
ctx.moveTo(2200, 350);
ctx.lineTo(2800, 350);

// escalier
ctx.moveTo(2800, 400); //1
ctx.lineTo(2850, 400);
ctx.moveTo(2800, 400);
ctx.lineTo(2800, 350);

ctx.moveTo(2850, 450); //2
ctx.lineTo(3000, 450);
ctx.moveTo(2850, 450);
ctx.lineTo(2850, 400);

ctx.moveTo(3000, 400); //3
ctx.lineTo(3050, 400);
ctx.moveTo(3000, 400); //3
ctx.lineTo(3000, 450);
ctx.moveTo(3050, 400); //3
ctx.lineTo(3050, 350);


ctx.moveTo(3050, 350); //4
ctx.lineTo(3250, 350);


//mur suspendu
ctx.moveTo(2300, 300);
ctx.lineTo(2900, 300);
ctx.moveTo(2300, 302);
ctx.lineTo(2300, 0)
ctx.moveTo(2900, 302);
ctx.lineTo(2900, 0)

// plateforme 7
ctx.moveTo(3350, 425);
ctx.lineTo(4000, 425);

//platerforme 8 air
ctx.moveTo(4100, 375);
ctx.lineTo(4300, 375);

//platerforme 9 air
ctx.moveTo(4400, 325);
ctx.lineTo(4700, 325);

//platerforme 10 fin
ctx.moveTo(4800, 450);
ctx.lineTo(5400, 450);

  ctx.stroke();

ctx.font = "9px 'Press Start 2P'";
  ctx.fillStyle = "black";
  ctx.fillText("Use arrow-keys to ",-170,50);
  ctx.fillText("move left or right.", -170, 70)
  ctx.fillText("Use space-bar", -170, 90);
  ctx.fillText("to jump.", -170, 110);
  ctx.fillText("By Dan Gjonaj", -170, 480);
  ctx.fillText("Music and Sounds from freesound.org", -170, 490);
  
  ctx.fillStyle="rgba(0,0,0,1)";
  ctx.fillRect(50,25, 500, 175);

  ctx.font = "40px 'Press Start 2P'";
    ctx.fillStyle = "rgba(225, 50, 50, 1)";
    ctx.fillText("Super Cube",100,100);
    ctx.fillText("Boy",250,160);


ctx.font = "9px 'Press Start 2P'";
if (dHeight === 121) {
  ctx.fillStyle = "white";
  ctx.fillText("EXIT",5360,360);
}

  window.requestAnimationFrame(loop);

};



theme.loop = true;
theme.play();
window.addEventListener("keydown", controller.keyListener)
window.addEventListener("keyup", controller.keyListener);
window.requestAnimationFrame(loop);
console.log ("Dan Gjonaj");
