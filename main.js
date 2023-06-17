var playerNamee = document.querySelector("#player1_name");
var EnemyNamee = document.querySelector("#player2_name");
var btn = document.querySelector("#start");
var btn_sub = document.querySelector("#submit");
var  h = document.querySelector("h4");

btn_sub.addEventListener("click",()=>{
  localStorage.setItem("p1_name", playerNamee.value);
  localStorage.setItem("p2_name", EnemyNamee.value);
})





window.onload = ()=> {
    localStorage.clear();
}


function choose1(element) {
  element.style.background = "#fff";
  playerid = element.id;
  if (playerid === "p1") {
    localStorage.setItem("player1", JSON.stringify(wizard_1));
  } else if (playerid === "p3") {
    localStorage.setItem("player1", JSON.stringify(warrior_1));
  } else if (playerid === "p5") {
    localStorage.setItem("player1", JSON.stringify(samurai_1));
  } else if (playerid === "p7") {
    localStorage.setItem("player1", JSON.stringify(king_1));
  } else if (playerid === "p13") {
    localStorage.setItem("player1", JSON.stringify(evil_1));
  }else if(playerid === "p15"){
    localStorage.setItem("player1", JSON.stringify(knight_1));
  }
  // if (localStorage.getItem("player2") !== null &&
  //   localStorage.getItem("background") !== null &&
  //   localStorage.getItem("p2_name") !== null) {
  //   window.location.href = "the main/index.html";
  // }
  choose1()=function(){};
}

function choose2(element) {
  element.style.background = "#fff";
  enemyid = element.id;
  if (enemyid === "p2") {
    localStorage.setItem("player2", JSON.stringify(wizard_2));

  } else if (enemyid === "p4") {
    localStorage.setItem("player2", JSON.stringify(warrior_2));

  } else if (enemyid === "p6") {
    localStorage.setItem("player2", JSON.stringify(samurai_2));

  } else if (enemyid === "p8") {
    localStorage.setItem("player2", JSON.stringify(king_2));
  }else if (enemyid === "p14") {
    localStorage.setItem("player2", JSON.stringify(evil_2));
  }else if(enemyid === "p16"){
    localStorage.setItem("player2", JSON.stringify(knight_2));
  }
  // if (localStorage.getItem("player1") !== null &&
  //  localStorage.getItem("background") !== null&&
  //  localStorage.getItem("p2_name") !== null
  //  ) {
  //   window.location.href = "the main/index.html";
  // }
  choose2()=function(){};

}

function choose3(element){
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
}

btn.addEventListener("click",()=>{
    if (localStorage.getItem("player1") !== null &&
    localStorage.getItem("player2") !== null &&
    localStorage.getItem("background") !== null &&
    localStorage.getItem("p1_name") !== null &&
    localStorage.getItem("p2_name") !== null) {
        window.location.href = "the main/index.html";
  }else{
    h.style.opacity = 1;
    h.innerHTML = "⛔ Please Enter EVERY thing!!!";
  }
})