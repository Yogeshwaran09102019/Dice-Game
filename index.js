var rand1=Math.floor((Math.random()*6)+1);
if(rand1===1){
  document.querySelector(".img1").setAttribute("src","images/dice1.png");
}
if(rand1===2){
  document.querySelector(".img1").setAttribute("src","images/dice2.png");
}
if(rand1===3){
  document.querySelector(".img1").setAttribute("src","images/dice3.png");
}
if(rand1===4){
  document.querySelector(".img1").setAttribute("src","images/dice4.png");
}
if(rand1===5){
  document.querySelector(".img1").setAttribute("src","images/dice5.png");
}
if(rand1===6){
  document.querySelector(".img1").setAttribute("src","images/dice6.png");
}
var rand2=Math.floor((Math.random()*6)+1);
if(rand2===1){
  document.querySelector(".img2").setAttribute("src","images/dice1.png");
}
if(rand2===2){
  document.querySelector(".img2").setAttribute("src","images/dice2.png");
}
if(rand2===3){
  document.querySelector(".img2").setAttribute("src","images/dice3.png");
}
if(rand2===4){
  document.querySelector(".img2").setAttribute("src","images/dice4.png");
}
if(rand2===5){
  document.querySelector(".img2").setAttribute("src","images/dice5.png");
}
if(rand2===6){
  document.querySelector(".img2").setAttribute("src","images/dice6.png");
}

if(rand1>rand2){
  document.querySelector("h1").innerHTML="🚩Player 1 wins!";
}
else if(rand1<rand2){
  document.querySelector("h1").innerHTML="Player 2 wins!🚩";
}
else{
  document.querySelector("h1").innerHTML="It's a Draw!";
}
