gamePattern = [];
clickedButton = [];
var level = 0;
lost = 1;
var i =0;
var j =0;
colors = ['red', 'yellow', 'blue', 'green'];
started = false;


function nextSequence(){
  clickedButton = [];
  j=0;
  level++;
  $("#level-title").text("Level " + level);
  randomNumber = Math.floor(Math.random() * 4);
  randomChosenColor = colors[randomNumber];
  gamePattern.push(randomChosenColor);
  $("#"+randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColor);

  console.log(gamePattern);
  console.log(level-1);

}

function displayID(key)
{
  clickedButton.push(key);
  animatePress(key);
  playSound(key);
  checkAnswer(clickedButton.length - 1)
  console.log(clickedButton);
}

function playSound(snd){
  var audio = new Audio("sounds/" + snd + ".mp3");
  audio.play();
}

function animatePress(k){
  $("#"+k).addClass("pressed");
  setTimeout(function(){
    $("#"+k).removeClass("pressed");
  }, 100);
}

$(document).keypress(function(event){
  if (event.key == 'a' || 'A'){

    if (!started) {
      $("#level-title").text("Level " + level);
      nextSequence();
      started = true;
    }
  }
});

$(document).click(function(){
  

    if (!started) {
      $("#level-title").text("Level " + level);
      nextSequence();
      started = true;
    }

});

function checkAnswer(x){
  if(gamePattern[x] === clickedButton[x]){
    if(gamePattern.length === clickedButton.length){
      setTimeout(function(){
      nextSequence();
      }, 1000);
    }
  }
  else{
    console.log("fail");
    playSound("wrong");
    $("body").addClass("game-over");
    setTimeout(function(){
        $("body").removeClass("game-over");
    }, 200);
    $("h1").text("Game over press A key to restart");
    startOver();
  }
}

function startOver() {

  //3. Inside this function, you'll need to reset the values of level, gamePattern and started variables.
  level = 0;
  gamePattern = [];
  started = false;
}

// function checkAnswer(currentLvl)
// {
//
//   if(clickedButton[currentLvl] === gamePattern[currentLvl]){
//     console.log(clickedButton);
//     console.log(gamePattern);
//     console.log(currentLvl);
//   }
//   else{
//     console.log("lost");
//   }
//   nextSequence();
// }



// function displaySequence(){
//   for (var i = 0; i<gamePattern.length; i++){
//     console.log("#"+gamePattern[i]);
//     $("#"+randomChosenColor).animate({ opacity : 0.2}, { duration:500});
//
//     $("#"+randomChosenColor).animate({ opacity : 1 });
//   }
// }
