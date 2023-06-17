var E_name = document.getElementById("Ename");
var P_name = document.getElementById("Pname");

var object_1 = localStorage.getItem("player1");
var opp_1 = JSON.parse(object_1);
var object_2 = localStorage.getItem("player2");
var opp_2 = JSON.parse(object_2);

var background_get = localStorage.getItem("background");
var background_use = JSON.parse(background_get) 

var PlayerName = localStorage.getItem("p1_name").toUpperCase();
var EnemyName = localStorage.getItem("p2_name").toUpperCase();


P_name.innerHTML = PlayerName;
E_name.innerHTML = EnemyName;



function retangularcollision({ rectangle1, rectangle2 }) {
    return (
      rectangle1.attackbox.position.x + rectangle1.attackbox.width >=
        rectangle2.position.x &&
      rectangle1.attackbox.position.x <=
        rectangle2.position.x + rectangle2.width &&
      rectangle1.attackbox.position.y + rectangle1.attackbox.height >=
        rectangle2.position.y &&
      rectangle1.attackbox.position.y <= rectangle2.position.y + rectangle2.height
    );
  }
function determineWinner({player , enemy ,timeid}){
    clearTimeout(timeid);
    if(player.health === enemy.health  ){
        document.querySelector('#result').innerHTML = 'TIE';
        document.querySelector('#result').style.display = 'flex';
     }else if(player.health > enemy.health ){
        document.querySelector('#result').innerHTML = PlayerName + ' WIN';
        document.querySelector('#result').style.display = 'flex';
     }else if(player.health < enemy.health){
        document.querySelector('#result').innerHTML = EnemyName + ' WIN';
        document.querySelector('#result').style.display = 'flex';
     }
     retangularcollision;
}



function closeForm() {
  document.getElementById("myForm").style.display = "none";

}
let time = 91;
let timeid;
function decrease(){
  if(time > 0  ){ 
    timeid = setTimeout(decrease, 1000) ;  
    time--;
    document.querySelector('#timer').innerHTML =  time ;
  }
  if (time===0){
    determineWinner({player,enemy,timeid});
      canPress = false;
  }
};

