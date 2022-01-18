"use strict";


/*
(document.querySelector(".message").textContent) = "correct"

document.querySelector(".score").textContent
document.querySelector(".number").textContent 
document.querySelector(".guess").value ;
*/

let secretNumber = Math.trunc(Math.random()*20+1)
console.log(secretNumber);

let scoreNumber = 10;
console.log(typeof scoreNumber);

let highScore = 0;

const setMessage = (message) =>{
    (document.querySelector(".message").textContent) = message

}

document.querySelector(".check").addEventListener(
    "click", 
    function(){
       const numberGuessed = Number(document.querySelector(".guess").value)
        
        if(!numberGuessed){
            (document.querySelector(".message").textContent) = "choose a numer"
            
        }

        if(secretNumber==numberGuessed){
            setMessage("Correct number, cogratulation") 
            document.querySelector("body").style.backgroundColor = "green"
            document.querySelector(".number").textContent = secretNumber 
            document.querySelector(".number").style.fontSize = "7rem "

            if(scoreNumber>highScore){
                 highScore = scoreNumber
                 document.querySelector(".highscore").textContent = highScore
            }
            
           
        }else{
            secretNumber>numberGuessed?
                setMessage("too low")
                :
                setMessage("too high") ;
            
            
            if (scoreNumber > 1){
                scoreNumber --;
                ( document.querySelector(".score").textContent) = scoreNumber ;
            }else{
                 setMessage("Game over") ;
                ( document.querySelector(".score").textContent) = 0;
            
            }

          

        }
        }
    
)


document.querySelector(".again").addEventListener("click",
function(){
    document.querySelector(".number").textContent = "?";
    document.querySelector(".message").textContent = "Start Guessing";
    scoreNumber = 10
    document.querySelector(".score").textContent = scoreNumber
    document.querySelector(".guess").value = "";
    document.querySelector("body").style.background="#222";
    secretNumber = Math.trunc(Math.random()*20+1);
    console.log(secretNumber);




}
)


