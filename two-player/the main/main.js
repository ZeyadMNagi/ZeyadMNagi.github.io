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



canvas.width = 1024;
canvas.height = 576;
C.fillRect(0, 0, canvas.width, canvas.height);

var gravity = 0.5;

var player_use = opp_1;
var enemy_use = opp_2;

const wizard = [wizard_1, wizard_2];
const warrior = [warrior_1, warrior_2];
const samurai = [samurai_1, samurai_2];
const king = [king_1, king_2];
const fire = [fire_wizard_1, fire_wizard_2];
const evil = [evil_1, evil_2];
const knight = [knight_1, knight_2];
const goblin = [goblin_1, goblin_2];
const skeleton = [skeleton_1, skeleton_2];
const hunter = [hunter_1, hunter_2 ];



function face_P(i){
  if(opp_1.name === "wizard"){
    player_use = wizard[i];
  }else if(opp_1.name === "warrior"){
    player_use = warrior[i];
  }else if(opp_1.name === "samurai"){
    player_use = samurai[i]
  }else if(opp_1.name === "king"){
    player_use = king[i]
  }else if(opp_1.name === "Evil wizard"){
    player_use = evil[i]
  }else if(opp_1.name === "Knight"){
    player_use = knight[i]
  }else if(opp_1.name === "fire wizard"){
    player_use = fire[i]
  }else if(opp_1.name === "goblin"){
    player_use = goblin[i]
  }else if(opp_1.name === "skeleton"){
    player_use = skeleton[i]
  }else if(opp_1.name === "idk"){
    player_use = hunter[i]
  }

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


function face_E(i){
  if(opp_2.name === "wizard"){
    enemy_use = wizard[i];
  }else if(opp_2.name === "warrior"){
    enemy_use = warrior[i];
  }else if(opp_2.name === "samurai"){
    enemy_use = samurai[i]
  }else if(opp_2.name === "king"){
    enemy_use = king[i]
  }else if(opp_2.name === "Evil wizard"){
    enemy_use = evil[i]
  }else if(opp_2.name === "Knight"){
    enemy_use = knight[i]
  }else if(opp_2.name === "fire wizard"){
    enemy_use = fire[i]
  }else if(opp_2.name === "goblin"){
    enemy_use = goblin[i]
  }else if(opp_2.name === "skeleton"){
    enemy_use = skeleton[i]
  }else if(opp_2.name === "idk"){
    enemy_use = hunter[i]
  }

  enemy.sprites.idle.image.src = enemy_use.sprites.idle.imgSrc;
  enemy.sprites.run.image.src = enemy_use.sprites.run.imgSrc;
  enemy.sprites.jump.image.src = enemy_use.sprites.jump.imgSrc;
  enemy.sprites.fall.image.src = enemy_use.sprites.fall.imgSrc;
  enemy.sprites.attack2.image.src = enemy_use.sprites.attack2.imgSrc;
  enemy.sprites.attack1.image.src = enemy_use.sprites.attack1.imgSrc;
  enemy.sprites.death.image.src = enemy_use.sprites.death.imgSrc;
  enemy.sprites.takehit.image.src = enemy_use.sprites.hit.imgSrc;
  enemy.attackbox.offset.x = enemy_use.attackbox.offset.x;
}



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

//the shop
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
  imageSrc: player_use.sprites.idle.imgSrc,
  framemax: player_use.sprites.idle.framemax,
  scale: player_use.scale,
  offset: {
    x: player_use.offset.x,
    y: player_use.offset.y,
  },
  health:300,
  no:300,
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
  imageSrc: enemy_use.sprites.idle.imgSrc,
  framemax: enemy_use.sprites.idle.framemax,

  scale: enemy_use.scale,
  offset: {
    x: enemy_use.offset.x,
    y: enemy_use.offset.y,
  },
  health:300,
  no:300,
  damage:4,
  sprites: {
    idle: {
      imageSrc: enemy_use.sprites.idle.imgSrc,
      framemax: enemy_use.sprites.idle.framemax,
    },
    run: {
      imageSrc: enemy_use.sprites.run.imgSrc,
      framemax: enemy_use.sprites.run.framemax,
    },

    jump: {
      imageSrc: enemy_use.sprites.jump.imgSrc,
      framemax: enemy_use.sprites.jump.framemax,
    },
    fall: {
      imageSrc: enemy_use.sprites.fall.imgSrc,
      framemax: enemy_use.sprites.fall.framemax,
    },
    attack2: {
      imageSrc: enemy_use.sprites.attack2.imgSrc,
      framemax: enemy_use.sprites.attack2.framemax,
    },
    attack1: {
      imageSrc: enemy_use.sprites.attack1.imgSrc,
      framemax: enemy_use.sprites.attack1.framemax,
    },
    takehit: {
      imageSrc: enemy_use.sprites.hit.imgSrc,
      framemax: enemy_use.sprites.hit.framemax,
    },
    death: {
      imageSrc: enemy_use.sprites.death.imgSrc,
      framemax: enemy_use.sprites.death.framemax,
    },
  },
  attackbox: {
    offset: {
      x: enemy_use.attackbox.offset.x,
      y: 50,
    },
    width: enemy_use.attackbox.width,
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

  background0.update();
  background.update();
  background1.update();
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

  if (keys.a.pressed && player.lastkey === "a" && player.position.x > 40) {
    player.velocity.x = -5;
    player.switchsprite("run");
  } else if (
    keys.d.pressed &&
    player.lastkey === "d" &&
    player.position.x < 900
  ) {
    player.velocity.x = 5;
    player.switchsprite("run");
  } else if (
    (keys.d.pressed && player.lastkey === "d") ||
    (keys.a.pressed && player.lastkey === "a")
  ) {
    player.switchsprite("run");
    if (
      keys.d.pressed &&
      background1.position.x >= 0 &&
      enemy.position.x >= 50
    ) {
      if (shop_put) {
        shop_put.position.x -= 5;
      }
      background.position.x -= 5;
      background1.position.x -= 5;
      background0.position.x -= 5;
      enemy.position.x -= 5;
      // player.scale -= 0.002;
      // enemy.scale -= 0.002;
    }
    if (
      keys.a.pressed &&
      background0.position.x <= 0 &&
      enemy.position.x <= 900
    ) {
      if (shop_put) {
        shop_put.position.x += 5;
      }
      background.position.x += 5;
      background1.position.x += 5;
      background0.position.x += 5;
      enemy.position.x += 5;
      // if(enemy.position.x >= 980 &&){
      //   background.scale -= .005;
      //   background1.scale -= .005;
      //   background0.scale -= .005;
      //   background.position.x += 5;
      //   background1.position.x += 5;
      //   background0.position.x += 5;
      // }
      // player.scale -= 0.002;
      // enemy.scale -= 0.002;
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

  // Enemy movement
  if (
    keys.ArrowLeft.pressed &&
    enemy.lastkey === "ArrowLeft" &&
    enemy.position.x > 40
  ) {
    enemy.velocity.x = -5;
    enemy.switchsprite("run");
  } else if (
    keys.ArrowRight.pressed &&
    enemy.lastkey === "ArrowRight" &&
    enemy.position.x < 900
  ) {
    enemy.velocity.x = 5;
    enemy.switchsprite("run");
  } else if (
    (keys.ArrowLeft.pressed && enemy.lastkey === "ArrowLeft") ||
    (keys.ArrowRight.pressed && enemy.lastkey === "ArrowRight")
  ) {
    enemy.switchsprite("run");
    if (
      keys.ArrowRight.pressed &&
      background1.position.x >= 0 &&
      player.position.x >= 50
    ) {
      if (shop_put) {
        shop_put.position.x -= 5;
      }

      background.position.x -= 5;
      background1.position.x -= 5;
      background0.position.x -= 5;
      player.position.x -= 5;
    }
    if (
      keys.ArrowLeft.pressed &&
      background0.position.x <= 0 &&
      player.position.x <= 900
    ) {
      if (shop_put) {
        shop_put.position.x += 5;
      }
      background.position.x += 5;
      background1.position.x += 5;
      background0.position.x += 5;
      player.position.x += 5;
    }
  } else {
    enemy.switchsprite("idle");
  }
  // jumping
  if (enemy_use.need.canJump) {
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
      width: ( 100 * enemy.health) / enemy.no  + "%",
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
      width: ( 100 * player.health) / player.no  + "%",
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
        face_P(0);
        break;
      case "a":
        keys.a.pressed = true;
        player.lastkey = "a";
        canAttack_P = false;
        face_P(1);
        break;
      case "w":
        if (player_use.need.canJump) {
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
        if (player_use.need.twoAttack) {
          if (canAttack_P) player.attack2();
        }
        break;
    }
    switch (event.key) {
      case "ي":
        keys.d.pressed = true;
        player.lastkey = "d";
        canAttack_P = false;
        face_P(0);
        break;
      case "ش":
        keys.a.pressed = true;
        player.lastkey = "a";
        canAttack_P = false;
        face_P(1);
        break;
      case "ص":
        if (player_use.need.canJump) {
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
        if (player_use.need.twoAttack) {
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
          face_E(0);
          break;
        case "ArrowLeft":
          keys.ArrowLeft.pressed = true;
          enemy.lastkey = "ArrowLeft";
          canAttack_E = false;
          face_E(1);
          break;
        case "ArrowUp":
          if (enemy_use.need.canJump) {
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
          if (enemy_use.need.twoAttack) {
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

//offset for the roof background

if (player_use.name === "Evil wizard" && background_use.name === "roof") {
  player_use.offset.y = 270;
}
if (enemy_use.name === "Evil wizard" && background_use.name === "roof") {
  enemy_use.offset.y = 270;
}
if (player_use.name === "Knight" && background_use.name === "roof") {
  player_use.offset.y = 100;
}
if (enemy_use.name === "Knight" && background_use.name === "roof") {
  enemy_use.offset.y = 100;
}
if (player_use.name === "king" && background_use.name === "roof") {
  player_use.offset.y = 90;
}
if (enemy_use.name === "king" && background_use.name === "roof") {
  enemy_use.offset.y = 90;
}
if (player_use.name === "samurai" && background_use.name === "roof") {
  player_use.offset.y = 150;
}
if (enemy_use.name === "samurai" && background_use.name === "roof") {
  enemy_use.offset.y = 150;
}
if (player_use.name === "warrior" && background_use.name === "roof") {
  player_use.offset.y = 130;
}
if (enemy_use.name === "warrior" && background_use.name === "roof") {
  enemy_use.offset.y = 130;
}
if (player_use.name === "wizard" && background_use.name === "roof") {
  player_use.offset.y = 90;
}
if (enemy_use.name === "wizard" && background_use.name === "roof") {
  enemy_use.offset.y = 90;
}
if (player_use.name === "goblin" && background_use.name === "roof") {
  player_use.offset.y = 90;
}
if (enemy_use.name === "goblin" && background_use.name === "roof") {
  enemy_use.offset.y = 90;
}
if (player_use.name === "skeleton" && background_use.name === "roof") {
  player_use.offset.y = 90;
}
if (enemy_use.name === "skeleton" && background_use.name === "roof") {
  enemy_use.offset.y = 90;
}
if (player_use.name === "fire wizard" && background_use.name === "roof") {
  player_use.offset.y = 90;
}
if (enemy_use.name === "fire wizard" && background_use.name === "roof") {
  enemy_use.offset.y = 90;
}

//the offset for the forest background

if (player_use.name === "Evil wizard" && background_use.name === "forest") {
  player_use.offset.y = 310;
}
if (enemy_use.name === "Evil wizard" && background_use.name === "forest") {
  enemy_use.offset.y = 310;
}
if (player_use.name === "Knight" && background_use.name === "forest") {
  player_use.offset.y = 110;
}
if (enemy_use.name === "Knight" && background_use.name === "forest") {
  enemy_use.offset.y = 110;
}
if (player_use.name === "king" && background_use.name === "forest") {
  player_use.offset.y = 110;
}
if (enemy_use.name === "king" && background_use.name === "forest") {
  enemy_use.offset.y = 110;
}
if (player_use.name === "samurai" && background_use.name === "forest") {
  player_use.offset.y = 170;
}
if (enemy_use.name === "samurai" && background_use.name === "forest") {
  enemy_use.offset.y = 170;
}
if (player_use.name === "warrior" && background_use.name === "forest") {
  player_use.offset.y = 150;
}
if (enemy_use.name === "warrior" && background_use.name === "forest") {
  enemy_use.offset.y = 150;
}
if (player_use.name === "wizard" && background_use.name === "forest") {
  player_use.offset.y = 110;
}
if (enemy_use.name === "wizard" && background_use.name === "forest") {
  enemy_use.offset.y = 110;
}
if (player_use.name === "goblin" && background_use.name === "forest") {
  player_use.offset.y = 110;
}
if (enemy_use.name === "goblin" && background_use.name === "forest") {
  enemy_use.offset.y = 110;
}
if (player_use.name === "skeleton" && background_use.name === "forest") {
  player_use.offset.y = 110;
}
if (enemy_use.name === "skeleton" && background_use.name === "forest") {
  enemy_use.offset.y = 110;
}
if (player_use.name === "fire wizard" && background_use.name === "forest") {
  player_use.offset.y = 110;
}
if (enemy_use.name === "fire wizard" && background_use.name === "forest") {
  enemy_use.offset.y = 110;
}
