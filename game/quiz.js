$( document ).ready(function() {
  var backgroundMusic = new Audio('happy.mp3');  //Property of monkeyman535 http://www.freesound.org/people/monkeyman535/sounds/326639/
  backgroundMusic.volume = 0.4;
  var music = setInterval(function(){
    backgroundMusic.play();
  },2400);
  $(".fa-volume-up").hide();
  $(".fa-volume-off").click(function(){
    backgroundMusic.volume = 0.0;
    $(this).hide();
    $(".fa-volume-up").show();
  });
  $(".fa-volume-up").click(function(){
    backgroundMusic.volume = 0.4;
    $(this).hide();
    $(".fa-volume-off").show();
  });
  var asked = [];
  var currentQuestion = Math.floor((Math.random() * 7) + 1);
  asked.push(currentQuestion);
  var totalQuestions = 8;
  var questionsAsked = 0;
  var input = 'qImages/pic'+currentQuestion+'.png';
  var correctAnswers = ["Subependyoma", "GBM", "Medulloblastoma", "Myxopapillary Ependymoma","OPLL","Chance Fracture","Meningioma","Hemangioblastoma"];
  var choices = [["Ependymoma", "Choroid Plexus Papilloma", "Medulloblastoma","Subependyoma"],
                  ["Lymphoma", "Metastatic tumor", "GBM","Tumafactive Demyelination"],
                  ["Medulloblastoma", "Ependymoma", "JPA", "Chordoma"],
                  ["Myxopapillary Ependymoma", "Epidural Abcess", "Schwannoma", "Astrocytoma"],
                  ["Arthritic Degeneration", "Central Cord Injury", "DISH", "OPLL"],
                  ["Burst Fracture", "Compression Fracture", "Ligamentous Injury", "Chance Fracture"],
                  ["Ependymoma", "Metastatic Tumor", "Meningioma", "Choroid Plexus Papilloma"],
                  ["Metastatic Tumor", "Hemangioblastoma", "JPA", "Abcess"]
                ];
  var needToAsk = [true,true,true,true,true,true,true,true];
  var quizMap = { 1: correctAnswers[0] , 2: correctAnswers[1] , 3: correctAnswers[2] ,
                  4: correctAnswers[3], 5: correctAnswers[4],
                  6: correctAnswers[5] , 7: correctAnswers[6], 8: correctAnswers[7]};
  $("#quizBox #yes").click(function(){
    $("#quizBox").html("<img src='"+input+"'>");
    createMultipleChoice(currentQuestion-1);
  });

  var funnyStory = "Okay. Let me tell you a funny story.<br><br>Cora, an elderly woman walked into her local St Michael's Church. The friendly usher greeted her at the door and helped her up the flight of steps, 'Where would you like to sit?' he asked politely.<br><br>'The front row please,' Cora answered amiably.<br>'You really don't want to do that,' the usher said, 'This vicar is really boring.'<br><br>'Sonny, do you happen to know who I am?' Cora inquired, looking directly at him. 'No.' he rejoined.<br><br>'I'm the vicar's mother,' Cora announced indignantly.'Do you know who I am?' he asked.<br>'No.' she said. 'Good,' he answered and disappeared.<br><br>Now let's get to work!<br>"
  var noClicked = false;
  $("#quizBox #no").click(function(){
    if (!noClicked){
      $("#quizBox").append(funnyStory);
    }
    noClicked = true;
  });

  var correctSound = new Audio('correct.mp3');
  var falseSound = new Audio('error.mp3');
  var successSound = new Audio('success.mp3');

  $("#choices").on("click", "ul li", function(){
    var answerChosen = $(this).html();
    if (correctAnswers[currentQuestion-1]!=answerChosen){
      $(this).css("background", "linear-gradient(crimson, pink)");
      $(this).css("border-color", "red");
      falseSound.play();
    }
    else{
      $(this).css("background", "linear-gradient(forestgreen,lightgreen)");
      $(this).css("border-color", "green");
      needToAsk[currentQuestion-1] = false;
      questionsAsked++;
      correctSound.play();
    }
    setTimeout(function(){
    currentQuestion = Math.floor((Math.random() * 7) + 1);
    if (questionsAsked == totalQuestions){
      successSound.play();
      $("#choices").html("");
      $("#quizBox").html("<h1>Great job! President Omama approves of you!</h1><img src='obama.png'><br><br><h1><a style = 'text-decoration: none; color: dodgerblue; text-shadow: 1px 1px white; font-weight: bold;' href='../SquirrelPacification/squirrelpacification.html'>Play Squirrel Pacification!<i class='fa fa-chevron-circle-right'></i></a><br><a style = 'text-decoration: none; color: dodgerblue; text-shadow: 1px 1px white; font-weight: bold;' href='index1.html'><br>Play Bunny Hoo Hoo!&nbsp;<i class='fa fa-chevron-circle-right'></i></a></h1>");
    }
    else{
      while (asked.indexOf(currentQuestion)>0 && !needToAsk[currentQuestion-1]){
        currentQuestion = Math.floor((Math.random() * 7) + 1);
      }
      input = 'qImages/pic'+currentQuestion+'.png';
      asked.push(currentQuestion);
      $("#quizBox").html("<img src='"+input+"' >");
      createMultipleChoice(currentQuestion-1);
    }
  },1000);
  });


  function createMultipleChoice(index){
    var inner = "<ul>";
    var choiceArray = choices[index];
    var added = [];
    for (choice in choiceArray){
      inner+= "<li>"+choiceArray[choice]+"</li>";
    }
    inner+= "</ul>";
    $("#choices").html(inner);
  }
});
