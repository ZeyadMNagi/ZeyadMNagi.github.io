const canvas = document.querySelector("canvas");
const C = canvas.getContext("2d");

// get the player and the enemy and the background from the localstorge
var object_1 = localStorage.getItem("player1");
var opp_1 = JSON.parse(object_1);
var object_2 = localStorage.getItem("player2");
var opp_2 = JSON.parse(object_2);

var background_get = localStorage.getItem("background");
var background_use = JSON.parse(background_get);

var canPress = true;
var canAttack_P = true;
var canAttack_E = true;

var playerJump = true;
var enemyJump = true;
var player_onGround = true;
var enemy_onGround = true;

//offset for the roof background
if (opp_1.name === "Evil wizard" && background_use.name === "roof") {
  opp_1.offset.y = 270;
}
if (opp_2.name === "Evil wizard" && background_use.name === "roof") {
  opp_2.offset.y = 270;
}
if (opp_1.name === "Knight" && background_use.name === "roof") {
  opp_1.offset.y = 100;
}
if (opp_2.name === "Knight" && background_use.name === "roof") {
  opp_2.offset.y = 100;
}
if (opp_1.name === "king" && background_use.name === "roof") {
  opp_1.offset.y = 90;
}
if (opp_2.name === "king" && background_use.name === "roof") {
  opp_2.offset.y = 90;
}
if (opp_1.name === "samurai" && background_use.name === "roof") {
  opp_1.offset.y = 150;
}
if (opp_2.name === "samurai" && background_use.name === "roof") {
  opp_2.offset.y = 150;
}
if (opp_1.name === "warrior" && background_use.name === "roof") {
  opp_1.offset.y = 130;
}
if (opp_2.name === "warrior" && background_use.name === "roof") {
  opp_2.offset.y = 130;
}
if (opp_1.name === "wizard" && background_use.name === "roof") {
  opp_1.offset.y = 90;
}
if (opp_2.name === "wizard" && background_use.name === "roof") {
  opp_2.offset.y = 90;
}

//the offset for the forest background

if (opp_1.name === "Evil wizard" && background_use.name === "forest") {
  opp_1.offset.y = 285;
}
if (opp_2.name === "Evil wizard" && background_use.name === "forest") {
  opp_2.offset.y = 285;
}
if (opp_1.name === "Knight" && background_use.name === "forest") {
  opp_1.offset.y = 100;
}
if (opp_2.name === "Knight" && background_use.name === "forest") {
  opp_2.offset.y = 100;
}
if (opp_1.name === "king" && background_use.name === "forest") {
  opp_1.offset.y = 100;
}
if (opp_2.name === "king" && background_use.name === "forest") {
  opp_2.offset.y = 100;
}
if (opp_1.name === "samurai" && background_use.name === "forest") {
  opp_1.offset.y = 160;
}
if (opp_2.name === "samurai" && background_use.name === "forest") {
  opp_2.offset.y = 160;
}
if (opp_1.name === "warrior" && background_use.name === "forest") {
  opp_1.offset.y = 140;
}
if (opp_2.name === "warrior" && background_use.name === "forest") {
  opp_2.offset.y = 140;
}
if (opp_1.name === "wizard" && background_use.name === "forest") {
  opp_1.offset.y = 100;
}
if (opp_2.name === "wizard" && background_use.name === "forest") {
  opp_2.offset.y = 100;
}

canvas.width = 1024;
canvas.height = 576;
C.fillRect(0, 0, canvas.width, canvas.height);

var gravity = 0.5;

const background = new sprite({
  position: {
    x: background_use.position.x,
    y: background_use.position.y,
  },
  imageSrc: background_use.need.imgSrc,
  width: background_use.need.width,
  height: background_use.need.height
});

