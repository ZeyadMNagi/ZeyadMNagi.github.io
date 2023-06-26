const canvas = document.querySelector("canvas");
const C = canvas.getContext("2d");

canvas.width = 1024;
canvas.height = 576;

C.fillRect(0, 0, canvas.width, canvas.height);

const object = localStorage.getItem("player");
const player_used = JSON.parse(object);

const background_get = localStorage.getItem("background");
const background_use = JSON.parse(background_get);

var player_use = wizard_1;

var scoreEl = document.getElementById("sc");

function face(i){
  player_use = wizard[i];
  player.sprites.idle.image.src = player_use.sprites.idle.imgSrc;
  player.sprites.run.image.src = player_use.sprites.run.imgSrc;
  player.sprites.jump.image.src = player_use.sprites.jump.imgSrc;
  player.sprites.fall.image.src = player_use.sprites.fall.imgSrc;
  player.sprites.attack2.image.src = player_use.sprites.attack2.imgSrc;
  player.sprites.attack1.image.src = player_use.sprites.attack1.imgSrc;
  player.sprites.death.image.src = player_use.sprites.death.imgSrc;
  player.sprites.takehit.image.src = player_use.sprites.hit.imgSrc;
  player.attackbox.offset.x = player_use.attackbox.offset.x;
}

const gravity = 0.5;

var canPress = true;
var playerJump = true;
var canAttack_P = true;
var player_onGround = true;


//sprites

const background = new sprite({
  position: {
    x: background_use.position.x,
    y: background_use.position.y,
  },
  imageSrc: background_use.need.imgSrc,
  width: background_use.need.width,
  height: background_use.need.height,
});
const background1 = new sprite({
  position: {
    x: background_use.position.x + background_use.need.width,
    y: background_use.position.y,
  },
  imageSrc: background_use.need.imgSrc,
  width: background_use.need.width,
  height: background_use.need.height,
});
const background0 = new sprite({
  position: {
    x: background_use.position.x - background_use.need.width,
    y: background_use.position.y,
  },
  imageSrc: background_use.need.imgSrc,
  width: background_use.need.width,
  height: background_use.need.height,
});
if (background_use.need.Shop) {
  var shop_put = new sprite({
    position: {
      x: 600,
      y: 129,
    },
    imageSrc: "../../img/img/shop.png",
    scale: 2.75,
    framemax: 6,
  });
}

const player = new Fighter({
  position: {
    x: 20,
    y: 0,
  },
  velocity: {
    x: 0,
    y: 0,
  },
  offset: {
    x: 0,
    y: 0,
  },
  imageSrc: player_use.sprites.idle.imgSrc,
  framemax: player_use.sprites.idle.framemax,
  scale: player_use.scale,
  offset: {
    x: player_use.offset.x,
    y: player_use.offset.y,
  },
  health: 300,
  no :300,
  damage:4,
  sprites: {
    idle: {
      imageSrc: player_use.sprites.idle.imgSrc,
      framemax: player_use.sprites.idle.framemax,
    },
    run: {
      imageSrc: player_use.sprites.run.imgSrc,
      framemax: player_use.sprites.run.framemax,
    },
    jump: {
      imageSrc: player_use.sprites.jump.imgSrc,
      framemax: player_use.sprites.jump.framemax,
    },
    fall: {
      imageSrc: player_use.sprites.fall.imgSrc,
      framemax: player_use.sprites.fall.framemax,
    },
    attack2: {
      imageSrc: player_use.sprites.attack2.imgSrc,
      framemax: player_use.sprites.attack2.framemax,
    },
    attack1: {
      imageSrc: player_use.sprites.attack1.imgSrc,
      framemax: player_use.sprites.attack1.framemax,
    },
    takehit: {
      imageSrc: player_use.sprites.hit.imgSrc,
      framemax: player_use.sprites.hit.framemax,
    },
    death: {
      imageSrc: player_use.sprites.death.imgSrc,
      framemax: player_use.sprites.death.framemax,
    },
  },
  attackbox: {
    offset: {
      x: player_use.attackbox.offset.x,
      y: 50,
    },
    width: player_use.attackbox.width,
    height: 50,
  },
});

