var playerNamee = document.querySelector("#player1_name");
var EnemyNamee = document.querySelector("#player2_name");
var   btn = document.querySelector("#start");
var h = document.querySelector("h4");
var btn_ar = document.querySelector("#btn-ar");
var btn_en = document.querySelector("#btn-en");
var layer = document.querySelector(".layer");
var pop = document.querySelector(".lang");

btn_en.addEventListener("click",()=>{
  layer.style.display = "none";
  pop.style.display = "none";
  document.body.style.height = "unset";
  document.body.style.overflow = "unset";
  localStorage.setItem("arabic",false);
  arabic = false;

});
btn_ar.addEventListener("click",()=>{
  layer.style.display = "none";
  pop.style.display = "none";
  document.body.style.height = "unset";
  document.body.style.overflow = "unset";
  
  arabic = true; 
  localStorage.setItem("arabic",true);

  document.querySelector(".head1").innerHTML = "اختر الاعب";
  document.querySelector(".head2").innerHTML = "اختر الخلفيه";
  document.querySelector(".head3").innerHTML = "ادخل اسماء الاعبين";
  document.querySelector(".head5").innerHTML = "اسم الاعب الاول";
  document.querySelector(".head4").innerHTML = "اسم الاعب الثاني";
  document.querySelector(".th2").innerHTML = "الاعب الأول";
  document.querySelector(".th1").innerHTML = "الاعب الثاني";
  playerNamee.placeholder = "ادخل الاسماء"
  EnemyNamee.placeholder = "ادخل الاسماء"
  btn.innerHTML = "ابدأ القتال"

  

});

function choose(){
  pop.style.animation = "choose 1s ease-out";
  setTimeout(() => {
    pop.style.animation = "unset"
  }, 2200);
}


window.onload = ()=> {
    localStorage.clear();
    window.screenY = 0;
}

var choose1 = (element) => {
  element.style.border = "5px solid #fff";
  playerid = element.id;
  if (playerid === "p1") {
    localStorage.setItem("player1", JSON.stringify(wizard_1));
  }
  else if (playerid === "p3") {
    localStorage.setItem("player1", JSON.stringify(warrior_1));
  }
  else if (playerid === "p5") {
    localStorage.setItem("player1", JSON.stringify(samurai_1));
  }
  else if (playerid === "p7") {
    localStorage.setItem("player1", JSON.stringify(king_1));
  }
  else if (playerid === "p13") {
    localStorage.setItem("player1", JSON.stringify(evil_1));
  }
  else if(playerid === "p15"){
    localStorage.setItem("player1", JSON.stringify(knight_1));
  }
  else if(playerid === "p9"){
    localStorage.setItem("player1", JSON.stringify(fire_wizard_1));
  }
  else if(playerid === "p17"){
    localStorage.setItem("player1", JSON.stringify(goblin_1));
  }
  else if(playerid === "p19"){
    localStorage.setItem("player1", JSON.stringify(skeleton_1));
  }
  // if (localStorage.getItem("player2") !== null &&
  // if (localStorage.getItem("player2") !== null &&
  //   localStorage.getItem("background") !== null &&
  //   localStorage.getItem("p2_name") !== null) {
  //   window.location.href = "the main/index.html";
  // }
  choose1 = 0;
}

var choose2 = (element) => {
  element.style.border = "5px solid #fff";
  enemyid = element.id;
  if (enemyid === "p2") {
    localStorage.setItem("player2", JSON.stringify(wizard_2));

  }
   else if (enemyid === "p4") {
    localStorage.setItem("player2", JSON.stringify(warrior_2));

  }
   else if (enemyid === "p6") {
    localStorage.setItem("player2", JSON.stringify(samurai_2));

  }
  else if (enemyid === "p8") {
    localStorage.setItem("player2", JSON.stringify(king_2));
  
  } 
  else if (enemyid === "p10") {
    localStorage.setItem("player2", JSON.stringify(fire_wizard_2));
  
  }
  else if (enemyid === "p14") {
    localStorage.setItem("player2", JSON.stringify(evil_2));
  
  }
  else if(enemyid === "p16"){
    localStorage.setItem("player2", JSON.stringify(knight_2));
  
  }
  else if(enemyid === "p18"){
    localStorage.setItem("player2", JSON.stringify(goblin_2));
  
  }
  else if(enemyid === "p20"){
    localStorage.setItem("player2", JSON.stringify(skeleton_2));
  
  }
  // if (localStorage.getItem("player1") !== null &&
  //  localStorage.getItem("background") !== null&&
  //  localStorage.getItem("p2_name") !== null
  //  ) {
  //   window.location.href = "the main/index.html";
  // }
  choose2 = 0;

}

var choose3 = (element) => {
  element.style.border = "5px solid white";
  background_id = element.id
  if (background_id === "img1") {
    localStorage.setItem("background",JSON.stringify(background_1));
  }else if(background_id === "img2"){
    localStorage.setItem("background",JSON.stringify(background_2));
  }else if(background_id === "img3"){
    localStorage.setItem("background",JSON.stringify(background_3));
  }
  // if (localStorage.getItem("player1") !== null &&
  //  localStorage.getItem("player2") !== null &&
  // localStorage.getItem("p2_name") !== null) {
  //   window.location.href = "the main/index.html";
  // }
  choose3 = 0;
}

btn.addEventListener("click",()=>{
  if (localStorage.getItem("player1") !== null &&
  localStorage.getItem("player2") !== null &&
  localStorage.getItem("background") !== null ) {
    if(playerNamee.value !== '' && EnemyNamee.value !== ''){
      localStorage.setItem("p1_name", playerNamee.value);
      localStorage.setItem("p2_name", EnemyNamee.value);
      window.location.href = "the main/index.html";
  }else{
    if(!arabic){
      h.innerHTML = "⛔ Please enter your name !!!";
    }else{
      h.innerHTML = "ادخل الاسماء لو سمحت !!!"
    }
    h.style.opacity =1;
  }
}else{
  h.style.opacity = 1;
  if(!arabic){
    h.innerHTML = "⛔ Please Enter EVERY thing!!!";
  }else{
    h.innerHTML = "املاء جميع المتطلبات "
  }
}
})

