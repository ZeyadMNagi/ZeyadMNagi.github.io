var icons = document.querySelectorAll("nav a");
var difficulty = "dN";

window.onload = () => {
  localStorage.clear();
  window.screenY = 0;
  localStorage.setItem("difficulty", difficulty);
};

var choose = (element) => {
  element.style.border = "5px solid #fff";
  playerid = element.id;
  if (playerid === "p1") {
    localStorage.setItem("player", JSON.stringify(wizard_1));
  } else if (playerid === "p3") {
    localStorage.setItem("player", JSON.stringify(warrior_1));
  } else if (playerid === "p5") {
    localStorage.setItem("player", JSON.stringify(samurai_1));
  } else if (playerid === "p7") {
    localStorage.setItem("player", JSON.stringify(king_1));
  } else if (playerid === "p13") {
    localStorage.setItem("player", JSON.stringify(evil_1));
  } else if (playerid === "p15") {
    localStorage.setItem("player", JSON.stringify(knight_1));
  } else if (playerid === "p9") {
    localStorage.setItem("player", JSON.stringify(fire_wizard_1));
  } else if (playerid === "p17") {
    localStorage.setItem("player", JSON.stringify(goblin_1));
  } else if (playerid === "p19") {
    localStorage.setItem("player", JSON.stringify(skeleton_1));
  } else if (playerid === "p21") {
    localStorage.setItem("player", JSON.stringify(hunter_1));
  } else if (playerid === "p23") {
    localStorage.setItem("player", JSON.stringify(purple_1));
  }

  choose = 0;
};
var choose_background = (element) => {
  element.style.border = "5px solid white";
  background_id = element.id;
  if (background_id === "img1") {
    localStorage.setItem("background", JSON.stringify(background_1));
  } else if (background_id === "img2") {
    localStorage.setItem("background", JSON.stringify(background_2));
  } else if (background_id === "img3") {
    localStorage.setItem("background", JSON.stringify(background_3));
  }

  choose_background = 0;
};

icons.forEach((element) => {
  element.addEventListener("click", () => {
    icons.forEach((element) => {
      element.classList.remove("active");
    });
    element.classList.add("active");
    difficulty = element.id;
    localStorage.setItem("difficulty", difficulty);
  });
});

function start() {
  if (
    localStorage.getItem("player") !== null &&
    localStorage.getItem("background") !== null
  ) {
    window.location.href = "main/index.html";
  }
}