const keys = {
  ArrowRight: {
    pressed: false,
  },
  ArrowLeft: {
    pressed: false,
  },
  ArrowUp: {
    pressed: false,
  },
};

// function moveUp() {
//   if (player_use.need.canJump) {
//     if (playerJump) {
//       keys.ArrowUp.pressed = true;
//       player.velocity.y = -15;
//       playerJump = false;
//     }
//   }
// }

// function moveLeft() {
//   keys.ArrowLeft.pressed = true;
//   player.lastkey = "ArrowLeft";
//   canAttack_P = false;
// }

// function moveRight() {
//   keys.ArrowRight.pressed = true;
//   player.lastkey = "ArrowRight";
//   canAttack_P = false;
// }

decrease();
spawnEnemies();


let score = 0;

function animate() {
  window.requestAnimationFrame(animate);
  C.clearRect(0, 0, canvas.width, canvas.height);
  background0.update();
  background.update();
  background1.update();

  if (background_use.need.Shop) {
    shop_put.update();
  }
  C.fillStyle = "rgba(255,255,255,0.15)";
  C.fillRect(0, 0, canvas.width, canvas.height);

  player.update();
  enemies.forEach((enemy) => {
    enemy.update();
  });
  player.velocity.x = 0;

  enemies.forEach((enemy) => {
    if (enemy.position.x > player.position.x && !player.dead) {
      enemy.position.x -= 2.5;
      enemy.switchsprite("run");
    } else if (enemy.position.x < player.position.x && !player.dead) {
      enemy.position.x += 2.5;
      enemy.switchsprite("run");    
    }
    else if (
      enemy.position.x === player.position.x ||
      (enemy.position.x > 0 && enemy.position.x < player.position.x + 40) ||
      (enemy.position.x < 0 && enemy.position.x > player.position.x - 40)
    ) {
      enemy.velocity.x = 0;
      enemy.switchsprite("idle");
    }
  });

  //movement
  if (
    keys.ArrowLeft.pressed &&
    player.lastkey === "ArrowLeft" &&
    player.position.x > 40
  ) {
    player.velocity.x = -5;  
    player.switchsprite("run");
  } else if (
    keys.ArrowRight.pressed &&
    player.lastkey === "ArrowRight" &&
    player.position.x < 900
  ) {
    player.velocity.x = 5;
    player.switchsprite("run");    
  } else if (
    (keys.ArrowLeft.pressed && player.lastkey === "ArrowLeft") ||
    (keys.ArrowRight.pressed && player.lastkey === "ArrowRight")
  ) {
      player.switchsprite("run");
    
    if (keys.ArrowRight.pressed && background1.position.x >= 0) {
      if (shop_put) {
        shop_put.position.x -= 5;
      }
      background.position.x -= 5;
      background1.position.x -= 5;
      background0.position.x -= 5;
      enemies.forEach((enemy) => {
        enemy.position.x -= 5;
      });
    }
    if (keys.ArrowLeft.pressed && background0.position.x <= 0) {
      if (shop_put) {
        shop_put.position.x += 5;
      }
      background.position.x += 5;
      background1.position.x += 5;
      background0.position.x += 5;
      enemies.forEach((enemy) => {
        enemy.position.x += 5;
      });
    }
  } else {
    player.switchsprite("idle");
  }

  //jump
  if (player_use.need.canJump) {
    if (player.velocity.y < 0) {  
      player.switchsprite("jump");
    } else if (player.velocity.y > 0) {  
      player.switchsprite("fall");
    }
  }

  // double jump
  if (player.position.y === 330) {
    player_onGround = true;
  }

  if (!playerJump && player.velocity.y == 0 && player_onGround) {
    playerJump = true;
    player_onGround = false;
  }

  if (!player.dead) {
    enemies.forEach((enemy) => {
      if (
        retangularcollision({
          rectangle1: enemy,
          rectangle2: player,
        })
      ) {
        enemy.attack1();
      }
    });
  }
  //attack
  enemies.forEach((enemy) => {
    if (
      retangularcollision({
        rectangle1: player,
        rectangle2: enemy,
      }) &&
      player.isattacking &&
      player.framecurrent === 3
    ) {
      enemy.takehit();
      player.isattacking = false;
      score += 50;
      scoreEl.innerHTML = score ;

    }
  });

  enemies.forEach((enemy) => {
    if (enemy.isattacking) {
      enemy.isattacking = false;
      player.takehit();

      gsap.to("#ol-heal", {
        width: scoreEl.innerHTML = score 
        ,
      });
    }
  });
  enemies.forEach(enemy=>{
    if (enemy.health <= 0 ){
      const enemyIndex =  enemies.findIndex((enemyH)=>{
        return enemy === enemyH
      })
      setTimeout(() => {
        enemies.splice(enemyIndex,1);
      }, 500);
    }
  });
  enemies.forEach((enemy) => {
    if (enemy.health <= 0 || player.health <= 0) {
      // determineWinner({player, enemy, timeid});
      canPress = false;
    }
    if (player.health <= 0) {
      player.switchsprite("death");
    }
    if (enemy.health <= 0) {
      enemy.switchsprite("death");
    }
  });
}

