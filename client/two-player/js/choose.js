var player = document.querySelectorAll(".P");
var enemy = document.querySelectorAll(".E");

function choose1(element) {
  Array.from(player).forEach((child) => {
    Array.from(child.children).forEach((child) => {
      child.style.border = "unset";
    });
  });
  element.style.border = "5px solid #fff";
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
  } else if (playerid === "p15") {
    localStorage.setItem("player1", JSON.stringify(knight_1));
  } else if (playerid === "p9") {
    localStorage.setItem("player1", JSON.stringify(fire_wizard_1));
  } else if (playerid === "p17") {
    localStorage.setItem("player1", JSON.stringify(goblin_1));
  } else if (playerid === "p19") {
    localStorage.setItem("player1", JSON.stringify(skeleton_1));
  } else if (playerid === "p21") {
    localStorage.setItem("player1", JSON.stringify(hunter_1));
  } else if (playerid === "p25") {
    localStorage.setItem("player1", JSON.stringify(el_crystal_1));
  } else if (playerid === "p27") {
    localStorage.setItem("player1", JSON.stringify(el_wind_1));
  }
  object_1 = localStorage.getItem("player1");
  opp_1 = JSON.parse(object_1);
}

function choose2(element) {
  Array.from(enemy).forEach((child) => {
    Array.from(child.children).forEach((child) => {
      child.style.border = "unset";
    });
  });
  element.style.border = "5px solid #fff";
  enemyid = element.id;
  if (enemyid === "p2") {
    localStorage.setItem("player2", JSON.stringify(wizard_2));
  } else if (enemyid === "p4") {
    localStorage.setItem("player2", JSON.stringify(warrior_2));
  } else if (enemyid === "p6") {
    localStorage.setItem("player2", JSON.stringify(samurai_2));
  } else if (enemyid === "p8") {
    localStorage.setItem("player2", JSON.stringify(king_2));
  } else if (enemyid === "p10") {
    localStorage.setItem("player2", JSON.stringify(fire_wizard_2));
  } else if (enemyid === "p14") {
    localStorage.setItem("player2", JSON.stringify(evil_2));
  } else if (enemyid === "p16") {
    localStorage.setItem("player2", JSON.stringify(knight_2));
  } else if (enemyid === "p18") {
    localStorage.setItem("player2", JSON.stringify(goblin_2));
  } else if (enemyid === "p20") {
    localStorage.setItem("player2", JSON.stringify(skeleton_2));
  } else if (enemyid === "p22") {
    localStorage.setItem("player2", JSON.stringify(hunter_2));
  } else if (enemyid === "p26") {
    localStorage.setItem("player2", JSON.stringify(el_crystal_2));
  } else if (enemyid === "p28") {
    localStorage.setItem("player2", JSON.stringify(el_wind_2));
  }
  object_2 = localStorage.getItem("player2");
  opp_2 = JSON.parse(object_2);
}

var choose3 = (element) => {
  Array.from(images).forEach((child) => {
    Array.from(child.children).forEach((child) => {
      child.style.border = "unset";
    });
  });
  element.style.border = "5px solid #fff";
  let background_id = element.id;
  if (background_id === "img1") {
    localStorage.setItem("background", JSON.stringify(background_1));
    background_use = background_1;
    background_use.need.imgSrc = "../img/img/background/background.jpg";
    background.scale = background_1.need.pre_scale;
  } else if (background_id === "img2") {
    localStorage.setItem("background", JSON.stringify(background_2));
    background_use = background_2;
    background.scale = background_2.need.pre_scale;
    background_use.need.imgSrc = "../img/img/background/background.png";
  } else if (background_id === "img3") {
    localStorage.setItem("background", JSON.stringify(background_3));
    background_use = background_3;
    background_use.need.imgSrc = "../img/img/background/Backgroundf.jpeg";
    background.scale = background_3.need.pre_scale;
  } else if (background_id === "img4") {
    localStorage.setItem("background", JSON.stringify(background_6));
    background_use = background_6;
    background_use.need.imgSrc = "../img/img/background/lap.png";
    background.scale = background_6.need.pre_scale;
  } else if (background_id === "img5") {
    localStorage.setItem("background", JSON.stringify(background_5));
    background_use = background_5;
    background_use.need.imgSrc = "../img/img/background/Image.png";
    background.scale = background_5.need.pre_scale;
  } else if (background_id === "img6") {
    localStorage.setItem("background", JSON.stringify(background_4));
    background_use = background_4;
    background_use.need.imgSrc = "../img/img/background/bulkhead.png";
    background.scale = background_4.need.pre_scale;
  }

  background.image.src = element.src;
};
