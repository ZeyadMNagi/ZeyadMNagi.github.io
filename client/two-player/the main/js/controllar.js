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
