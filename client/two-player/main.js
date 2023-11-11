var playerNamee = document.querySelector("#player1_name");
var EnemyNamee = document.querySelector("#player2_name");
var btn = document.querySelector("#start");
var h = document.querySelector("h4");
var P_pre = document.querySelector("#player1");
var E_pre = document.querySelector("#player2");

var character = document.querySelector(".table");
var backgrounds = document.querySelector(".backgrounds");
var names = document.querySelector(".names");
var start = document.querySelector(".start");
var images = document.querySelectorAll(".images");
var next = document.getElementById("next");
var prev = document.getElementById("prev");

var background_use = background_2;

var playerid;
var enemyid;

var object_1;
var opp_1;
var object_2;
var opp_2;

var state;

if (localStorage.getItem("player1") === null) {
  opp_1 = wizard_1;
} else {
  object_1 = localStorage.getItem("player1");
  opp_1 = JSON.parse(object_1);
}
if (localStorage.getItem("player2") === null) {
  opp_2 = wizard_2;
} else {
  object_2 = localStorage.getItem("player2");
  opp_2 = JSON.parse(object_2);
}
const canvas = document.getElementById("canvas");
const C = canvas.getContext("2d");

canvas.width = 800;
canvas.height = 500;
C.fillRect(0, 0, canvas.width, canvas.height);

var gravity = 0;

var background = new sprite({
  position: {
    x: background_use.position.x,
    y: background_use.position.y,
  },
  imageSrc: background_use.need.imgPre,
  width: background_use.need.width,
  height: background_use.need.height,
  scale: background_use.need.pre_scale,
});

player_pre = new Fighter({
  position: {
    x: 20,
    y: 0,
  },
  imageSrc: opp_1.sprites.preview.imgSrc,
  framemax: opp_1.sprites.idle.framemax,
  scale: opp_1.scale,
  offset: {
    x: opp_1.offset.x,
    y: opp_1.offset.y,
  },
});
enemy_pre = new Fighter({
  position: {
    x: 500,
    y: 0,
  },
  imageSrc: opp_2.sprites.preview.imgSrc,
  framemax: opp_2.sprites.idle.framemax,
  scale: opp_2.scale,
  offset: {
    x: opp_2.offset.x,
    y: opp_2.offset.y,
  },
});
function refresh() {
  player_pre = new Fighter({
    position: {
      x: 100,
      y: 250,
    },
    imageSrc: opp_1.sprites.preview.imgSrc,
    framemax: opp_1.sprites.idle.framemax,
    scale: opp_1.scale,
    offset: {
      x: opp_1.offset.x,
      y: opp_1.offset.y,
    },
  });
  enemy_pre = new Fighter({
    position: {
      x: 800,
      y: 250,
    },
    imageSrc: opp_2.sprites.preview.imgSrc,
    framemax: opp_2.sprites.idle.framemax,
    scale: opp_2.scale,
    offset: {
      x: 420,
      y: opp_2.offset.y,
    },
  });
}
function animate() {
  window.requestAnimationFrame(animate);
  C.fillStyle = "rgba(184, 136, 4, 0.808)";
  C.fillRect(0, 0, canvas.width, canvas.height);
  background.update();
  player_pre.update();
  enemy_pre.update();
}
animate();
setInterval(() => {
  refresh();
}, 1000);
function choose() {
  pop.style.animation = "choose 1s ease-out";
  setTimeout(() => {
    pop.style.animation = "unset";
  }, 2200);
}

window.onload = () => {
  localStorage.clear();
  window.screenY = 0;
  state = "char";
  character.style.display = "block";
  backgrounds.style.display = "none";
  names.style.display = "none";
  start.style.display = "none";
};

function go() {
  if (state === "char") {
    character.style.display = "none";
    backgrounds.style.display = "block";
    state = "back";
  } else if (state === "back") {
    backgrounds.style.display = "none";
    names.style.display = "block";
    start.style.display = "block";
    state = "name";
  }
}

function back() {
  if (state === "name") {
    backgrounds.style.display = "block";
    names.style.display = "none";
    start.style.display = "none";
    state = "back";
  } else if (state === "back") {
    character.style.display = "block";
    backgrounds.style.display = "none";
    state = "char";
  }
}

btn.addEventListener("click", () => {
  if (
    localStorage.getItem("player1") !== null &&
    localStorage.getItem("player2") !== null &&
    localStorage.getItem("background") !== null
  ) {
    if (playerNamee.value !== "" && EnemyNamee.value !== "") {
      localStorage.setItem("p1_name", playerNamee.value);
      localStorage.setItem("p2_name", EnemyNamee.value);
      window.location.href = "./the main/index.html";
    } else {
      h.innerHTML = "⛔ Please enter your name !!!";

      h.style.opacity = 1;
    }
  } else {
    h.style.opacity = 1;

    h.innerHTML = "⛔ Please Enter EVERY thing!!!";
  }
});
