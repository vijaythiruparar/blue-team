
const guess=document.getElementById("guessInput");
const submit=document.getElementById("submitBtn");
const message=document.getElementById("message");
const attempt=document.getElementById("attemptCount");
const reset=document.getElementById("resetBtn");

let systemguess= Math.floor(Math.random()*100)+1;
let attempts=0;

submit.addEventListener("click",function(){

    let userguess=Number(guess.value);
    attempts++;
    attempt.textContent=attempts;
    if(userguess<1 || userguess>100)
    {
        message.textContent="Please enter number between 1 to 100";
        return;
    }
    if(userguess<systemguess)
    {
        message.textContent="Too small";
    }
    else if(userguess>systemguess)
    {
        message.textContent="Too large";
    }
    else{
        message.textContent="Great! You're Correct";
        guess.disabled=true;
        submit.disabled=true;
        reset.classList.remove("hidden");
    }
});

reset.addEventListener("click",function()
{
    let systemguess=Math.floor(Math.random()*100)+1;
    attempts=0;
    attempt.textContent=0;
    guess.value="";
    message.textContent="Good Luck!";
    guess.disabled=false;
    submit.disabled=false;
    reset.classList.add("hidden");
});
