$( document ).ready(function() {
  var backgroundMusic = new Audio('happy.mp3');  //Property of monkeyman535 http://www.freesound.org/people/monkeyman535/sounds/326639/
  backgroundMusic.volume = 0.4;
  $("#howTo").hide();
  var music = setInterval(function(){
    backgroundMusic.play();
  },2400);
  $(".fa-volume-up").hide();
  $(".fa-volume-off").click(function(){
    backgroundMusic.volume = 0.0;
    $(this).hide();
    $(".fa-volume-up").show();
  });
  $("#volume .fa-volume-up").click(function(){
    backgroundMusic.volume = 0.4;
    $(this).hide();
    $(".fa-volume-off").show();
  });
  $(".fa-question-circle").click(function(){
    $('#howTo').show();
  });
  $("#closeHowTo").click(function(){
    $("#howTo").hide();
  });
  $("#carrot1").hide();
  $("#carrot2").hide();
  $("#carrot3").hide();
  $("#carrot4").hide();
  $("#cupcake").hide();
  $("#startButton").click(function(){
    $(".fa-question-circle").hide();
    $("#startButton").hide();
    $("#cupcake").show();
    var minutes = 60 * 1,
        display = document.querySelector('#time');
    startTimer(minutes, display);
  });
  var whichCarrot = Math.floor((Math.random() * 4) + 1);
  var carrotID = "#carrot" + whichCarrot;
  var count = 0;
  var audio = new Audio('chomp.mp3');
  var mad = new Audio('grunt.mp3');
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
        mad.play();
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

function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    var ti = setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
          clearInterval(ti);
          $("#container").html("<h1 style='font-size: 6vw;'><a style = 'text-decoration: none; color: skyblue; text-shadow: 2px 2px white; font-weight: bold;' href='quiz.html'>On to the next challenge <i style = 'font-size:7vw;' class='fa fa-chevron-circle-right'></i>!</a></h1>");
        }
    }, 1000);
}


});
