class Character {
  constructor({
    name,
    imgSrc,
    scale = 1,
    framemax = 1,
    sprites,
    offset = {x: 0, y: 0},
    Shop,
    need,
    attackbox
  }) {
    this.name = name;
    this.image = new Image();
    this.image.src = imgSrc;
    this.scale = scale;
    this.framemax = framemax;
    this.sprites = sprites;
    (this.offset = offset), (this.shop = Shop);
    this.need = need;
    this.attackbox = attackbox;

    for (const Sprite in this.sprites) {
      sprites[Sprite].image = new Image();
      sprites[Sprite].image.src = sprites[Sprite].imageSrc;
    }
  }
}
class Background {
  constructor({position, scale = 1, width, height, need, name}) {
    this.name = name;
    this.need = need;
    this.image = new Image();
    this.image.src = need.imgSrc;
    this.image.width = width;
    this.image.height = height;
    this.scale = scale;
    this.position = position;
    this.framecurrent = 1;
    this.framemax = 1;
  }
}

const wizard_1 = new Character({
  name: "wizard",
  scale: 2.2,
  need: {
    canJump: true,
    twoAttack: true,
    faceR: true,
  },
  offset: {
    x: 220,
    y: 155,
  },
  sprites: {
    idle: {
      imgSrc: "../../img/img/p1/Idle.png",
      framemax: 6,
    },
    run: {
      imgSrc: "../../img/img/p1/Run.png",
      framemax: 8,
    },
    jump: {
      imgSrc: "../../img/img/p1/Jump.png",
      framemax: 2,
    },
    fall: {
      imgSrc: "../../img/img/p1/Fall.png",
      framemax: 2,
    },
    death: {
      imgSrc: "../../img/img/p1/Death.png",
      framemax: 7,
    },
    hit: {
      imgSrc: "../../img/img/p1/Hit.png",
      framemax: 4,
    },
    attack1: {
      imgSrc: "../../img/img/p1/Attack1.png",
      framemax: 8,
    },
    attack2: {
      imgSrc: "../../img/img/p1/Attack2.png",
      framemax: 8,
    },
  },
  attackbox: {
    offset: {
      x: 50,
      y: 50,
    },
    width: 170,
    height: 50,
  },
});

const wizard_2 = new Character({
  name: "wizard",
  scale: 2.2,
  need: {
    canJump: true,
    twoAttack: true,
    faceR: false,
  },
  offset: {
    x: 250,
    y: 155,
  },
  sprites: {
    idle: {
      imgSrc: "../../img/img/p2/Idle.png",
      framemax: 6,
    },
    run: {
      imgSrc: "../../img/img/p2/Run.png",
      framemax: 8,
    },
    jump: {
      imgSrc: "../../img/img/p2/Jump.png",
      framemax: 2,
    },
    fall: {
      imgSrc: "../../img/img/p2/Fall.png",
      framemax: 2,
    },
    death: {
      imgSrc: "../../img/img/p2/Death.png",
      framemax: 7,
    },
    hit: {
      imgSrc: "../../img/img/p2/Hit.png",
      framemax: 4,
    },
    attack1: {
      imgSrc: "../../img/img/p2/Attack1.png",
      framemax: 8,
    },
    attack2: {
      imgSrc: "../../img/img/p2/Attack2.png",
      framemax: 8,
    },
  },
  attackbox: {
    offset: {
      x: -170,
      y: 50,
    },
    width: 170,
    height: 50,
  },
});

