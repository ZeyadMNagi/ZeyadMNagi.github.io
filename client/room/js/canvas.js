const canvas = document.querySelector("canvas");
const C = canvas.getContext("2d");

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

var p1;
var p2;

var gravity = 0.5;

const background = new sprite({
  position: {
    x: background_2.position.x,
    y: background_2.position.y,
  },
  imageSrc: background_2.need.imgSrc,
  width: background_2.need.width,
  height: background_2.need.height,
  scale: background_2.scale,
});

const background1 = new sprite({
  position: {
    x: background_2.position.x + background_2.need.width,
    y: background_2.position.y,
  },
  imageSrc: background_2.need.imgSrc,
  width: background_2.need.width,
  height: background_2.need.height,
  scale: background_2.scale,
});

const background0 = new sprite({
  position: {
    x: background_2.position.x - background_2.need.width,
    y: background_2.position.y,
  },
  imageSrc: background_2.need.imgSrc,
  width: background_2.need.width,
  height: background_2.need.height,
  scale: background_2.scale,
});

//the shop
if (background_2.need.Shop) {
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
function start() {
  p1 = new Fighter({
    position: {
      x: 20,
      y: 0,
    },
    velocity: {
      x: 0,
      y: 0,
    },
    imageSrc: player.sprites.idle.imgSrc,
    framemax: player.sprites.idle.framemax,
    scale: player.scale,
    offset: {
      x: player.offset.x,
      y: player.offset.y,
    },
    health: 300,
    no: 300,
    damage: 4,
    sprites: {
      idle: {
        imageSrc: player.sprites.idle.imgSrc,
        framemax: player.sprites.idle.framemax,
      },
      run: {
        imageSrc: player.sprites.run.imgSrc,
        framemax: player.sprites.run.framemax,
      },
      jump: {
        imageSrc: player.sprites.jump.imgSrc,
        framemax: player.sprites.jump.framemax,
      },
      fall: {
        imageSrc: player.sprites.fall.imgSrc,
        framemax: player.sprites.fall.framemax,
      },
      attack2: {
        imageSrc: player.sprites.attack2.imgSrc,
        framemax: player.sprites.attack2.framemax,
      },
      attack1: {
        imageSrc: player.sprites.attack1.imgSrc,
        framemax: player.sprites.attack1.framemax,
      },
      takehit: {
        imageSrc: player.sprites.hit.imgSrc,
        framemax: player.sprites.hit.framemax,
      },
      death: {
        imageSrc: player.sprites.death.imgSrc,
        framemax: player.sprites.death.framemax,
      },
    },
    attackbox: {
      offset: {
        x: player.attackbox.offset.x,
        y: 50,
      },
      width: player.attackbox.width,
      height: 50,
    },
  });
  p2 = new Fighter({
    position: {
      x: 600,
      y: 100,
    },
    velocity: {
      x: 0,
      y: 0,
    },
    color: "blue",
    imageSrc: enemy.sprites.idle.imgSrc,
    framemax: enemy.sprites.idle.framemax,

    scale: enemy.scale,
    offset: {
      x: enemy.offset.x,
      y: enemy.offset.y,
    },
    health: 300,
    no: 300,
    damage: 4,
    sprites: {
      idle: {
        imageSrc: enemy.sprites.idle.imgSrc,
        framemax: enemy.sprites.idle.framemax,
      },
      run: {
        imageSrc: enemy.sprites.run.imgSrc,
        framemax: enemy.sprites.run.framemax,
      },

      jump: {
        imageSrc: enemy.sprites.jump.imgSrc,
        framemax: enemy.sprites.jump.framemax,
      },
      fall: {
        imageSrc: enemy.sprites.fall.imgSrc,
        framemax: enemy.sprites.fall.framemax,
      },
      attack2: {
        imageSrc: enemy.sprites.attack2.imgSrc,
        framemax: enemy.sprites.attack2.framemax,
      },
      attack1: {
        imageSrc: enemy.sprites.attack1.imgSrc,
        framemax: enemy.sprites.attack1.framemax,
      },
      takehit: {
        imageSrc: enemy.sprites.hit.imgSrc,
        framemax: enemy.sprites.hit.framemax,
      },
      death: {
        imageSrc: enemy.sprites.death.imgSrc,
        framemax: enemy.sprites.death.framemax,
      },
    },
    attackbox: {
      offset: {
        x: enemy.attackbox.offset.x,
        y: 50,
      },
      width: enemy.attackbox.width,
      height: 50,
    },
  });
  animate();
}

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

socket.on("Update", (e) => {
  // Set positions for players and backgrounds
  p1.position.x = e.allPosition.p2X;
  p2.position.x = e.allPosition.p1X;
  p1.position.y = e.allPosition.p2Y;
  p2.position.y = e.allPosition.p1Y;
  background0.position.x = e.allPosition.b0;
  background.position.x = e.allPosition.b;
  background1.position.x = e.allPosition.b1;

  // Update backgrounds
  background0.update();
  background.update();
  background1.update();

  // Update shop if needed
  if (background_2.need.Shop) {
    shop_put.update();
  }

  // Update players
  p1.update();
  p2.update();

  // Log updated positions
  console.log(e.allPosition);
});

let lastkey;
function animate() {
  window.requestAnimationFrame(animate);
  C.fillStyle = "black";
  C.fillRect(0, 0, canvas.width, canvas.height);

  background0.update();
  background.update();
  background1.update();
  if (background_2.need.Shop) {
    shop_put.update();
  }

  p1.update();
  p2.update();

  p1.velocity.x = 0;
  p2.velocity.x = 0;

  if (keys.a.pressed && p1.lastkey === "a" && p1.position.x > 40) {
    p1.velocity.x = -5;
    p1.switchsprite("run");
    if (found.amI) {
      socket.emit("positionUpdate", {
        p1X: p2.position.x,
        p2X: p1.position.x,
        p1Y: p2.position.y,
        p2Y: p2.position.y,
        b1: background1.position.x,
        b0: background0.position.x,
        b: background.position.x,
      });
    } else {
      socket.emit("positionUpdate", {
        p1X: p1.position.x,
        p2X: p2.position.x,
        p1Y: p1.position.y,
        p2Y: p2.position.y,
        b1: background1.position.x,
        b0: background0.position.x,
        b: background.position.x,
      });
    }
  } else if (keys.d.pressed && p1.lastkey === "d" && p1.position.x < 900) {
    p1.velocity.x = 5;
    p1.switchsprite("run");
    if (found.amI) {
      socket.emit("positionUpdate", {
        p1X: p2.position.x,
        p2X: p1.position.x,
        p1Y: p2.position.y,
        p2Y: p2.position.y,
        b1: background1.position.x,
        b0: background0.position.x,
        b: background.position.x,
      });
    } else {
      socket.emit("positionUpdate", {
        p1X: p1.position.x,
        p2X: p2.position.x,
        p1Y: p1.position.y,
        p2Y: p2.position.y,
        b1: background1.position.x,
        b0: background0.position.x,
        b: background.position.x,
      });
    }
  } else if (
    (keys.d.pressed && p1.lastkey === "d") ||
    (keys.a.pressed && p1.lastkey === "a")
  ) {
    p1.switchsprite("run");
    if (keys.d.pressed && background1.position.x >= 0 && p2.position.x >= 50) {
      if (shop_put) {
        shop_put.position.x -= 5;
      }
      background.position.x -= 5;
      background1.position.x -= 5;
      background0.position.x -= 5;
      p2.position.x -= 5;
      socket.emit("positionUpdate", {
        p1X: p1.position.x,
        p2X: p2.position.x,
        p1Y: p1.position.y,
        p2Y: p2.position.y,
        b1: background1.position.x,
        b0: background0.position.x,
        b: background.position.x,
      });
      console.log(p1.position, p2.position);
    }
    if (keys.a.pressed && background0.position.x <= 0 && p2.position.x <= 900) {
      if (shop_put) {
        shop_put.position.x += 5;
      }
      background.position.x += 5;
      background1.position.x += 5;
      background0.position.x += 5;
      p2.position.x += 5;
      socket.emit("positionUpdate", {
        p1X: p1.position.x,
        p2X: p2.position.x,
        p1Y: p1.position.y,
        p2Y: p2.position.y,
        b1: background1.position.x,
        b0: background0.position.x,
        b: background.position.x,
      });
      console.log(p1.position, p2.position);
    }
  } else {
    p1.switchsprite("idle");
  }
  //jump

  if (player.need.canJump) {
    if (p1.velocity.y < 0) {
      p1.switchsprite("jump");
    } else if (p1.velocity.y > 0) {
      p1.switchsprite("fall");
    }
  }

  // detect for collision & enemy gets hit
  if (
    retangularcollision({
      rectangle1: p1,
      rectangle2: p2,
    }) &&
    p1.isattacking &&
    p1.framecurrent === 3
  ) {
    p2.takehit();
    p1.isattacking = false;

    gsap.to("#en-heal", {
      width: (100 * p2.health) / p2.no + "%",
    });
  }

  // if player misses
  if (p1.isattacking && p1.framecurrent === 3) {
    p1.isattacking = false;
  }
  //end game
  if (p2.health <= 0 || p1.health <= 0) {
    determineWinner({ p1, p2, timeid });
    canPress = false;
  }
  if (p1.health <= 0) {
    p1.switchsprite("death");
  }
  if (p2.health <= 0) {
    p2.switchsprite("death");
  }
  // double jump
  if (p1.position.y === 330) {
    player_onGround = true;
  }

  if (!playerJump && p1.velocity.y == 0 && player_onGround) {
    playerJump = true;
    player_onGround = false;
  }

  if (p2.position.y === 330) {
    enemy_onGround = true;
  }

  if (!enemyJump && p2.velocity.y == 0 && enemy_onGround) {
    enemyJump = true;
    enemy_onGround = false;
  }
}
