window.onload = function() {
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
  if (localStorage.getItem("player2") !== null) {
    window.location.href = "the main/index.html";
  }
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
  if (localStorage.getItem("player1") !== null) {
    window.location.href = "the main/index.html";
  }
  choose2()=function(){};

}