const warrior_1 = new Character({
  name: "warrior",
  scale: 3.5,
  need: {
    canJump: true,
    twoAttack: true,
    faceR: true,
  },
  offset: {
    x: 260,
    y: 200,
  },
  sprites: {
    idle: {
      imgSrc: "../../img/img/p3/Idle.png",
      framemax: 10,
    },
    run: {
      imgSrc: "../../img/img/p3/Run.png",
      framemax: 8,
    },
    jump: {
      imgSrc: "../../img/img/p3/Jump.png",
      framemax: 3,
    },
    fall: {
      imgSrc: "../../img/img/p3/Fall.png",
      framemax: 3,
    },
    death: {
      imgSrc: "../../img/img/p3/Death.png",
      framemax: 7,
    },
    hit: {
      imgSrc: "../../img/img/p3/Take hit.png",
      framemax: 3,
    },
    attack1: {
      imgSrc: "../../img/img/p3/Attack1.png",
      framemax: 7,
    },
    attack2: {
      imgSrc: "../../img/img/p3/Attack2.png",
      framemax: 7,
    },
  },
  attackbox: {
    offset: {
      x: 50,
      y: 50,
    },
    width: 170,
    height: 50,
  },
});

const warrior_2 = new Character({
  name: "warrior",
  scale: 3.5,
  need: {
    canJump: true,
    twoAttack: true,
    faceR: false,
  },
  offset: {
    x: 255,
    y: 200,
  },
  sprites: {
    idle: {
      imgSrc: "../../img/img/p4/Idle.png",
      framemax: 10,
    },
    run: {
      imgSrc: "../../img/img/p4/Run.png",
      framemax: 8,
    },
    jump: {
      imgSrc: "../../img/img/p4/Jump.png",
      framemax: 3,
    },
    fall: {
      imgSrc: "../../img/img/p4/Fall.png",
      framemax: 3,
    },
    death: {
      imgSrc: "../../img/img/p4/Death.png",
      framemax: 7,
    },
    hit: {
      imgSrc: "../../img/img/p4/Take hit.png",
      framemax: 3,
    },
    attack1: {
      imgSrc: "../../img/img/p4/Attack1.png",
      framemax: 7,
    },
    attack2: {
      imgSrc: "../../img/img/p4/Attack2.png",
      framemax: 7,
    },
  },
  attackbox: {
    offset: {
      x: -150,
      y: 50,
    },
    width: 170,
    height: 50,
  },
});

const samurai_1 = new Character({
  name: "samurai",
  scale: 2.9,
  need: {
    canJump: true,
    twoAttack: true,
    faceR: true,
  },
  offset: {
    x: 270,
    y: 220,
  },
  sprites: {
    idle: {
      imgSrc: "../../img/img/p5/Idle.png",
      framemax: 4,
    },
    run: {
      imgSrc: "../../img/img/p5/Run.png",
      framemax: 8,
    },
    jump: {
      imgSrc: "../../img/img/p5/Jump.png",
      framemax: 2,
    },
    fall: {
      imgSrc: "../../img/img/p5/Fall.png",
      framemax: 2,
    },
    death: {
      imgSrc: "../../img/img/p5/Death.png",
      framemax: 7,
    },
    hit: {
      imgSrc: "../../img/img/p5/Take hit.png",
      framemax: 3,
    },
    attack1: {
      imgSrc: "../../img/img/p5/Attack1.png",
      framemax: 4,
    },
    attack2: {
      imgSrc: "../../img/img/p5/Attack2.png",
      framemax: 4,
    },
  },
  attackbox: {
    offset: {
      x: 50,
      y: 50,
    },
    width: 170,
    height: 50,
  },
});

const samurai_2 = new Character({
  name: "samurai",
  scale: 2.9,
  need: {
    canJump: true,
    twoAttack: true,
    faceR: false,
  },
  offset: {
    x: 255,
    y: 220,
  },
  sprites: {
    idle: {
      imgSrc: "../../img/img/p6/Idle.png",
      framemax: 4,
    },
    run: {
      imgSrc: "../../img/img/p6/Run.png",
      framemax: 8,
    },
    jump: {
      imgSrc: "../../img/img/p6/Jump.png",
      framemax: 2,
    },
    fall: {
      imgSrc: "../../img/img/p6/Fall.png",
      framemax: 2,
    },
    death: {
      imgSrc: "../../img/img/p6/Death.png",
      framemax: 7,
    },
    hit: {
      imgSrc: "../../img/img/p6/Take hit.png",
      framemax: 3,
    },
    attack1: {
      imgSrc: "../../img/img/p6/Attack1.png",
      framemax: 4,
    },
    attack2: {
      imgSrc: "../../img/img/p6/Attack2.png",
      framemax: 4,
    },
  },
  attackbox: {
    offset: {
      x: -150,
      y: 50,
    },
    width: 170,
    height: 50,
  },
});

