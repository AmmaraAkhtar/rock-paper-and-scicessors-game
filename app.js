let boxes=document.querySelectorAll(".box");
let youScore=document.querySelector("#you");
let compScore=document.querySelector("#comp");
let msg=document.querySelector("#message-box");
let msg1=document.querySelector("#message");
let X=0;
let Y=0;

const winner=(user,user1,comp1)=>{
if(user){
  X++;
  youScore.innerText=X;
  msg.innerText=`User win--user ${user1} beats computer ${comp1}`;
  msg1.style.backgroundColor="darkgreen";
  console.log(msg);
  

}
else{
  Y++;
  compScore.innerText=Y;
  msg.innerText= `User Lose--computer ${comp1} beats user ${user1}`;
  msg1.style.backgroundColor="red";
}
}
const draw=()=>{
  console.log("match was draw");
  msg.innerText="Match Was Draw";
  msg1.style.backgroundColor="black";
  msg1.style.color="White";
}
const computer=()=>{
   arr=["paper","rock","scissors"];
let compChoice=Math.floor(Math.random()*3);
return arr[compChoice];
};
const playGame=(user)=>{
  let userTurn=true;
  let comp= computer();
     if(comp==user){
       draw();
     }
     else if(user=="paper"){
        userTurn=comp=="scissors"?false:true;
        winner(userTurn,user,comp);
     }
     else if(user=="scissors"){
      userTurn=comp=="rock"?false:true;
      winner(userTurn,user,comp);
   }
   else{
    userTurn=comp=="paper"?false:true;
    winner(userTurn,user,comp);
   }

};
boxes.forEach((box)=>{
  box.addEventListener("click",()=>{
     console.log("button was clicked");
     let userChoice=box.getAttribute("id");
     playGame(userChoice);
  });
});