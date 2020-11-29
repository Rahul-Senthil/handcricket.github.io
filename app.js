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
const off = document.querySelector(".none");

//jquery

$(document).ready(function(){
    $("#myBtn").click(function(){
        $("#emoji1").append(" &#127951;");
        $("#zero").append("0");
        $("#one").append("1");
        $("#two").append("2");
        $("#three").append("3");
        $("#four").append("4");
        $("#five").append("5");
        $("#six").append("6");
        $("#emoji2").append("&#9918;");
        $("#zeroball").append("0");
        $("#oneball").append("1");
        $("#twoball").append("2");
        $("#threeball").append("3");
        $("#fourball").append("4");
        $("#fiveball").append("5");
        $("#sixball").append("6");
        $("#demo4").append("Click on the RUNS to hit that shot.");
        $("#demo5").append("Click on the BALL to bowl that ball.");
        $("#myBtn2").hide();
        $("#demo7").hide();
        $("#myBtn").hide();
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
    if(userCurrent_score === neededRun)
    {
        console.log(neededRun);
        displayO.innerHTML = "ITS DRAW!!";
    }
    else if(userCurrent_score > neededRun)
    {
        console.log(neededRun);
        displayO.innerHTML = "WON!! YOU BEATS BOT !";
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
        
        zero_shot.classList.add("choice");
        one_shot.classList.add("choice");
        two_shot.classList.add("choice");
        three_shot.classList.add("choice");
        four_shot.classList.add("choice");
        five_shot.classList.add("choice");
        six_shot.classList.add("choice");

        zero_ball.classList.add("choice");
        one_ball.classList.add("choice");
        two_ball.classList.add("choice");
        three_ball.classList.add("choice");
        four_ball.classList.add("choice");
        five_ball.classList.add("choice");
        six_ball.classList.add("choice");

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

//----------------------------------------------------------------------------------------------------


$(document).ready(function(){
    $("#myBtn2").click(function(){
        $("#emoji1").append("&#9918;");
        $("#zero").append("0");
        $("#one").append("1");
        $("#two").append("2");
        $("#three").append("3");
        $("#four").append("4");
        $("#five").append("5");
        $("#six").append("6");
        $("#emoji2").append(" &#127951;");
        $("#zeroball").append("0");
        $("#oneball").append("1");
        $("#twoball").append("2");
        $("#threeball").append("3");
        $("#fourball").append("4");
        $("#fiveball").append("5");
        $("#sixball").append("6");
        $("#demo4").append("Click on the BALL to bowl that ball.");
        $("#demo5").append("Click on the RUNS to hit that shot.");
        $("#myBtn").hide();
        $("#demo7").hide();
        $("#myBtn2").hide();
        $("#demo6").append("Match Started.Now try to out him earlier and chase the target.").fadeOut(6000);
    })
})





//user win

function winBat2(computer_run,userball){
    compCurrent_score = compCurrent_score + computer_run ;
    computerScore.innerHTML = compCurrent_score;
    banner.innerHTML= "Bot hit " + computer_run+ " || You bowled " +userball;


    console.log("Score: " +compCurrent_score);
}

//userlose

function loseBat2(target,comphit,userball){
    banner.innerHTML = "Bot hit " + comphit + " || You bowled " +userball;
    display.innerHTML = "BOT OUT !";
    displayN.innerHTML = "Target is: " +target;
    fade();
    
    batting();
   

}

//comp win

function winBowl2(user_run,compball){
    userCurrent_score = userCurrent_score + user_run;
    userScore.innerHTML = userCurrent_score+":";
    banner_two.innerHTML = "You hit " + user_run + " || Bot bowled " +compball;

    
    
    if(userCurrent_score > compCurrent_score)
    {
        displayO.innerHTML = "WON! YOU BEATS BOT !";
        fade_two();
    }
   
   
    console.log("Score: " +userCurrent_score);

}

//comp lose

function loseBowl2(neededRun,userhit,compball){
    banner_two.innerHTML = "You hit " + userhit + " || Bot bowled " +compball;
    displayM.innerHTML ="YOU OUT!";
    if(compCurrent_score === neededRun)
    {
        console.log(neededRun);
        displayO.innerHTML = "ITS DRAW!!";
    }
    else if(compCurrent_score > neededRun)
    {
        console.log(neededRun);
        displayO.innerHTML = "LOSE! BOT BEATS YOU !";
    }
    fade_two();
   

}




//computershot

function computerShot2(){
    var result=Math.floor(Math.random()*7);
    return result;
}




//userbat

function gameBat2(ball){
    var computerChoice = computerShot2();
    var userChoice = ball;
    if(computerChoice === userChoice){
        loseBat2(compCurrent_score,computerChoice,userChoice);
    }
    else{
        winBat2(computerChoice,userChoice);
    }

    console.log("bot run is" + computerChoice);
    console.log("your ball is "+userChoice);
}

//compbat

function gameBowl2(shot){
    var computerChoice = computerShot();
    var userChoice = shot;
    if(userChoice === computerChoice){
       loseBowl2(userCurrent_score,userChoice,computerChoice);
    }
    else{
        winBowl2(userChoice,computerChoice);
    }

    console.log(" user run is" + userChoice);
    console.log("bot ball is "+computerChoice);

}











//compbatting

function myNew(){
     
        zero_shot.classList.add("choice");
        one_shot.classList.add("choice");
        two_shot.classList.add("choice");
        three_shot.classList.add("choice");
        four_shot.classList.add("choice");
        five_shot.classList.add("choice");
        six_shot.classList.add("choice");

        zero_ball.classList.add("choice");
        one_ball.classList.add("choice");
        two_ball.classList.add("choice");
        three_ball.classList.add("choice");
        four_ball.classList.add("choice");
        five_ball.classList.add("choice");
        six_ball.classList.add("choice");

    zero_shot.addEventListener('click', function(){ 
        gameBat2(0);
    })

    one_shot.addEventListener('click', function(){ 
       gameBat2(1);
   })

   two_shot.addEventListener('click', function(){ 
       gameBat2(2);
   })

   three_shot.addEventListener('click', function(){ 
       gameBat2(3);
   })

   four_shot.addEventListener('click', function(){ 
       gameBat2(4);
   })

   five_shot.addEventListener('click', function(){ 
       gameBat2(5);
   })

   six_shot.addEventListener('click', function(){ 
       gameBat2(6);
   })

        
   
        
 }

//batting

function batting(){

    zero_ball.addEventListener('click', function(){ 
        gameBowl2(0);
    })

    one_ball.addEventListener('click', function(){ 
       gameBowl2(1);
   })

   two_ball.addEventListener('click', function(){ 
       gameBowl2(2);
   })

   three_ball.addEventListener('click', function(){ 
       gameBowl2(3);
   })

   four_ball.addEventListener('click', function(){ 
       gameBowl2(4);
   })

   five_ball.addEventListener('click', function(){ 
       gameBowl2(5);
   })

   six_ball.addEventListener('click', function(){ 
       gameBowl2(6);
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
