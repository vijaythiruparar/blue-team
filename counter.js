let number=0;
const disp=document.getElementById("counterDisplay");
const buttonpress=document.getElementById("counterBtn");
function clickbtn(){
    number++;
    if(number>10){
        number=0;
    }
    disp.textContent=number;
}
buttonpress.addEventListener("click",clickbtn);