class sprite {
  constructor({
    position,
    imageSrc,
    scale = 1,
    framemax = 1,
    offset = {x: 0, y: 0},
  }) {
    this.position = position;
    this.width = 50;
    this.height = 150;
    this.image = new Image();
    this.image.src = imageSrc;
    this.scale = scale;
    this.framemax = framemax;
    this.framecurrent = 1;
    this.framelapsed = 0;
    this.framehold = 5;
    this.offset = offset;
  }
  draw() {
    C.drawImage(
      this.image,
      this.framecurrent * (this.image.width / this.framemax),
      0,
      this.image.width / this.framemax,
      this.image.height,
      this.position.x - this.offset.x,
      this.position.y - this.offset.y,
      (this.image.width / this.framemax) * this.scale,
      this.image.height * this.scale
    );
  }

  animateframe() {
    this.framelapsed++;

    if (this.framelapsed % this.framehold === 0) {
      if (this.framecurrent < this.framemax - 1) {
        this.framecurrent++;
      } else {
        this.framecurrent = 0;
      }
    }
  }

  update() {
    this.draw();
    this.animateframe();
  }
}

class Fighter extends sprite {
  constructor({
    position,
    velocity = {x: 0, y: 0},
    color = "red",
    imageSrc,
    scale = 1,
    framemax = 1,
    offset = {x: 0, y: 0},
    sprites,
    attackbox = {offset: {}, width: undefined, height: undefined},
  }) {
    super({
      position,
      imageSrc,
      scale,
      framemax,
      offset,
    });

    this.velocity = velocity;
    this.width = 50;
    this.height = 150;
    this.lastkey;
    this.attackbox = {
      position: {
        x: this.position.x,
        y: this.position.y,
      },
      offset: attackbox.offset,
      width: attackbox.width,
      height: attackbox.height,
    };
    this.color = color;
    this.isattacking;
    this.health = 100;
    this.framecurrent = 0;
    this.framelapsed = 0;
    this.framehold = 5;
    this.sprites = sprites;
    this.dead = this.dead;

    for (const Sprite in this.sprites) {
      sprites[Sprite].image = new Image();
      sprites[Sprite].image.src = sprites[Sprite].imageSrc;
    }
  }

  update() {
    this.draw();
    if (!this.dead) this.animateframe();

    this.attackbox.position.x = this.position.x + this.attackbox.offset.x;
    this.attackbox.position.y = this.position.y + this.attackbox.offset.y;
    // C.fillStyle="black"
    // C.fillRect(this.attackbox.position.x,this.attackbox.position.y, this.attackbox.width, this.attackbox.height)

    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;

    //gravity

    if (this.position.y + this.height + this.velocity.y >= canvas.height - 97) {
      this.velocity.y = 0;
      this.position.y = 330;
    } else this.velocity.y += gravity;
  }

  attack2() {
    this.switchsprite("attack2");
    this.isattacking = true;
  }

  attack1() {
    this.switchsprite("attack1");
    this.isattacking = true;
  }

  takehit() {
    this.switchsprite("takehit");

    this.health -= 3;

    if (this.health <= 0) {
      this.switchsprite("death");
    } else this.switchsprite("takehit");
  }

  switchsprite(sprite) {
    if (this.image === this.sprites.death.image) {
      if (this.framecurrent === this.sprites.death.framemax - 1)
        this.dead = true;
      return;
    }

    if (
      this.image === this.sprites.attack1.image &&
      this.framecurrent < this.sprites.attack1.framemax - 1
    )
      return;
    if (
      this.image === this.sprites.attack2.image &&
      this.framecurrent < this.sprites.attack2.framemax - 1
    )
      return;

    if (
      this.image === this.sprites.takehit.image &&
      this.framecurrent < this.sprites.takehit.framemax - 1
    )
      return;

    switch (sprite) {
      case "idle":
        if (this.image !== this.sprites.idle.image) {
          this.image = this.sprites.idle.image;
          this.framemax = this.sprites.idle.framemax;
          this.framecurrent = 0;
        }
        break;
      case "run":
        if (this.image !== this.sprites.run.image) {
          this.image = this.sprites.run.image;
          this.framemax = this.sprites.run.framemax;
          this.framecurrent = 0;
        }
        break;
      case "jump":
        if (this.image !== this.sprites.jump.image) {
          this.image = this.sprites.jump.image;
          this.framemax = this.sprites.jump.framemax;
          this.framecurrent = 0;
        }
        break;
      case "fall":
        if (this.image !== this.sprites.fall.image) {
          this.image = this.sprites.fall.image;
          this.framemax = this.sprites.fall.framemax;
          this.framecurrent = 0;
        }
        break;
      case "attack2":
        if (this.image !== this.sprites.attack2.image) {
          this.image = this.sprites.attack2.image;
          this.framemax = this.sprites.attack2.framemax;
          this.framecurrent = 0;
        }
        break;
      case "attack1":
        if (this.image !== this.sprites.attack1.image) {
          this.image = this.sprites.attack1.image;
          this.framemax = this.sprites.attack1.framemax;
          this.framecurrent = 0;
        }
        break;
      case "takehit":
        if (this.image !== this.sprites.takehit.image) {
          this.image = this.sprites.takehit.image;
          this.framemax = this.sprites.takehit.framemax;
          this.framecurrent = 0;
        }
        break;
      case "death":
        if (this.image !== this.sprites.death.image) {
          this.image = this.sprites.death.image;
          this.framemax = this.sprites.death.framemax;
          this.framecurrent = 0;
        }
        break;
    }
  }
}

// class GenericObject{
//   constructor({x,y,image}){
//     this.position = {
//       x,
//       y
//     };
//     this.image = image;
//     this.width = image.width;
//     this.height = image.height;
//   }
//   draw(){
//     C.drawImage(this.image,this.position.x,this.position.y);
//   }
// }
