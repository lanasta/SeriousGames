$( document ).ready(function() {
  $("#carrot1").hide();
  $("#carrot2").hide();
  $("#carrot3").hide();
  $("#carrot4").hide();

  var whichCarrot = Math.floor((Math.random() * 4) + 1);
  var carrotID = "#carrot" + whichCarrot;
  var count = 0;
  var audio = new Audio('chomp.mp3');
  var alive = true;
  var mouthOpen = false;

  $("#cupcake img").click(function(){
    if (!mouthOpen && alive){
      $(carrotID).show();
     if ($("#content img").attr("src") !== "hb2.png"){
      $("#content img").attr("src","hb2.png");
      audio.play();
      count += 1;
      mouthOpen = true;
      var timeOpen = Math.floor((Math.random() * 5) + 2);
      var disgustedTime = 0.4;
      if (count > 3){
        disgustedTime = 0.3;
      }
      if (count > 7){
        disgustedTime = 0.2;
      }
      var timeBeforeDisgusted = timeOpen - disgustedTime;
      setTimeout(function () {
        if (alive){
          $("#content img").attr("src","hb3.png");
        }
        setTimeout(function () {
          mouthOpen = false;
          if (alive){
            $("#content img").attr("src","hb1.png");
          }
        }, disgustedTime*1000);
      }, timeBeforeDisgusted*1000);
     }
   }
     else{
       counter -= 2;
       $("#counter").html("<p>"+counter+"</p>");
       $("#counter").css("color","red");
     }
  });

  var counter = 0;

$("#carrot1").click(function(){
    carrotID = "#carrot1";
    feedCarrot();
});
$("#carrot2").click(function(){
  carrotID = "#carrot2";
  feedCarrot();
});
$("#carrot3").click(function(){
  carrotID = "#carrot3";
  feedCarrot();
});
$("#carrot4").click(function(){
  carrotID = "#carrot4";
  feedCarrot();
});

function feedCarrot(){
      $(carrotID).hide();
      makeCarrot();
      $(carrotID).show();
      if (mouthOpen && alive){
        audio.play();
        counter+=1;
        $("#counter").html("<p>"+counter+"</p>");
        $("#counter").css("color","lightgreen");
      }
      else{
        counter -= 1;
        $("#counter").html("<p>"+counter+"</p>");
        $("#counter").css("color","red");
        $("#content img").attr("src","tantrum.gif");
        $("#cupcake img").hide();
        $(carrotID).hide();
        setTimeout(function(){
          $("#content img").attr("src","hb1.png");
          $("#cupcake img").show();
          $(carrotID).show();
        }, 2500);
      }
}

function makeCarrot(){
  whichCarrot = Math.floor((Math.random() * 4) + 1);
  carrotID = "#carrot" + whichCarrot;
}


  //$(carrotID).show();

/*  $("#carrot1").click(function(){
      alert('hi');
  });

  $("#carrot2").click(function(){
      alert('hi');
  });

  $("#carrot3").click(function(){
      alert('hi');
  });

  $("#carrot4").click(function(){
      alert('hi');
  });*/


});
