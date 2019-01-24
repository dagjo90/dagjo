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

  localStorage.setItem("citadine", JSON.stringify( citadine ));
  localCitQ = JSON.parse( localStorage.getItem( "citadine"));
}

function addRur () {

    if (rurale.quantity === 99) {
      rurale.quantity === 99;
      rurale.price +=0;
    } if (rurale.quantity < 99) {
      rurale.price +=20;
      rurale.quantity +=1;
    }
    localStorage.setItem("rurale", JSON.stringify( rurale ));
    localRurQ = JSON.parse( localStorage.getItem( "rurale"));
}

function addSem () {

    if (semanciere.quantity === 99) {
      semanciere.quantity === 99;
      semanciere.price +=0;
    } if (semanciere.quantity < 99) {
      semanciere.price +=20;
      semanciere.quantity +=1;
    }
    localStorage.setItem("semanciere", JSON.stringify( semanciere ));
    localSemQ = JSON.parse( localStorage.getItem( "semanciere"));
}

function addLitho () {

    if (lithoterapie.quantity === 99) {
      lithoterapie.quantity === 99;
      lithoterapie.price +=0;
    } if (lithoterapie.quantity < 99) {
      lithoterapie.price +=20;
      lithoterapie.quantity +=1;
    }
    localStorage.setItem("lithoterapie", JSON.stringify( lithoterapie ));
    localLithoQ = JSON.parse( localStorage.getItem( "lithoterapie"));
}

function addTer1 () {

    if (terrarium1.quantity === 99) {
      terrarium1.quantity === 99;
      terrarium1.price +=0;
    } if (terrarium1.quantity < 99) {
      terrarium1.price +=20;
      terrarium1.quantity +=1;
    }
    localStorage.setItem("terrarium1", JSON.stringify( terrarium1 ));
    localTer1Q = JSON.parse( localStorage.getItem( "terrarium1"));
}

function addTer2 () {

    if (terrarium2.quantity === 99) {
      terrarium2.quantity === 99;
      terrarium2.price +=0;
    } if (terrarium2.quantity < 99) {
      terrarium2.price +=20;
      terrarium2.quantity +=1;
    }
    localStorage.setItem("terrarium2", JSON.stringify( terrarium2 ));
    localTer2Q = JSON.parse( localStorage.getItem( "terrarium2"));
}

function addTer3 () {

    if (terrarium3.quantity === 99) {
      terrarium3.quantity === 99;
      terrarium3.price +=0;
    } if (terrarium3.quantity < 99) {
      terrarium3.price +=20;
      terrarium3.quantity +=1;
    }
    localStorage.setItem("terrarium3", JSON.stringify( terrarium3 ));
    localTer3Q = JSON.parse( localStorage.getItem( "terrarium3"));
}

function addCache1 () {

    if (cache1.quantity === 99) {
      cache1.quantity === 99;
      cache1.price +=0;
    } if (cache1.quantity < 99) {
      cache1.price +=20;
      cache1.quantity +=1;
    }
    localStorage.setItem("cache1", JSON.stringify( cache1 ));
    localCache1Q = JSON.parse( localStorage.getItem( "cache1"));
}

function addCache2 () {

    if (cache2.quantity === 99) {
      cache2.quantity === 99;
      cache2.price +=0;
    } if (cache2.quantity < 99) {
      cache2.price +=20;
      cache2.quantity +=1;
    }
    localStorage.setItem("cache2", JSON.stringify( cache2 ));
    localCache2Q = JSON.parse( localStorage.getItem( "cache2"));
}

function addCache3 () {

    if (cache3.quantity === 99) {
      cache3.quantity === 99;
      cache3.price +=0;
    } if (cache3.quantity < 99) {
      cache3.price +=20;
      cache3.quantity +=1;
    }
    localStorage.setItem("cache3", JSON.stringify( cache3 ));
    localCache3Q = JSON.parse( localStorage.getItem( "cache3"));
}
