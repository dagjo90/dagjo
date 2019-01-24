

var row1 = document.getElementsByClassName("row1");
var row2 = document.getElementsByClassName("row2");
var row3 = document.getElementsByClassName("row3");
var row4 = document.getElementsByClassName("row4");
var row5 = document.getElementsByClassName("row5");
var row6 = document.getElementsByClassName("row6");
var row7 = document.getElementsByClassName("row7");
var row8 = document.getElementsByClassName("row8");
var row9 = document.getElementsByClassName("row9");
var row10 = document.getElementsByClassName("row10");
var row11 = document.getElementsByClassName("row11");
var vide = document.getElementById("vide");

var citTotal;
var rurTotal;
var semTotal;
var lithoTotal;
var ter1Total;
var ter2Total;
var ter3Total;
var cache1Total;
var cache2Total;
var cache3Total;

var total;

var citQ = document.getElementById("citQ");
var rurQ = document.getElementById("rurQ");
var semQ = document.getElementById("semQ");
var lithoQ = document.getElementById("lithoQ");
var ter1Q = document.getElementById("ter1Q");
var ter2Q = document.getElementById("ter2Q");
var ter3Q = document.getElementById("ter3Q");
var cahe1Q = document.getElementById("cache1Q");
var cache2Q = document.getElementById("cache2Q");
var cache3Q = document.getElementById("cache3Q");

var localCitQ = JSON.parse( localStorage.getItem( "citadine")) ;
var localRurQ = JSON.parse( localStorage.getItem( "rurale")) ;
var localSemQ = JSON.parse( localStorage.getItem( "semanciere")) ;
var localLithoQ = JSON.parse( localStorage.getItem( "lithoterapie")) ;
var localTer1Q = JSON.parse( localStorage.getItem( "terrarium1")) ;
var localTer2Q = JSON.parse( localStorage.getItem( "terrarium2")) ;
var localTer3Q = JSON.parse( localStorage.getItem( "terrarium3")) ;
var localCache1Q = JSON.parse( localStorage.getItem( "cache1")) ;
var localCache2Q = JSON.parse( localStorage.getItem( "cache2")) ;
var localCache3Q = JSON.parse( localStorage.getItem( "cache3")) ;

var citadine = localCitQ || {
  price : 20,
  name : "La Box citadine",
  quantity: 0

}

var rurale = localRurQ || {
  price : 20,
  name : "La Box rurale",
  quantity: 0
}

var semanciere = localSemQ || {
  price : 20,
  name : "La Box semancière",
  quantity: 0
}

var lithoterapie = localLithoQ || {
  price : 20,
  name : "La Box lithothérapie",
  quantity: 0
}

var terrarium1 = localTer1Q || {
  price : 30,
  name : "Terrarium modèle 1",
  quantity: 0
}

var terrarium2 = localTer2Q ||{
  price : 25,
  name : "Terrarium modèle 2",
  quantity: 0
}

var terrarium3 = localTer3Q || {
  price : 20,
  name : "La Box citadine 3",
  quantity: 0
}

var cache1 = localCache1Q || {
  price : 10,
  name : "Cache pot modèle 1",
  quantity: 0
}

var cache2 = localCache2Q || {
  price : 10,
  name : "Cache pot modèle 2",
  quantity: 0
}

var cache3 = localCache3Q || {
  price : 10,
  name : "cache pot modèle 3",
  quantity: 0
}

// boutons ajouter

function addCit () {

  if (citadine.quantity === 99) {
    citadine.quantity === 99;
    citadine.price +=0;
  } if (citadine.quantity < 99) {
    citadine.quantity +=1;
  }

  showCart ();
}

function addRur () {

    if (rurale.quantity === 99) {
      rurale.quantity === 99;
      rurale.price +=0;
    } if (rurale.quantity < 99) {
      rurale.price +=20;
      rurale.quantity +=1;
    }
  showCart ();
}

function addSem () {

    if (semanciere.quantity === 99) {
      semanciere.quantity === 99;
      semanciere.price +=0;
    } if (semanciere.quantity < 99) {
      semanciere.price +=20;
      semanciere.quantity +=1;
    }
  showCart ();
}

function addLitho () {

    if (lithoterapie.quantity === 99) {
      lithoterapie.quantity === 99;
      lithoterapie.price +=0;
    } if (lithoterapie.quantity < 99) {
      lithoterapie.price +=20;
      lithoterapie.quantity +=1;
    }
  showCart ();
}

function addTer1 () {

    if (terrarium1.quantity === 99) {
      terrarium1.quantity === 99;
      terrarium1.price +=0;
    } if (terrarium1.quantity < 99) {
      terrarium1.price +=20;
      terrarium1.quantity +=1;
    }
  showCart ();
}

function addTer2 () {

    if (terrarium2.quantity === 99) {
      terrarium2.quantity === 99;
      terrarium2.price +=0;
    } if (terrarium2.quantity < 99) {
      terrarium2.price +=20;
      terrarium2.quantity +=1;
    }
  showCart ();
}

