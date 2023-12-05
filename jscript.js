let gameSeq=[];
let userSeq=[];
let btn=["red","yellow","green","purple"];
let started=false;
let level=0;
let h3=document.querySelector("h3");
document.addEventListener("keypress",function(){
    if(started==false){
    console.log("Game started");
    started=true;
    levelUp();

    }   
});

function btnFlash(btns){
  btns.classList.add("flash");
  setTimeout(function(){
    btns.classList.remove("flash");
  },250);
}

 function levelUp(){
    userSeq=[];
    level++;
    h3.innerText=`Level ${level}`;
    let randidx=Math.floor(Math.random()*3);
    let randomColor=btn[randidx];
    let randombutton=document.querySelector(`.${randomColor}`);
    gameSeq.push(randomColor)
    console.log(gameSeq);
    btnFlash(randombutton);
 }
function checkans(index){
// console.log("curr level:",level);
if(userSeq[index]===gameSeq[index]){
    console.log("same value");
    if(userSeq.length==gameSeq.length){
       setTimeout(levelUp,1000);
    }
} else{
    h3.innerText=`Game Over! Press any key to start`;
    resetfun();
}
}
 function btnPress(){
    console.log("button was pressed");
    let btn=this;
    let usercolor=btn.getAttribute("id");
    userSeq.push(usercolor);
    console.log("user sequence is",userSeq);
    btnFlash(btn);
    checkans(userSeq.length-1);
 }

 let allbtn=document.querySelectorAll(".btn");
 for(btnss of allbtn){
    btnss.addEventListener("click",btnPress);
 }
 function resetfun(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
 }