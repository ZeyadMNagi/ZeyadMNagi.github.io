const canvas = document.querySelector("canvas");
const C = canvas.getContext("2d");

canvas.width = 1024;
canvas.height = 576;

C.fillRect(0, 0, canvas.width, canvas.height);

const object = localStorage.getItem("player");
const player_used = JSON.parse(object);

const background_get = localStorage.getItem("background");
const background_use = JSON.parse(background_get);

var player_use = player_used;

offset();

var scoreEl = document.getElementById("sc");

function face(i) {
  if (player_used.name === "wizard") {
    player_use = wizard[i];
  } else if (player_used.name === "warrior") {
    player_use = warrior[i];
  } else if (player_used.name === "samurai") {
    player_use = samurai[i];
  } else if (player_used.name === "king") {
    player_use = king[i];
  } else if (player_used.name === "Evil wizard") {
    player_use = evil[i];
  } else if (player_used.name === "Knight") {
    player_use = knight[i];
  } else if (player_used.name === "fire wizard") {
    player_use = fire[i];
  } else if (player_used.name === "goblin") {
    player_use = goblin[i];
  } else if (player_used.name === "skeleton") {
    player_use = skeleton[i];
  } else if (player_used.name === "idk") {
    player_use = hunter[i];
  } else if (player_used.name === "night") {
    player_use = purple[i];
  }

  player.sprites.attack1.image.src = player_use.sprites.attack1.imgSrc;

  player.sprites.attack2.image.src = player_use.sprites.attack2.imgSrc;

  player.sprites.death.image.src = player_use.sprites.death.imgSrc;

  player.sprites.fall.image.src = player_use.sprites.fall.imgSrc;

  player.sprites.takehit.image.src = player_use.sprites.hit.imgSrc;

  player.sprites.jump.image.src = player_use.sprites.jump.imgSrc;

  player.sprites.run.image.src = player_use.sprites.run.imgSrc;

  player.sprites.idle.image.src = player_use.sprites.idle.imgSrc;
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
      y: player_use.attackbox.offset.y,
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

decrease();
spawnEnemies();

let score = 0;

let lastAttackTime = 0;
const attackDelay = 1000; // 1 second

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
    } else if (
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
      scoreEl.innerHTML = score;
    }

    if (
      retangularcollision({
        rectangle1: enemy,
        rectangle2: player,
      })
    ) {
      enemy.isattacking = false;
      const currentTime = Date.now();
      if (currentTime - lastAttackTime >= attackDelay) {
        player.takehit();

        gsap.to("#ol-heal", {
          width: (100 * player.health) / player.no + "%",
        });

        enemy.attack1();

        lastAttackTime = currentTime;
      }
    }
    if (enemy.health <= 0) {
      const enemyIndex = enemies.findIndex((enemyH) => {
        return enemy === enemyH;
      });
      setTimeout(() => {
        if (enemyIndex > -1) enemies.splice(enemyIndex, 1);
      }, 500);
    }

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
