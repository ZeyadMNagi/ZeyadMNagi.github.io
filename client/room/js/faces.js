const wizard = [wizard_1, wizard_2];
const warrior = [warrior_1, warrior_2];
const samurai = [samurai_1, samurai_2];
const king = [king_1, king_2];
const fire = [fire_wizard_1, fire_wizard_2];
const evil = [evil_1, evil_2];
const knight = [knight_1, knight_2];
const goblin = [goblin_1, goblin_2];
const skeleton = [skeleton_1, skeleton_2];
const hunter = [hunter_1, hunter_2];
const el_crystal = [el_crystal_1, el_crystal_2];
const el_wind = [el_wind_1, el_wind_2];

function face_P(i) {
  // Update player character based on class name
  if (player.name === "wizard") {
    player = wizard[i];
  } else if (player.name === "warrior") {
    player = warrior[i];
  } else if (player.name === "samurai") {
    player = samurai[i];
  } else if (player.name === "king") {
    player = king[i];
  } else if (player.name === "Evil wizard") {
    player = evil[i];
  } else if (player.name === "Knight") {
    player = knight[i];
  } else if (player.name === "fire wizard") {
    player = fire[i];
  } else if (player.name === "goblin") {
    player = goblin[i];
  } else if (player.name === "skeleton") {
    player = skeleton[i];
  } else if (player.name === "idk") {
    player = hunter[i];
  } else if (player.name === "wind") {
    player = el_wind[i];
  } else if (player.name === "crystal") {
    player = el_crystal[i];
  }

  // Update player sprites and attackbox
  p1.sprites.idle.image.src = player.sprites.idle.imgSrc;
  p1.sprites.run.image.src = player.sprites.run.imgSrc;
  p1.sprites.jump.image.src = player.sprites.jump.imgSrc;
  p1.sprites.fall.image.src = player.sprites.fall.imgSrc;
  p1.sprites.attack2.image.src = player.sprites.attack2.imgSrc;
  p1.sprites.attack1.image.src = player.sprites.attack1.imgSrc;
  p1.sprites.death.image.src = player.sprites.death.imgSrc;
  p1.sprites.takehit.image.src = player.sprites.hit.imgSrc;
  p1.attackbox.offset.x = player.attackbox.offset.x;
}
