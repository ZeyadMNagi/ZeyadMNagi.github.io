var canPress = true;
var p1Jump = true;
// Handles keypress events for player 1
(event) => {
  if (canPress === true) {
    switch (event.key) {
      case "d":
        // Moves player 1 to the right
        keys.d.pressed = true;
        p1.lastkey = "d";
        canAttack_P = false;
        face_P(0);
        break;
      case "a":
        // Moves player 1 to the left
        keys.a.pressed = true;
        p1.lastkey = "a";
        canAttack_P = false;
        face_P(1);
        break;
      case "w":
        // Handles player 1 jumping
        if (player.need.canJump) {
          if (p1Jump) {
            keys.w.pressed = true;
            p1.velocity.y = -15;
            p1Jump = false;
          }
        }
        break;
      case "s":
        // Attacks if player 1 is allowed to attack
        if (canAttack_P) p1.attack1();
        break;
      case "e":
        // Attacks with a secondary attack if player 1 is allowed to attack
        if (player.need.twoAttack) {
          if (canAttack_P) p1.attack2();
        }
        break;
    }
  }
};
// keyup event listener
(event) => {
  // check pressed key
  switch (event.key) {
    case "d": // d key pressed
      keys.d.pressed = false; // update d key state
      canAttack_P = true; // allow player attack

      break;
    case "a": // a key pressed
      keys.a.pressed = false; // update a key state
      canAttack_P = true; // allow player attack

      break;
    case "w": // w key pressed
      keys.w.pressed = false; // update w key state
      break;
  }
};