function addTer3 () {

    if (terrarium3.quantity === 99) {
      terrarium3.quantity === 99;
      terrarium3.price +=0;
    } if (terrarium3.quantity < 99) {
      terrarium3.price +=20;
      terrarium3.quantity +=1;
    }
  showCart ();
}

function addCache1 () {

    if (cache1.quantity === 99) {
      cache1.quantity === 99;
      cache1.price +=0;
    } if (cache1.quantity < 99) {
      cache1.price +=20;
      cache1.quantity +=1;
    }
  showCart ();
}

function addCache2 () {

    if (cache2.quantity === 99) {
      cache2.quantity === 99;
      cache2.price +=0;
    } if (cache2.quantity < 99) {
      cache2.price +=20;
      cache2.quantity +=1;
    }
  showCart ();
}

function addCache3 () {

    if (cache3.quantity === 99) {
      cache3.quantity === 99;
      cache3.price +=0;
    } if (cache3.quantity < 99) {
      cache3.price +=20;
      cache3.quantity +=1;
    }
  showCart ();
}


//boutons enlever

function remCit () {

  if (citadine.quantity === 1) {
    citadine.quantity = 100;
  } if (citadine.quantity >= 2) {
    citadine.quantity -=1;
  }
  showCart ();
}

function remRur () {

  if (rurale.quantity === 1) {
    rurale.quantity = 100;
  } if (rurale.quantity >= 2) {
    rurale.quantity -=1;
  }
  showCart ();
}

function remSem () {

  if (semanciere.quantity === 1) {
    semanciere.quantity = 100;
  } if (semanciere.quantity >= 2) {
    semanciere.price -=20;
    semanciere.quantity -=1;
  }
  showCart ();
}

function remLitho () {

  if (lithoterapie.quantity === 1) {
    lithoterapie.quantity = 100;
  } if (lithoterapie.quantity >= 2) {
    lithoterapie.quantity -=1;
  }
  showCart ();
}

function remTer1 () {

  if (terrarium1.quantity === 1) {
    terrarium1.quantity = 100;
  } if (terrarium1.quantity >= 2) {
    terrarium1.quantity -=1;
  }
  showCart ();
}

function remTer2 () {

  if (terrarium2.quantity === 1) {
    terrarium2.quantity = 100;
  } if (terrarium2.quantity >= 2) {
    terrarium2.quantity -=1;
  }
  showCart ();
}

function remTer3 () {

  if (terrarium3.quantity === 1) {
    terrarium3.quantity = 100;
  } if (terrarium3.quantity >= 2) {
    terrarium3.quantity -=1;
  }
  showCart ();
}

function remCache1 () {

  if (cache1.quantity === 1) {
    cache1.quantity = 100;
  } if (cache1.quantity >= 2) {
    cache1.quantity -=1;
  }
  showCart ();
}

function remCache2 () {

  if (cache2.quantity === 1) {
    cache2.quantity = 100;
  } if (cache2.quantity >= 2) {
    cache2.quantity -=1;
  }
  showCart ();
}

function remCache3 () {

  if (cache3.quantity === 1) {
    cache3.quantity = 100;
  } if (cache3.quantity >= 2) {
    cache3.quantity -=1;
  }
  showCart ();
}


//boutons supprimer

function delCit () {
  citadine.quantity = 0;
  showCart ();
}

function delRur () {
  rurale.quantity = 0;
  showCart ();
}

function delSem () {
  semanciere.quantity = 0;
  showCart ();
}

function delLitho () {
  lithoterapie.quantity = 0;
  showCart ();
}

function delTer1 () {
  terrarium1.quantity = 0;
  showCart ();
}


function delTer2 () {
  terrarium2.quantity = 0;
  showCart ();
}

function delTer3 () {
  terrarium3.quantity = 0;
  showCart ();
}

function delCache1 () {
  cache1.quantity = 0;
  showCart ();
}

function delCache2 () {
  cache2.quantity = 0;
  showCart ();
}

function delCache3 () {
  cache3.quantity = 0;
  showCart ();
}

// fonction affiche du panier