//the shop
if (background_use.need.Shop) {
  var shop_put = new sprite({
    position: {
      x: 600,
      y: 129,
    },
    imageSrc: "./img/shop.png",
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
  imageSrc: opp_1.sprites.idle.imgSrc,
  framemax: opp_1.sprites.idle.framemax,
  scale: opp_1.scale,
  offset: {
    x: opp_1.offset.x,
    y: opp_1.offset.y,
  },

  sprites: {
    idle: {
      imageSrc: opp_1.sprites.idle.imgSrc,
      framemax: opp_1.sprites.idle.framemax,
    },
    run: {
      imageSrc: opp_1.sprites.run.imgSrc,
      framemax: opp_1.sprites.run.framemax,
    },
    jump: {
      imageSrc: opp_1.sprites.jump.imgSrc,
      framemax: opp_1.sprites.jump.framemax,
    },
    fall: {
      imageSrc: opp_1.sprites.fall.imgSrc,
      framemax: opp_1.sprites.fall.framemax,
    },
    attack2: {
      imageSrc: opp_1.sprites.attack2.imgSrc,
      framemax: opp_1.sprites.attack2.framemax,
    },
    attack1: {
      imageSrc: opp_1.sprites.attack1.imgSrc,
      framemax: opp_1.sprites.attack1.framemax,
    },
    takehit: {
      imageSrc: opp_1.sprites.hit.imgSrc,
      framemax: opp_1.sprites.hit.framemax,
    },
    death: {
      imageSrc: opp_1.sprites.death.imgSrc,
      framemax: opp_1.sprites.death.framemax,
    },
  },
  attackbox: {
    offset: {
      x: 130,
      y: 50,
    },
    width: 170,
    height: 50,
  },
});

const enemy = new Fighter({
  position: {
    x: 600,
    y: 100,
  },
  velocity: {
    x: 0,
    y: 0,
  },
  offset: {
    x: -50,
    y: 0,
  },
  color: "blue",
  imageSrc: opp_2.sprites.idle.imgSrc,
  framemax: opp_2.sprites.idle.framemax,

  scale: opp_2.scale,
  offset: {
    x: opp_2.offset.x,
    y: opp_2.offset.y,
  },

  sprites: {
    idle: {
      imageSrc: opp_2.sprites.idle.imgSrc,
      framemax: opp_2.sprites.idle.framemax,
    },
    run: {
      imageSrc: opp_2.sprites.run.imgSrc,
      framemax: opp_2.sprites.run.framemax,
    },

    jump: {
      imageSrc: opp_2.sprites.jump.imgSrc,
      framemax: opp_2.sprites.jump.framemax,
    },
    fall: {
      imageSrc: opp_2.sprites.fall.imgSrc,
      framemax: opp_2.sprites.fall.framemax,
    },
    attack2: {
      imageSrc: opp_2.sprites.attack2.imgSrc,
      framemax: opp_2.sprites.attack2.framemax,
    },
    attack1: {
      imageSrc: opp_2.sprites.attack1.imgSrc,
      framemax: opp_2.sprites.attack1.framemax,
    },
    takehit: {
      imageSrc: opp_2.sprites.hit.imgSrc,
      framemax: opp_2.sprites.hit.framemax,
    },
    death: {
      imageSrc: opp_2.sprites.death.imgSrc,
      framemax: opp_2.sprites.death.framemax,
    },
  },
  attackbox: {
    offset: {
      x: -230,
      y: 50,
    },
    width: 150,
    height: 50,
  },
});

console.log(player);
console.log(enemy);

const keys = {
  a: {
    pressed: false,
  },
  d: {
    pressed: false,
  },
  w: {
    pressed: false,
  },
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

let lastkey;

decrease();

function animate() {
  window.requestAnimationFrame(animate);
  C.fillStyle = "black";
  C.fillRect(0, 0, canvas.width, canvas.height);
  background.update();
  if (background_use.need.Shop) {
    shop_put.update();
  }

  C.fillStyle = "rgba(255,255,255,0.15)";
  C.fillRect(0, 0, canvas.width, canvas.height);
  player.update();
  enemy.update();

  player.velocity.x = 0;
  enemy.velocity.x = 0;
  //player

  if (keys.a.pressed && player.lastkey === "a") {
    player.velocity.x = -5;
    player.switchsprite("run");
  } else if (keys.d.pressed && player.lastkey === "d") {
    player.velocity.x = 5;
    player.switchsprite("run");
  } else {
    player.switchsprite("idle");
  }

  //jump

if (opp_1.need.canJump) {
    if (player.velocity.y < 0) {
      player.switchsprite("jump");
    } else if (player.velocity.y > 0) {
      player.switchsprite("fall");
    }
}

  // Enemy movement
  if (keys.ArrowLeft.pressed && enemy.lastkey === "ArrowLeft") {
    enemy.velocity.x = -5;
    enemy.switchsprite("run");
  } else if (keys.ArrowRight.pressed && enemy.lastkey === "ArrowRight") {
    enemy.velocity.x = 5;
    enemy.switchsprite("run");
  } else {
    enemy.switchsprite("idle");
  }
  // jumping
  if (opp_2.need.canJump) {
    if (enemy.velocity.y < 0) {
      enemy.switchsprite("jump");
    } else if (enemy.velocity.y > 0) {
      enemy.switchsprite("fall");
    }
  }
  // detect for collision & enemy gets hit
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

    gsap.to("#en-heal", {
      width: enemy.health + "%",
    });
  }

  // if player misses
  if (player.isattacking && player.framecurrent === 3) {
    player.isattacking = false;
  }

  // this is where our player gets hit
  if (
    retangularcollision({
      rectangle1: enemy,
      rectangle2: player,
    }) &&
    enemy.isattacking &&
    enemy.framecurrent === 2
  ) {
    player.takehit();
    enemy.isattacking = false;

    gsap.to("#ol-heal", {
      width: player.health + "%",
    });
  }

  //missing
  if (enemy.isattacking && enemy.framecurrent === 2) {
    enemy.isattacking = false;
  }

  //end game
  if (enemy.health <= 0 || player.health <= 0) {
    determineWinner({player, enemy, timeid});
    canPress = false;
  }
  if (player.health <= 0) {
    player.switchsprite("death");
  }
  if (enemy.health <= 0) {
    enemy.switchsprite("death");
  }
  // double jump
  if (player.position.y === 330) {
    player_onGround = true;
  }

  if (!playerJump && player.velocity.y == 0 && player_onGround) {
    playerJump = true;
    player_onGround = false;
  }

  if (enemy.position.y === 330) {
    enemy_onGround = true;
  }

  if (!enemyJump && enemy.velocity.y == 0 && enemy_onGround) {
    enemyJump = true;
    enemy_onGround = false;
  }
}

animate();

window.addEventListener("keydown", (event) => {
  if (!player.dead && canPress === true) {
    switch (event.key) {
      case "d":
        keys.d.pressed = true;
        player.lastkey = "d";
        canAttack_P = false;
        break;
      case "a":
        keys.a.pressed = true;
        player.lastkey = "a";
        canAttack_P = false;
        break;
      case "w":
        if (opp_1.need.canJump) {
          if (playerJump) {
            keys.w.pressed = true;
            player.velocity.y = -15;
            playerJump = false;
          }
        }

        break;
      case "s":
        if (canAttack_P) player.attack1();
        break;
      case "e":
        if (opp_1.need.twoAttack) {
          if (canAttack_P) player.attack2();      
        }
        break;
    }
    switch (event.key) {
      case "ي":
        keys.d.pressed = true;
        player.lastkey = "d";
        canAttack_P = false;
        break;
      case "ش":
        keys.a.pressed = true;
        player.lastkey = "a";
        canAttack_P = false;
        break;
      case "ص":
        if (opp_1.need.canJump) {
          if (playerJump) {
            keys.w.pressed = true;
            player.velocity.y = -15;
            playerJump = false;
          }
        }

        break;
      case "س":
        if (canAttack_P) player.attack1();
        break;
      case "ث":
        if (opp_1.need.twoAttack) {
          if (canAttack_P) player.attack2();      
        }
        break;
    }

    if (!enemy.dead && canPress === true) {
      switch (event.key) {
        case "ArrowRight":
          keys.ArrowRight.pressed = true;
          enemy.lastkey = "ArrowRight";
          canAttack_E = false;
          break;
        case "ArrowLeft":
          keys.ArrowLeft.pressed = true;
          enemy.lastkey = "ArrowLeft";
          canAttack_E = false;
          break;
        case "ArrowUp":
          if (opp_2.need.canJump) {
            if (enemyJump) {
              keys.ArrowUp.pressed = true;
              enemy.velocity.y = -15;
              enemyJump = false;
            }
          }

          break;
        case "ArrowDown":
          if (canAttack_E) enemy.attack1();

          break;
        case " ":
          if (opp_2.need.twoAttack) {
            if (canAttack_P) enemy.attack2();      
          }
          break;
      }
    }
  }
});
window.addEventListener("keyup", (event) => {
  switch (event.key) {
    case "d":
      keys.d.pressed = false;
        canAttack_P = true;
      
      
      break;
    case "a":
      keys.a.pressed = false;
      
        canAttack_P = true;
      
      
      break;
    case "w":
      keys.w.pressed = false;
      break;
    case "ي":
      keys.d.pressed = false;
        canAttack_P = true;
      
      break;
    case "ش":
      keys.a.pressed = false;
        canAttack_P = true;
      
      break;
    case "ص":
      keys.w.pressed = false;
      break;

    case "ArrowUp":
      keys.ArrowUp.pressed = false;
      break;
    case "ArrowRight":
      keys.ArrowRight.pressed = false;
        canAttack_E = true;
      
      break;
    case "ArrowLeft":
      keys.ArrowLeft.pressed = false;
        canAttack_E = true;
      
      break;
  }
});
