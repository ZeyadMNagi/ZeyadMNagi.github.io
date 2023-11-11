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

offset();
const background = new sprite({
  position: {
    x: background_use.position.x,
    y: background_use.position.y,
  },
  imageSrc: background_use.need.imgSrc,
  width: background_use.need.width,
  height: background_use.need.height,
  scale: background_use.scale,
});

const background1 = new sprite({
  position: {
    x: background_use.position.x + background_use.need.width,
    y: background_use.position.y,
  },
  imageSrc: background_use.need.imgSrc,
  width: background_use.need.width,
  height: background_use.need.height,
  scale: background_use.scale,
});

const background0 = new sprite({
  position: {
    x: background_use.position.x - background_use.need.width,
    y: background_use.position.y,
  },
  imageSrc: background_use.need.imgSrc,
  width: background_use.need.width,
  height: background_use.need.height,
  scale: background_use.scale,
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
  health: 300,
  no: 300,
  damage: 4,
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
  color: "blue",
  imageSrc: enemy_use.sprites.idle.imgSrc,
  framemax: enemy_use.sprites.idle.framemax,

  scale: enemy_use.scale,
  offset: {
    x: enemy_use.offset.x,
    y: enemy_use.offset.y,
  },
  health: 300,
  no: 300,
  damage: 4,
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

  // C.fillStyle = "rgba(255,255,255,0.15)";
  // C.fillRect(0, 0, canvas.width, canvas.height);
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
      width: (100 * enemy.health) / enemy.no + "%",
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
      width: (100 * player.health) / player.no + "%",
    });
  }

  //missing
  if (enemy.isattacking && enemy.framecurrent === 2) {
    enemy.isattacking = false;
  }

  //end game
  if (enemy.health <= 0 || player.health <= 0) {
    determineWinner({ player, enemy, timeid });
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