animate();

window.addEventListener("keydown", (event) => {
  if (!player.dead ) {
    switch (event.key) {
      case "ArrowRight":
        keys.ArrowRight.pressed = true;
        player.lastkey = "ArrowRight";
        canAttack_P = false;
        face(0);
        break;
      case "ArrowLeft":
        keys.ArrowLeft.pressed = true;
        player.lastkey = "ArrowLeft";
        canAttack_P = false;
        face(1);
      break;
      case "ArrowUp":
        if (player_use.need.canJump) {
          if (playerJump) {
            keys.ArrowUp.pressed = true;
            player.velocity.y = -15;
            playerJump = false;
          }
        }
        break;
      case "ArrowDown":
        if (canAttack_P) player.attack1();
        break;
      case " ":
        if (player_use.need.twoAttack) {
          if (canAttack_P) player.attack2();
        }
        break;
    }
  }
});

window.addEventListener("keyup", (event) => {
  switch (event.key) {
    case "ArrowUp":
      keys.ArrowUp.pressed = false;
      break;
    case "ArrowRight":
      keys.ArrowRight.pressed = false;
      canAttack_P = true;

      break;
    case "ArrowLeft":
      keys.ArrowLeft.pressed = false;
      canAttack_P = true;

      break;
  }
});

//offset for the roof background

if (player_use.name === "Evil wizard" && background_use.name === "roof") {
  player.offset.y = 270;
}
if (player_use.name === "Knight" && background_use.name === "roof") {
  player.offset.y = 100;
}
if (player_use.name === "king" && background_use.name === "roof") {
  player.offset.y = 90;
}
if (player_use.name === "samurai" && background_use.name === "roof") {
  player.offset.y = 150;
}
if (player_use.name === "warrior" && background_use.name === "roof") {
  player.offset.y = 130;
}
if (player_use.name === "wizard" && background_use.name === "roof") {
  player.offset.y = 90;
}
if (player_use.name === "goblin" && background_use.name === "roof") {
  player.offset.y = 90;
}
if (player_use.name === "skeleton" && background_use.name === "roof") {
  player.offset.y = 90;
}

if (player_use.name === "fire wizard" && background_use.name === "roof") {
  player.offset.y = 90;
}

//the offset for the forest background

if (player_use.name === "Evil wizard" && background_use.name === "forest") {
  player.offset.y = 310;
}

if (player_use.name === "Knight" && background_use.name === "forest") {
  player.offset.y = 110;
}
if (player_use.name === "king" && background_use.name === "forest") {
  player.offset.y = 110;
}

if (player_use.name === "samurai" && background_use.name === "forest") {
  player.offset.y = 170;
}
if (player_use.name === "warrior" && background_use.name === "forest") {
  player.offset.y = 150;
}
if (player_use.name === "wizard" && background_use.name === "forest") {
  player.offset.y = 110;
}
if (player_use.name === "goblin" && background_use.name === "forest") {
  player.offset.y = 110;
}
if (player_use.name === "skeleton" && background_use.name === "forest") {
  player.offset.y = 110;
}
if (player_use.name === "fire wizard" && background_use.name === "forest") {
  player.offset.y = 110;
}
