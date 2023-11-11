
window.addEventListener("keydown", (event) => {
    if (!player.dead) {
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
  