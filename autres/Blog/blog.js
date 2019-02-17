var slideIndex = 1;
showSlides(slideIndex);

// button controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// dots controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

let interval = setInterval(function() {
  showSlides(slideIndex += 1);
}, 5000);



function showSlides(n) {
  var slides = document.getElementsByClassName("slide");
  var dots = document.getElementsByClassName("dot");
  var i;

  if (n > slides.length) { // si tu avance après le dernier slide
    slideIndex = 1;
  } if (n < 1) { // si tu retournes en arriere après le slide 1
    slideIndex = slides.length;
  }


  for (i = 0; i < slides.length; i++) { //evites d'afficher 2 images à la fois
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) { //idem pour les dots en activité
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
