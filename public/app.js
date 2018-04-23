var player1=true;
var player2=false;
var balls=0;
var remain_balls=12;
var runs=0;
var wickets=0;
var over=0;
var target_score=0;
var player=document.getElementById("player");
var overs=document.getElementById("overs");
var target=document.getElementById("target");
var score=document.getElementById("score");
var playbtn=document.getElementById("playbtn");
var h= document.createElement("H2");
var t = document.createTextNode("Inning complete");


function rand(){
    return Math.floor((Math.random()*6));
}

function play(){
    if(playbtn.innerText==="Start"){
document.body.removeChild(h);
target.innerHTML="target "+target_score;
remain_balls=12;
runs=0;
wickets=0;
over=0;
if(player1){
    player2=true;
    player1=false;
}else{
    player2=true;
}
    }
    playbtn.innerText="play";
    if(player1){
        player.innerHTML="Player 1"
    }else{
        player.innerHTML="Player 2"
    }
   
var num=rand();
remain_balls--;
if(num!=0){
    runs+=num;
}else{
    wickets++;
}
if(remain_balls%6==0){
    over++;
    balls=0;
}else{
    balls++;
}
score.innerHTML= runs+"/"+wickets;
overs.innerHTML=over+"."+balls;

if(over==2 && player1 ){
    target_score=runs;
    target.innerHTML="total "+runs;
   
    h.appendChild(t);
    document.body.appendChild(h);
   
    playbtn.innerText="Start"
}
if(over==2 && player2){
    playbtn.hidden=true;
    if(target_score<runs){
  h= document.createElement("H2");
 t = document.createTextNode("Player 2 wins");
 h.appendChild(t);
 document.body.appendChild(h);
    }else if(target_score>runs){
        h= document.createElement("H2");
        t = document.createTextNode("Player 1 wins");
        h.appendChild(t);
        document.body.appendChild(h);
    }else{
        h= document.createElement("H2");
        t = document.createTextNode("Draw");
        h.appendChild(t);
        document.body.appendChild(h);
    }
}
}