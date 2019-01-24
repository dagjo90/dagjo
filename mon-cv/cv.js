
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
      $("#menu").show();
    });

      $("#menu") && $(".submenu").mouseleave(function () {
          $("#menu").hide();
        });


    /*    (function($){
    $.fn.bounce = function(settings) {
        if(typeof settings.interval == 'undefined'){
            settings.interval = 100;
        }

        if(typeof settings.distance == 'undefined'){
            settings.distance = 10;
        }

        if(typeof settings.times == 'undefined'){
            settings.times = 4;
        }

        if(typeof settings.complete == 'undefined'){
            settings.complete = function(){};
        }

        $(this).css('position','relative');

        for(var iter=0; iter<(settings.times+1); iter++){
            $(this).animate({ top:((iter%2 == 0 ? settings.distance : settings.distance * -1)) }, settings.interval);
        }

        $(this).animate({ top: 0}, settings.interval, settings.complete);
    };
})(jQuery);

$(document).ready(function(){
    $(".profilIntro").mouseenter(function(e){
        $(".more").bounce({
            interval: 150,
            distance: 10,
            times: 5
        });
    });


});*/