const king_1 = new Character({
  name: "king",
  scale: 3,
  need: {
    canJump: true,
    twoAttack: true,
    faceR: true,
  },
  offset: {
    x: 230,
    y: 160,
  },
  sprites: {
    idle: {
      imgSrc: "../../img/img/p7/Idle.png",
      framemax: 8,
    },
    run: {
      imgSrc: "../../img/img/p7/Run.png",
      framemax: 8,
    },
    jump: {
      imgSrc: "../../img/img/p7/Jump.png",
      framemax: 2,
    },
    fall: {
      imgSrc: "../../img/img/p7/Fall.png",
      framemax: 2,
    },
    death: {
      imgSrc: "../../img/img/p7/Death.png",
      framemax: 6,
    },
    hit: {
      imgSrc: "../../img/img/p7/Take hit.png",
      framemax: 4,
    },
    attack1: {
      imgSrc: "../../img/img/p7/Attack1.png",
      framemax: 4,
    },
    attack2: {
      imgSrc: "../../img/img/p7/Attack2.png",
      framemax: 4,
    },
  },
  attackbox: {
    offset: {
      x: 50,
      y: 50,
    },
    width: 170,
    height: 50,
  },

});
const king_2 = new Character({
  name: "king",
  scale: 3,
  need: {
    canJump: true,
    twoAttack: true,
    faceR: false,
  },
  offset: {
    x: 200,
    y: 160,
  },
  sprites: {
    idle: {
      imgSrc: "../../img/img/p8/Idle.png",
      framemax: 8,
    },
    run: {
      imgSrc: "../../img/img/p8/Run.png",
      framemax: 8,
    },
    jump: {
      imgSrc: "../../img/img/p8/Jump.png",
      framemax: 2,
    },
    fall: {
      imgSrc: "../../img/img/p8/Fall.png",
      framemax: 2,
    },
    death: {
      imgSrc: "../../img/img/p8/Death.png",
      framemax: 6,
    },
    hit: {
      imgSrc: "../../img/img/p8/Take hit.png",
      framemax: 4,
    },
    attack1: {
      imgSrc: "../../img/img/p8/Attack1.png",
      framemax: 4,
    },
    attack2: {
      imgSrc: "../../img/img/p8/Attack2.png",
      framemax: 4,
    },
  },
  attackbox: {
    offset: {
      x: -150,
      y: 50,
    },
    width: 170,
    height: 50,
  },
});

const evil_1 = new Character({
  name: "Evil wizard",
  scale: 3,
  need: {
    canJump: true,
    twoAttack: true,
    faceR: true,
  },
  offset: {
    x: 350,
    y: 350,
  },
  sprites: {
    idle: {
      imgSrc: "../../img/img/p13/Idle.png",
      framemax: 8,
    },
    run: {
      imgSrc: "../../img/img/p13/Run.png",
      framemax: 8,
    },
    jump: {
      imgSrc: "../../img/img/p13/Jump.png",
      framemax: 2,
    },
    fall: {
      imgSrc: "../../img/img/p13/Fall.png",
      framemax: 2,
    },
    death: {
      imgSrc: "../../img/img/p13/Death.png",
      framemax: 7,
    },
    hit: {
      imgSrc: "../../img/img/p13/Take hit.png",
      framemax: 3,
    },
    attack1: {
      imgSrc: "../../img/img/p13/Attack1.png",
      framemax: 8,
    },
    attack2: {
      imgSrc: "../../img/img/p13/Attack2.png",
      framemax: 8,
    },
  },
  attackbox: {
    offset: {
      x: 50,
      y: 50,
    },
    width: 170,
    height: 50,
  },
});

