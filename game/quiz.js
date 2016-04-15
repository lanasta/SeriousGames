$( document ).ready(function() {
  var asked = [];
  var currentQuestion = Math.floor((Math.random() * 7) + 1);
  asked.push(currentQuestion);
  var input = 'qImages/pic'+currentQuestion+'.png';
  var answersArray = ["52 y/o F with Headaches","22 y/o Car Accident","56 y/o M Difficulty Walking At Night","33 y/o M Leg Numbness and Post Contrast",
                      "19 y/o M Brain Lesion","32 y/o F Headaches post","52 y/o M with Headaches"];
  var quizMap = { 1: answersArray[0] , 2: answersArray[1] , 3: answersArray[2] ,
                  4: answersArray[3], 5: answersArray[4],
                  6: answersArray[5] , 7: answersArray[6]};
  $("#content").html("<img src='"+input+"'>");

});
