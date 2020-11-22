var user_run=0;
var computer_run=0;
var userCurrent_score=0;
var compCurrent_score=0;
const zero_shot = document.getElementById("zero");
const one_shot = document.getElementById("one");
const two_shot = document.getElementById("two");
const three_shot = document.getElementById("three");
const four_shot = document.getElementById("four");
const five_shot = document.getElementById("five");
const six_shot = document.getElementById("six");
const zero_ball = document.getElementById("zeroball");
const one_ball = document.getElementById("oneball");
const two_ball = document.getElementById("twoball");
const three_ball = document.getElementById("threeball");
const four_ball = document.getElementById("fourball");
const five_ball = document.getElementById("fiveball");
const six_ball = document.getElementById("sixball");
const userScore= document.querySelector(".userScore");
const computerScore = document.querySelector(".computerScore");
const display = document.getElementById("demo");
const displayN = document.getElementById("demo1");
const displayM = document.getElementById("demo2");
const displayO = document.getElementById("demo3");
const banner = document.getElementById("demo4");
const banner_two = document.getElementById("demo5");
const off = document.querySelector(".choicesBat");

//jquery

$(document).ready(function(){
    $("#myBtn").click(function(){
        $("button").hide();
        $("#demo6").append("Match Started.Now score runs to set a target.").fadeOut(6000);
    })
})





//user win

function winBat(user_run, computerball){
    userCurrent_score = userCurrent_score + user_run ;
    userScore.innerHTML = userCurrent_score+":";
    banner.innerHTML= "You hit " + user_run+ " || Bot bowled " +computerball;


    console.log("Score: " +userCurrent_score);
}

//userlose

function loseBat(target, userhit,computerball){
    banner.innerHTML = "You hit " + userhit + " || Bot bowled " +computerball;
    display.innerHTML = "YOU OUT !";
    displayN.innerHTML = "Target is: " +target;
    fade();
    
    bowling();
   

}

//comp win

function winBowl(computer_run,userball){
    compCurrent_score = compCurrent_score + computer_run;
    computerScore.innerHTML = compCurrent_score;
    banner_two.innerHTML = "Bot hit " + computer_run + " || You bowled " +userball;

    
    
    if(compCurrent_score > userCurrent_score)
    {
        displayO.innerHTML = "LOSE!! BOT BEATS YOU !";
        fade_two();
    }
   
   
    console.log("Score: " +compCurrent_score);

}

//comp lose

function loseBowl(neededRun,comphit,userball){
    banner_two.innerHTML = "Bot hit " + comphit + " || You bowled " +userball;
    displayM.innerHTML ="BOT OUT!";
    if(userCurrent_score === neededRun){
        displayO.innerHTML = "ITS DRAW!"
    }
    else (userCurrent_score > neededRun)
    {
        displayO.innerHTML = "WON!! YOU BEATS BOT !"
    }
    fade_two();
   

}




//computershot

function computerShot(){
    var result=Math.floor(Math.random()*7);
    return result;
}




//userbat

function gameBat(shot){
    var computerChoice = computerShot();
    var userChoice = shot;
    if(userChoice === computerChoice){
        loseBat(userCurrent_score,userChoice,computerChoice);
    }
    else{
        winBat(userChoice,computerChoice);
    }

    console.log("user run is" + userChoice);
    console.log("bot ball is "+computerChoice);
}

//compbat

function gameBowl(shot){
    var computerChoice = computerShot();
    var userChoice = shot;
    if(userChoice === computerChoice){
       loseBowl(compCurrent_score,computerChoice,userChoice);
    }
    else{
        winBowl(computerChoice,userChoice);
    }

    console.log(" bot run is" + computerChoice);
    console.log("user ball is "+userChoice);

}











//batting

function myStart(){
    
         zero_shot.addEventListener('click', function(){ 
             gameBat(0);
         })

         one_shot.addEventListener('click', function(){ 
            gameBat(1);
        })

        two_shot.addEventListener('click', function(){ 
            gameBat(2);
        })

        three_shot.addEventListener('click', function(){ 
            gameBat(3);
        })

        four_shot.addEventListener('click', function(){ 
            gameBat(4);
        })

        five_shot.addEventListener('click', function(){ 
            gameBat(5);
        })

        six_shot.addEventListener('click', function(){ 
            gameBat(6);
        })

 }

//bowling

function bowling(){

    zero_ball.addEventListener('click', function(){ 
        gameBowl(0);
    })

    one_ball.addEventListener('click', function(){ 
       gameBowl(1);
   })

   two_ball.addEventListener('click', function(){ 
       gameBowl(2);
   })

   three_ball.addEventListener('click', function(){ 
       gameBowl(3);
   })

   four_ball.addEventListener('click', function(){ 
       gameBowl(4);
   })

   five_ball.addEventListener('click', function(){ 
       gameBowl(5);
   })

   six_ball.addEventListener('click', function(){ 
       gameBowl(6);
   })

}




//hide function

function fade(){
    $(document).ready(function(){
        $(".choicesBat").mouseover(function(){
            $(this).hide();
        })
    })


}

//hide 2nd func

function fade_two(){
    $(document).ready(function(){
        $(".choicesBall").mouseover(function(){
            $(this).hide();
        })
    })

}