const evil_2 = new Character({
  name: "Evil wizard",
  scale: 3,
  need: {
    canJump: true,
    twoAttack: true,
    faceR: false,
  },
  offset: {
    x: 350,
    y: 350,
  },
  sprites: {
    idle: {
      imgSrc: "../../img/img/p14/Idle.png",
      framemax: 8,
    },
    run: {
      imgSrc: "../../img/img/p14/Run.png",
      framemax: 8,
    },
    jump: {
      imgSrc: "../../img/img/p14/Jump.png",
      framemax: 2,
    },
    fall: {
      imgSrc: "../../img/img/p14/Fall.png",
      framemax: 2,
    },
    death: {
      imgSrc: "../../img/img/p14/Death.png",
      framemax: 7,
    },
    hit: {
      imgSrc: "../../img/img/p14/Take hit.png",
      framemax: 3,
    },
    attack1: {
      imgSrc: "../../img/img/p14/Attack1.png",
      framemax: 8,
    },
    attack2: {
      imgSrc: "../../img/img/p14/Attack2.png",
      framemax: 8,
    },
  },
  attackbox: {
    offset: {
      x: -250,
      y: 50,
    },
    width: 250,
    height: 50,
  },
});

const knight_1 = new Character({
  name: "Knight",
  scale: 3.67,
  need: {
    canJump: true,
    twoAttack: true,
    faceR: true,
  },
  offset: {
    x: 230,
    y: 160,
  },
  sprites: {
    idle: {
      imgSrc: "../../img/img/p15/Idle.png",
      framemax: 10,
    },
    run: {
      imgSrc: "../../img/img/p15/Run.png",
      framemax: 6,
    },
    jump: {
      imgSrc: "../../img/img/p15/Jump.png",
      framemax: 2,
    },
    fall: {
      imgSrc: "../../img/img/p15/Fall.png",
      framemax: 2,
    },
    death: {
      imgSrc: "../../img/img/p15/Death.png",
      framemax: 9,
    },
    hit: {
      imgSrc: "../../img/img/p15/Get hit.png",
      framemax: 3,
    },
    attack1: {
      imgSrc: "../../img/img/p15/Attack1.png",
      framemax: 4,
    },
    attack2: {
      imgSrc: "../../img/img/p15/Attack2.png",
      framemax: 4,
    },
  },
  attackbox: {
    offset: {
      x: 50,
      y: 50,
    },
    width: 170,
    height: 50,
  },
});

const knight_2 = new Character({
  name: "Knight",
  scale: 3.67,
  need: {
    canJump: true,
    twoAttack: true,
    faceR: false,
  },
  offset: {
    x: 215,
    y: 160,
  },
  sprites: {
    idle: {
      imgSrc: "../../img/img/p16/Idle.png",
      framemax: 10,
    },
    run: {
      imgSrc: "../../img/img/p16/Run.png",
      framemax: 6,
    },
    jump: {
      imgSrc: "../../img/img/p16/Jump.png",
      framemax: 2,
    },
    fall: {
      imgSrc: "../../img/img/p16/Fall.png",
      framemax: 2,
    },
    death: {
      imgSrc: "../../img/img/p16/Death.png",
      framemax: 9,
    },
    hit: {
      imgSrc: "../../img/img/p16/Get hit.png",
      framemax: 3,
    },
    attack1: {
      imgSrc: "../../img/img/p16/Attack1.png",
      framemax: 4,
    },
    attack2: {
      imgSrc: "../../img/img/p16/Attack2.png",
      framemax: 4,
    },
  },
  attackbox: {
    offset: {
      x: -150,
      y: 50,
    },
    width: 170,
    height: 50,
  },
});

