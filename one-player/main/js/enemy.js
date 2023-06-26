const enemies = [];
const Characters = [
  wizard_1, wizard_2,  warrior_1,  warrior_2, samurai_1,  samurai_2,
  king_1, king_2, fire_wizard_1, fire_wizard_2, evil_1,  evil_2,
  knight_1 , knight_2, goblin_1, goblin_2, skeleton_1, skeleton_2
];

function spawnEnemies(){
    // setInterval(() => {
        let i = Math.floor(Math.random() * 8);
        let x = Math.random() * (1000 - -800) + -800;
        
        
        enemies.push(new Fighter({
            position: {
              x: x,
              y: 0,
            },
            velocity: {
              x: 0,
              y: 0,
            },
            imageSrc: Characters[i].sprites.idle.imgSrc,
            framemax: Characters[i].sprites.idle.framemax,
            scale: Characters[i].scale,
            offset: {
              x: Characters[i].offset.x,
              y: Characters[i].offset.y,
            },
            enemy:true,
            health:80,
            no:80,
            damage: 5,
            sprites: {
              idle: {
                imageSrc: Characters[i].sprites.idle.imgSrc,
                framemax: Characters[i].sprites.idle.framemax,
              },
              run: {
                imageSrc: Characters[i].sprites.run.imgSrc,
                framemax: Characters[i].sprites.run.framemax,
              },
              jump: {
                imageSrc: Characters[i].sprites.jump.imgSrc,
                framemax: Characters[i].sprites.jump.framemax,
              },
              fall: {
                imageSrc: Characters[i].sprites.fall.imgSrc,
                framemax: Characters[i].sprites.fall.framemax,
              },
              attack2: {
                imageSrc: Characters[i].sprites.attack2.imgSrc,
                framemax: Characters[i].sprites.attack2.framemax,
              },
              attack1: {
                imageSrc: Characters[i].sprites.attack1.imgSrc,
                framemax: Characters[i].sprites.attack1.framemax,
              },
              takehit: {
                imageSrc: Characters[i].sprites.hit.imgSrc,
                framemax: Characters[i].sprites.hit.framemax,
              },
              death: {
                imageSrc: Characters[i].sprites.death.imgSrc,
                framemax: Characters[i].sprites.death.framemax,
              },
            },
            attackbox: {
              offset: {
                x: Characters[i].attackbox.offset.x,
                y: 50,
              },
              width: 120,
              height: 50,
            },
          })
          )
          
          console.log(enemies)
    // }, 10000);
}