filenames=["images/dice1.png","images/dice2.png","images/dice3.png","images/dice4.png","images/dice5.png","images/dice6.png"];
var idx1=Math.random()*6;
idx1=Math.floor(idx1);
var idx2=Math.random()*6;
idx2=Math.floor(idx2);
while(idx2==idx1){
  idx2=Math.random()*6;
  idx2=Math.floor(idx2);
}
document.querySelector(".img1").src=filenames[idx1];
document.querySelector(".img2").src=filenames[idx2];
if(idx1<idx2){
  document.querySelector("h1").innerHTML='Player 2 Wins! <i class="fas fa-flag ig"></i> ';
}else{
  document.querySelector("h1").innerHTML='<i class="fas fa-flag ig"></i> Player 1 Wins!';
}