const fire_wizard_2 = new Character({
  name: "fire wizard",
  scale: 3,
  need: {
    canJump: false,
    twoAttack: false,
    faceR: false,
  },
  offset: {
    x: 200,
    y: 160,
  },
  sprites: {
    idle: {
      imgSrc: "../../img/img/p10/Idle.png",
      framemax: 8,
    },
    run: {
      imgSrc: "../../img/img/p10/Move.png",
      framemax: 8,
    },
    jump: {
      imgSrc: null,
      framemax: null,
    },
    fall: {
      imgSrc: null,
      framemax: null,
    },
    death: {
      imgSrc: "../../img/img/p10/Death.png",
      framemax: 5,
    },
    hit: {
      imgSrc: "../../img/img/p10/Take Hit.png",
      framemax: 4,
    },
    attack1: {
      imgSrc: "../../img/img/p10/Attack.png",
      framemax: 8,
    },
    attack2: {
      imgSrc: null,
      framemax: null,
    },
  },
  attackbox: {
    offset: {
      x: -150,
      y: 50,
    },
    width: 170,
    height: 50,
  },
});
const fire_wizard_1 = new Character({
  name: "fire wizard",
  scale: 3,
  need: {
    canJump: false,
    twoAttack: false,
    faceR: true,
  },
  offset: {
    x: 200,
    y: 160,
  },
  sprites: {
    idle: {
      imgSrc: "../../img/img/p9/Idle.png",
      framemax: 8,
    },
    run: {
      imgSrc: "../../img/img/p9/Move.png",
      framemax: 8,
    },
    jump: {
      imgSrc: null,
      framemax: null,
    },
    fall: {
      imgSrc: null,
      framemax: null,
    },
    death: {
      imgSrc: "../../img/img/p9/Death.png",
      framemax: 5,
    },
    hit: {
      imgSrc: "../../img/img/p9/Take Hit.png",
      framemax: 4,
    },
    attack1: {
      imgSrc: "../../img/img/p9/Attack.png",
      framemax: 8,
    },
    attack2: {
      imgSrc: null,
      framemax: null,
    },
  },
  attackbox: {
    offset: {
      x: 50,
      y: 50,
    },
    width: 170,
    height: 50,
  },
});
const goblin_1 = new Character({
  name: "goblin",
  scale: 3,
  need: {
    canJump: false,
    twoAttack: true,
    faceR: true,
  },
  offset: {
    x: 200,
    y: 150,
  },
  sprites: {
    idle: {
      imgSrc: "../../img/img/p17/Idle.png",
      framemax: 4,
    },
    run: {
      imgSrc: "../../img/img/p17/Run.png",
      framemax: 8,
    },
    jump: {
      imgSrc: null,
      framemax: null,
    },
    fall: {
      imgSrc: null,
      framemax: null,
    },
    death: {
      imgSrc: "../../img/img/p17/Death.png",
      framemax: 4,
    },
    hit: {
      imgSrc: "../../img/img/p17/Take Hit.png",
      framemax: 4,
    },
    attack1: {
      imgSrc: "../../img/img/p17/Attack.png",
      framemax: 8,
    },
    attack2: {
      imgSrc: "../../img/img/p17/Attack2.png",
      framemax: 8,
    },
  },
  attackbox: {
    offset: {
      x: 50,
      y: 50,
    },
    width: 170,
    height: 50,
  },
});
const goblin_2 = new Character({
  name: "goblin",
  scale: 3,
  need: {
    canJump: false,
    twoAttack: true,
    faceR: false,
  },
  offset: {
    x: 195,
    y: 150,
  },
  sprites: {
    idle: {
      imgSrc: "../../img/img/p18/Idle.png",
      framemax: 4,
    },
    run: {
      imgSrc: "../../img/img/p18/Run.png",
      framemax: 8,
    },
    jump: {
      imgSrc: null,
      framemax: null,
    },
    fall: {
      imgSrc: null,
      framemax: null,
    },
    death: {
      imgSrc: "../../img/img/p18/Death.png",
      framemax: 4,
    },
    hit: {
      imgSrc: "../../img/img/p18/Take Hit.png",
      framemax: 4,
    },
    attack1: {
      imgSrc: "../../img/img/p18/Attack.png",
      framemax: 8,
    },
    attack2: {
      imgSrc: "../../img/img/p18/Attack2.png",
      framemax: 8,
    },
  },
  attackbox: {
    offset: {
      x: -150,
      y: 50,
    },
    width: 170,
    height: 50,
  },
});
const skeleton_1 = new Character({
  name: "skeleton",
  scale: 3,
  need: {
    canJump: false,
    twoAttack: true,
    faceR: true,
  },
  offset: {
    x: 220,
    y: 150,
  },
  sprites: {
    idle: {
      imgSrc: "../../img/img/p19/Idle.png",
      framemax: 4,
    },
    run: {
      imgSrc: "../../img/img/p19/Walk.png",
      framemax: 4,
    },
    jump: {
      imgSrc: null,
      framemax: null,
    },
    fall: {
      imgSrc: null,
      framemax: null,
    },
    death: {
      imgSrc: "../../img/img/p19/Death.png",
      framemax: 4,
    },
    hit: {
      imgSrc: "../../img/img/p19/Take Hit.png",
      framemax: 4,
    },
    attack1: {
      imgSrc: "../../img/img/p19/Attack.png",
      framemax: 8,
    },
    attack2: {
      imgSrc: "../../img/img/p19/Attack2.png",
      framemax: 8,
    },
  },
  attackbox: {
    offset: {
      x: 50,
      y: 50,
    },
    width: 170,
    height: 50,
  },
});
const skeleton_2 = new Character({
  name: "skeleton",
  scale: 3,
  need: {
    canJump: false,
    twoAttack: true,
    faceR: false,
  },
  offset: {
    x: 180,
    y: 150,
  },
  sprites: {
    idle: {
      imgSrc: "../../img/img/p20/Idle.png",
      framemax: 4,
    },
    run: {
      imgSrc: "../../img/img/p20/Walk.png",
      framemax: 4,
    },
    jump: {
      imgSrc: null,
      framemax: null,
    },
    fall: {
      imgSrc: null,
      framemax: null,
    },
    death: {
      imgSrc: "../../img/img/p20/Death.png",
      framemax: 4,
    },
    hit: {
      imgSrc: "../../img/img/p20/Take Hit.png",
      framemax: 4,
    },
    attack1: {
      imgSrc: "../../img/img/p20/Attack.png",
      framemax: 8,
    },
    attack2: {
      imgSrc: "../../img/img/p20/Attack2.png",
      framemax: 8,
    },
  },
  attackbox: {
    offset: {
      x: -150,
      y: 50,
    },
    width: 170,
    height: 50,
  },
});

const background_3 = new Background({
  name: "forest",
  position: {
    x: 0,
    y: 0,
  },
  need: {
    imgSrc: "../../img/img/Backgroundf.jpeg",
    Shop: false,
    width: 1024,
    height: 576,
  },
  scale: 1.2,
});
const background_2 = new Background({
  name: "main",
  position: {
    x: 0,
    y: 0,
  },
  need: {
    imgSrc: "../../img/img/background.png",
    Shop: true,
    width: 1024,
    height: 576,
  },
  scale: 1.2,
});
const background_1 = new Background({
  name: "roof",
  position: {
    x: 0,
    y: 0,
  },
  need: {
    imgSrc: "../../img/img/background.jpg",
    Shop: false,
    width: 1024,
    height: 576,
  },
  scale: 1.2,
});