function showCart () {

  localStorage.setItem("citadine", JSON.stringify( citadine ));
  localCitQ = JSON.parse( localStorage.getItem( "citadine"));

  localStorage.setItem("rurale", JSON.stringify( rurale ));
  localRurQ = JSON.parse( localStorage.getItem( "rurale"));

  localStorage.setItem("semanciere", JSON.stringify( semanciere ));
  localSemQ = JSON.parse( localStorage.getItem( "semanciere"));

  localStorage.setItem("lithoterapie", JSON.stringify( lithoterapie ));
  localLithoQ = JSON.parse( localStorage.getItem( "lithoterapie"));

  localStorage.setItem("terrarium1", JSON.stringify( terrarium1 ));
  localTer1Q = JSON.parse( localStorage.getItem( "terrarium1"));

  localStorage.setItem("terrarium2", JSON.stringify( terrarium2 ));
  localTer2Q = JSON.parse( localStorage.getItem( "terrarium2"));

  localStorage.setItem("terrarium3", JSON.stringify( terrarium3 ));
  localTer3Q = JSON.parse( localStorage.getItem( "terrarium3"));

  localStorage.setItem("cache1", JSON.stringify( cache1 ));
  localCache1Q = JSON.parse( localStorage.getItem( "cache1"));

  localStorage.setItem("cache2", JSON.stringify( cache2 ));
  localCache2Q = JSON.parse( localStorage.getItem( "cache2"));

  localStorage.setItem("cache3", JSON.stringify( cache3 ));
  localCache3Q = JSON.parse( localStorage.getItem( "cache3"));





  //1

 citTotal = citadine.quantity *20;
 citQ.textContent = citadine.quantity;
 row1[3].textContent = citTotal + "€";

  if (citadine.quantity === 0) {
  for (i=0; i< row1.length; i++){
  row1[i].style.display = 'none';
  }
 } else {
   for (i=0; i< row1.length; i++){
   row1[i].style.display = '';
   }
 }








//2
rurTotal =rurale.quantity *20;
rurQ.textContent = rurale.quantity;
row2[3].textContent = rurTotal + "€";

if (rurale.quantity === 0) {
for (i=0; i< row2.length; i++){
row2[i].style.display = 'none';
}
} else {
 for (i=0; i< row2.length; i++){
 row2[i].style.display = '';
 }
}

//3
semTotal = semanciere.quantity *20;
semQ.textContent = semanciere.quantity;
row3[3].textContent = semTotal + "€";

if (semanciere.quantity === 0) {
for (i=0; i< row3.length; i++){
row3[i].style.display = 'none';
}
} else {
 for (i=0; i< row3.length; i++){
 row3[i].style.display = '';
 }
}

//4
lithoTotal = lithoterapie.quantity *20;
lithoQ.textContent = lithoterapie.quantity;
row4[3].textContent = lithoTotal + "€";

if (lithoterapie.quantity === 0) {
for (i=0; i< row4.length; i++){
row4[i].style.display = 'none';
}
} else {
 for (i=0; i< row4.length; i++){
 row4[i].style.display = '';
 }
}

//5
ter1Total = terrarium1.quantity *30;
ter1Q.textContent = terrarium1.quantity;
row5[3].textContent = ter1Total + "€";

if (terrarium1.quantity === 0) {
for (i=0; i< row5.length; i++){
row5[i].style.display = 'none';
}
} else {
 for (i=0; i< row5.length; i++){
 row5[i].style.display = '';
 }
}

//6
ter2Total = terrarium2.quantity *25;
ter2Q.textContent = terrarium2.quantity;
row6[3].textContent = ter2Total + "€";

if (terrarium2.quantity === 0) {
for (i=0; i< row6.length; i++){
row6[i].style.display = 'none';
}
} else {
 for (i=0; i< row6.length; i++){
 row6[i].style.display = '';
 }
}

//7
ter3Total = terrarium3.quantity *20;
ter3Q.textContent = terrarium3.quantity;
row7[3].textContent = ter3Total + "€";

if (terrarium3.quantity === 0) {
for (i=0; i< row7.length; i++){
row7[i].style.display = 'none';
}
} else {
 for (i=0; i< row7.length; i++){
 row7[i].style.display = '';
 }
}

//8
cache1Total = cache1.quantity *10;
cache1Q.textContent = cache1.quantity;
row8[3].textContent = cache1Total + "€";

if (cache1.quantity === 0) {
for (i=0; i< row8.length; i++){
row8[i].style.display = 'none';
}
} else {
 for (i=0; i< row8.length; i++){
 row8[i].style.display = '';
 }
}

//9
cache2Total = cache2.quantity *10;
cache2Q.textContent = cache2.quantity;
row9[3].textContent = cache2Total + "€";

if (cache2.quantity === 0) {
for (i=0; i< row9.length; i++){
row9[i].style.display = 'none';
}
} else {
 for (i=0; i< row9.length; i++){
 row9[i].style.display = '';
 }
}

//10
cache3Total = cache3.quantity *10;
cache3Q.textContent = cache3.quantity;
row10[3].textContent = cache3Total + "€";

if (cache3.quantity === 0) {
for (i=0; i< row10.length; i++){
row10[i].style.display = 'none';
}
} else {
 for (i=0; i< row10.length; i++){
 row10[i].style.display = '';
 }
}

total = citTotal + rurTotal + semTotal + lithoTotal + ter1Total + ter2Total + ter3Total + cache1Total + cache2Total + cache3Total;
row11[3].textContent = total +"€";

if (total >0) {
  vide.style.display= "none";
} else {
  vide.style.display= "";
}






}

showCart();
