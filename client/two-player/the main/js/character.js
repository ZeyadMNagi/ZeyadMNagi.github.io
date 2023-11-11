class Character {
  constructor({
    name,
    imgSrc,
    scale = 1,
    framemax = 1,
    sprites,
    offset = { x: 0, y: 0 },
    Shop,
    need,
    attackbox,
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
  constructor({ position, scale = 1, width, height, need, name }) {
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
    preview: {
      imgSrc: "../img/img/p1/idle.png",
    },
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
    preview: {
      imgSrc: "../img/img/p2/Idle.png",
    },
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
    preview: {
      imgSrc: "../img/img/p3/idle.png",
    },

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
    preview: {
      imgSrc: "../img/img/p4/Idle.png",
    },
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
    preview: {
      imgSrc: "../img/img/p5/Idle.png",
    },
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
    preview: {
      imgSrc: "../img/img/p6/Idle.png",
    },
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
    preview: {
      imgSrc: "../img/img/p7/Idle.png",
    },
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
    preview: {
      imgSrc: "../img/img/p8/Idle.png",
    },
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
    preview: {
      imgSrc: "../img/img/p13/Idle.png",
    },
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
    preview: {
      imgSrc: "../img/img/p14/Idle.png",
    },
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
    preview: {
      imgSrc: "../img/img/p15/Idle.png",
    },
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
    preview: {
      imgSrc: "../img/img/p16/Idle.png",
    },
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
    preview: {
      imgSrc: "../img/img/p10/Idle.png",
    },
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
    preview: {
      imgSrc: "../img/img/p9/Idle.png",
    },
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
    preview: {
      imgSrc: "../img/img/p17/Idle.png",
    },
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
    preview: {
      imgSrc: "../img/img/p18/Idle.png",
    },
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
    preview: {
      imgSrc: "../img/img/p19/Idle.png",
    },
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
    preview: {
      imgSrc: "../img/img/p20/Idle.png",
    },
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

const hunter_1 = new Character({
  name: "idk",
  scale: 3,
  need: {
    canJump: false,
    twoAttack: false,
    faceR: false,
  },
  offset: {
    x: 200,
    y: 140,
  },
  sprites: {
    preview: {
      imgSrc: "../img/img/p21/Idle.png",
    },
    idle: {
      imgSrc: "../../img/img/p21/idle.png",
      framemax: 8,
    },
    run: {
      imgSrc: "../../img/img/p21/Run.png",
      framemax: 8,
    },
    jump: {
      imgSrc: "../../img/img/p21/Jump.png",
      framemax: 2,
    },
    fall: {
      imgSrc: "../../img/img/p21/Fall.png",
      framemax: 2,
    },
    death: {
      imgSrc: "../../img/img/p21/Death.png",
      framemax: 8,
    },
    hit: {
      imgSrc: "../../img/img/p21/Take hit.png",
      framemax: 3,
    },
    attack1: {
      imgSrc: "../../img/img/p21/Attack1.png",
      framemax: 5,
    },
    attack2: {
      imgSrc: "../../img/img/p21/Attack2.png",
      framemax: 5,
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

const hunter_2 = new Character({
  name: "idk",
  scale: 3,
  need: {
    canJump: false,
    twoAttack: false,
    faceR: false,
  },
  offset: {
    x: 200,
    y: 140,
  },
  sprites: {
    preview: {
      imgSrc: "../img/img/p22/Idle.png",
    },
    idle: {
      imgSrc: "../../img/img/p22/idle.png",
      framemax: 8,
    },
    run: {
      imgSrc: "../../img/img/p22/Run.png",
      framemax: 8,
    },
    jump: {
      imgSrc: "../../img/img/p22/Jump.png",
      framemax: 2,
    },
    fall: {
      imgSrc: "../../img/img/p22/Fall.png",
      framemax: 2,
    },
    death: {
      imgSrc: "../../img/img/p22/Death.png",
      framemax: 8,
    },
    hit: {
      imgSrc: "../../img/img/p22/Take hit.png",
      framemax: 3,
    },
    attack1: {
      imgSrc: "../../img/img/p22/Attack1.png",
      framemax: 5,
    },
    attack2: {
      imgSrc: "../../img/img/p22/Attack2.png",
      framemax: 5,
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

const purple_1 = new Character({
  name: "night",
  scale: 3,
  need: {
    canJump: false,
    twoAttack: false,
    faceR: true,
  },
  offset: {
    x: 100,
    y: 35,
  },
  sprites: {
    preview: {
      imgSrc: "../img/img/p23/Idle.png",
    },
    idle: {
      imgSrc: "../../img/img/p23/idle.png",
      framemax: 9,
    },
    run: {
      imgSrc: "../../img/img/p23/Run.png",
      framemax: 6,
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
      imgSrc: "../../img/img/p23/Death.png",
      framemax: 23,
    },
    hit: {
      imgSrc: "../../img/img/p23/hit.png",
      framemax: 5,
    },
    attack1: {
      imgSrc: "../../img/img/p23/Attack.png",
      framemax: 12,
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

const purple_2 = new Character({
  name: "night",
  scale: 3,
  need: {
    canJump: false,
    twoAttack: false,
    faceR: false,
  },
  offset: {
    x: 100,
    y: 35,
  },
  sprites: {
    preview: {
      imgSrc: "../img/img/p24/Idle.png",
    },
    idle: {
      imgSrc: "../../img/img/p24/idle.png",
      framemax: 9,
    },
    run: {
      imgSrc: "../../img/img/p24/Run.png",
      framemax: 6,
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
      imgSrc: "../../img/img/p24/Death.png",
      framemax: 23,
    },
    hit: {
      imgSrc: "../../img/img/p24/hit.png",
      framemax: 5,
    },
    attack1: {
      imgSrc: "../../img/img/p24/Attack.png",
      framemax: 12,
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

const el_crystal_1 = new Character({
  name: "crystal",
  scale: 3,
  need: {
    canJump: true,
    twoAttack: true,
    faceR: true,
  },
  offset: {
    x: 400,
    y: 230,
  },
  sprites: {
    preview: {
      imgSrc: "../img/img/p25/Idle.png",
    },
    idle: {
      imgSrc: "../../img/img/p25/idle.png",
      framemax: 8,
    },
    run: {
      imgSrc: "../../img/img/p25/Run.png",
      framemax: 7,
    },
    jump: {
      imgSrc: "../../img/img/p25/jump.png",
      framemax: 3,
    },
    fall: {
      imgSrc: "../../img/img/p25/fall.png",
      framemax: 3,
    },
    death: {
      imgSrc: "../../img/img/p25/Death.png",
      framemax: 15,
    },
    hit: {
      imgSrc: "../../img/img/p25/take_hit.png",
      framemax: 6,
    },
    attack1: {
      imgSrc: "../../img/img/p25/Attack1.png",
      framemax: 7,
    },
    attack2: {
      imgSrc: "../../img/img/p25/sp_atk.png",
      framemax: 15,
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

const el_crystal_2 = new Character({
  name: "crystal",
  scale: 3,
  need: {
    canJump: true,
    twoAttack: true,
    faceR: false,
  },
  offset: {
    x: 400,
    y: 230,
  },
  sprites: {
    preview: {
      imgSrc: "../img/img/p26/Idle.png",
    },
    idle: {
      imgSrc: "../../img/img/p26/idle.png",
      framemax: 8,
    },
    run: {
      imgSrc: "../../img/img/p26/Run.png",
      framemax: 7,
    },
    jump: {
      imgSrc: "../../img/img/p26/jump.png",
      framemax: 3,
    },
    fall: {
      imgSrc: "../../img/img/p26/fall.png",
      framemax: 3,
    },
    death: {
      imgSrc: "../../img/img/p26/Death.png",
      framemax: 15,
    },
    hit: {
      imgSrc: "../../img/img/p26/take_hit.png",
      framemax: 6,
    },
    attack1: {
      imgSrc: "../../img/img/p26/Attack1.png",
      framemax: 7,
    },
    attack2: {
      imgSrc: "../../img/img/p26/sp_atk.png",
      framemax: 15,
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

const el_wind_1 = new Character({
  name: "wind",
  scale: 1.2,
  need: {
    canJump: true,
    twoAttack: true,
    faceR: true,
  },
  offset: {
    x: 380,
    y: 245,
  },
  sprites: {
    preview: {
      imgSrc: "../img/img/p27/Idle.png",
    },
    idle: {
      imgSrc: "../../img/img/p27/idle.png",
      framemax: 8,
    },
    run: {
      imgSrc: "../../img/img/p27/Run.png",
      framemax: 8,
    },
    jump: {
      imgSrc: "../../img/img/p27/jump.png",
      framemax: 3,
    },
    fall: {
      imgSrc: "../../img/img/p27/fall.png",
      framemax: 3,
    },
    death: {
      imgSrc: "../../img/img/p27/Death.png",
      framemax: 19,
    },
    hit: {
      imgSrc: "../../img/img/p27/take_hit.png",
      framemax: 6,
    },
    attack1: {
      imgSrc: "../../img/img/p27/Attack1.png",
      framemax: 8,
    },
    attack2: {
      imgSrc: "../../img/img/p27/sp_atk.png",
      framemax: 30,
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

const el_wind_2 = new Character({
  name: "wind",
  scale: 1.2,
  need: {
    canJump: true,
    twoAttack: true,
    faceR: false,
  },
  offset: {
    x: 380,
    y: 245,
  },
  sprites: {
    preview: {
      imgSrc: "../img/img/p28/Idle.png",
    },
    idle: {
      imgSrc: "../../img/img/p28/idle.png",
      framemax: 8,
    },
    run: {
      imgSrc: "../../img/img/p28/Run.png",
      framemax: 8,
    },
    jump: {
      imgSrc: "../../img/img/p28/jump.png",
      framemax: 3,
    },
    fall: {
      imgSrc: "../../img/img/p28/fall.png",
      framemax: 3,
    },
    death: {
      imgSrc: "../../img/img/p28/Death.png",
      framemax: 19,
    },
    hit: {
      imgSrc: "../../img/img/p28/take_hit.png",
      framemax: 6,
    },
    attack1: {
      imgSrc: "../../img/img/p28/Attack1.png",
      framemax: 8,
    },
    attack2: {
      imgSrc: "../../img/img/p28/sp_atk.png",
      framemax: 30,
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

const background_1 = new Background({
  name: "roof",
  position: {
    x: 0,
    y: 0,
  },
  need: {
    imgSrc: "../../img/img/background/background.jpg",
    imgPre: "../img/img/background/background.jpg",
    Shop: false,
    width: 1024,
    height: 576,
    pre_scale: 0.72,
  },
  scale: 1,
});

const background_2 = new Background({
  name: "main",
  position: {
    x: 0,
    y: 0,
  },
  need: {
    imgSrc: "../../img/img/background/background.png",
    imgPre: "../img/img/background/background.png",
    Shop: true,
    width: 1024,
    height: 576,
    pre_scale: 0.9,
  },
  scale: 1,
});

const background_3 = new Background({
  name: "forest",
  position: {
    x: 0,
    y: 0,
  },
  need: {
    imgSrc: "../../img/img/background/Backgroundf.jpeg",
    imgPre: "../img/img/background/Backgroundf.jpeg",
    Shop: false,
    width: 1024,
    height: 576,
    pre_scale: 0.87,
  },
  scale: 1,
});

const background_4 = new Background({
  name: "bulkhead",
  position: {
    x: 0,
    y: 0,
  },
  need: {
    imgSrc: "../../img/img/background/bulkhead.png",
    imgPre: "../img/img/background/bulkhead.png",
    Shop: false,
    width: 1024,
    height: 672,
    pre_scale: 0.76,
  },
  scale: 1,
});

const background_5 = new Background({
  name: "scary",
  position: {
    x: 0,
    y: 0,
  },
  need: {
    imgSrc: "../../img/img/background/Image.png",
    imgPre: "../img/img/background/Image.png",
    Shop: false,
    width: 1024,
    height: 598,
    pre_scale: 0.85,
  },
  scale: 1,
});

const background_6 = new Background({
  name: "lap",
  position: {
    x: 0,
    y: 0,
  },
  need: {
    imgSrc: "../../img/img/background/lab.png",
    imgPre: "../img/img/background/lab.png",
    Shop: false,
    width: 1024,
    height: 596,
    pre_scale: 0.85,
  },
  scale: 1,
});
