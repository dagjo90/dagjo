
$(".profil").click(function(){
  $("#profil").slideDown(2000);
    $(".a1").fadeIn(3000);
    $(".a2").fadeIn(3000);
    $(".a3").fadeIn(3500);
    $(".a4").fadeIn(4000);
    $(".profil").slideUp(2000);
  });


  $(".competences").click(function () {
    $("#profil").slideDown(2000);
      $(".a1").fadeIn(3000);
      $(".a2").fadeIn(3000);
      $(".a3").fadeIn(3500);
      $(".a4").fadeIn(4000);
      $(".profil").slideUp(2000);
      $(".b1").fadeIn(3000);
      $(".b2").fadeIn(3500);
      $(".b3").fadeIn(5000);
      $(".competences").slideUp(2000);
    });

    $(".formation").click(function () {
      $("#profil").show();
        $(".a1").fadeIn(3000);
        $(".a2").fadeIn(3000);
        $(".a3").fadeIn(3500);
        $(".a4").fadeIn(4000);
        $(".profil").hide();
        $(".b1").show();
        $(".b2").show();
        $(".b3").show();
        $(".competences").hide();
        $(".c1").fadeIn(1000);
        $(".c2").fadeIn(1500);
        $(".c3").fadeIn(2000);
        $(".formation").hide();
      });

      $(".langues").click(function () {
        $("#profil").slideDown(2000);
          $(".a1").fadeIn(3000);
          $(".a2").fadeIn(3000);
          $(".a3").fadeIn(3500);
          $(".a4").fadeIn(4000);
          $(".profil").slideUp(2000);
          $(".b1").fadeIn(3000);
          $(".b2").fadeIn(3500);
          $(".b3").fadeIn(5000);
          $(".competences").slideUp(2000);
          $(".c1").fadeIn(2000);
          $(".c2").fadeIn(2500);
          $(".c3").fadeIn(4000);
          $(".formation").hide();
          $(".languages").slideDown(4000);
          $(".langues").hide();
        });




  $(".submenu").mouseenter(function () {
      $(".menu").show();
    });

      $(".menu") && $(".submenu").mouseleave(function () {
          $(".menu").hide();
        });


  
