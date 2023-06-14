const canvas = document.querySelector('canvas');
const C = canvas.getContext('2d');




var object_1 = localStorage.getItem("player1")
var opp_1 = JSON.parse(object_1)
var object_2 = localStorage.getItem("player2")
var opp_2 = JSON.parse(object_2)





canvas.width = 1024;
canvas.height = 576;
C.fillRect(0 , 0 , canvas.width , canvas.height)

var gravity = 0.5

const background = new sprite({
    position:{
        x:0,
        y:0
    },
    imageSrc: './img/background.png'
})

const shop = new sprite({
    position:{
        x:600,
        y:129
    },
    imageSrc: './img/shop.png',
    scale: 2.75, 
    framemax : 6
})


const player = new Fighter({
    position:{
    x:0,
    y:0
    },
    velocity:{
       x:0,
       y:0 
    },
    offset :{
        x: 0,
        y: 0
    },
    imageSrc:  opp_1.sprites.idle.imgSrc, 
    framemax : opp_1.sprites.idle.framemax ,
    scale: opp_1.scale,
    offset :{
        x: opp_1.offset.x, 
        y: opp_1.offset.y
    },

    sprites : {
        idle :{
            imageSrc: opp_1.sprites.idle.imgSrc, 
            framemax:opp_1.sprites.idle.framemax
        },
        run :{
            imageSrc: opp_1.sprites.run.imgSrc, 
            framemax:opp_1.sprites.run.framemax,  
        },
        jump :{
            imageSrc:opp_1.sprites.jump.imgSrc, 
            framemax:opp_1.sprites.jump.framemax,  
        },
        fall :{
            imageSrc:opp_1.sprites.fall.imgSrc, 
            framemax:opp_1.sprites.fall.framemax,  
        },
        attack2 :{
            imageSrc:opp_1.sprites.attack2.imgSrc, 
            framemax:opp_1.sprites.attack2.framemax,  
        },
        attack1 :{
            imageSrc:opp_1.sprites.attack1.imgSrc, 
            framemax:opp_1.sprites.attack1.framemax,  
        },
        takehit :{
            imageSrc:opp_1.sprites.hit.imgSrc, 
            framemax:opp_1.sprites.hit.framemax, 
        },
        death :{
            imageSrc:opp_1.sprites.death.imgSrc, 
            framemax:opp_1.sprites.death.framemax, 
        }

    },
    attackbox:{
        offset:{
            x:130,
            y:50
        },
        width:170,
        height:50
    }

    
})


const enemy = new Fighter({
    position:{
    x:600,
    y:100
    },
    velocity:{
       x:0,
       y:0
    },
    offset :{
        x: -50,
        y: 0
    },
    color : 'blue',
    imageSrc:opp_2.sprites.idle.imgSrc,
    framemax :opp_2.sprites.idle.framemax, 

    scale: opp_2.scale,
    offset :{
        x: opp_2.offset.x, 
        y: opp_2.offset.y
    },

    sprites : {
        idle :{
            imageSrc:opp_2.sprites.idle.imgSrc, 
            framemax:opp_2.sprites.idle.framemax, 
        },
        run :{
            imageSrc:opp_2.sprites.run.imgSrc, 
            framemax:opp_2.sprites.run.framemax, 
        },
        
        jump :{
            imageSrc:opp_2.sprites.jump.imgSrc, 
            framemax:opp_2.sprites.jump.framemax, 
        },
        fall :{
            imageSrc:opp_2.sprites.fall.imgSrc, 
            framemax:opp_2.sprites.fall.framemax, 
        },
        attack2 :{
            imageSrc:opp_2.sprites.attack2.imgSrc, 
            framemax:opp_2.sprites.attack2.framemax, 
        },
        attack1 :{
            imageSrc:opp_2.sprites.attack1.imgSrc, 
            framemax:opp_2.sprites.attack1.framemax, 
        },
        takehit:{
            imageSrc:opp_2.sprites.hit.imgSrc, 
            framemax:opp_2.sprites.hit.framemax, 
        },
        death:{
            imageSrc:opp_2.sprites.death.imgSrc, 
            framemax:opp_2.sprites.death.framemax, 
        }

    },
    attackbox:{
        offset:{
            x:-230,
            y:50
        },
        width:150,
        height:50
    }
})



console.log(player)
console.log(enemy)

const keys ={
    a : {
        pressed :false
    },
    d : {
        pressed :false
    }, 
    w: {
        pressed:false
    },
    ArrowRight:{
        pressed:false
    },
    ArrowLeft:{
        pressed:false
    },
    ArrowUp:{
        pressed:false
    }
}

let lastkey 

decrease()

function animate(){
    window.requestAnimationFrame(animate)
    C.fillStyle = 'black'
    C.fillRect(0, 0,canvas.width, canvas.height)
    background.update()
    shop.update()
    C.fillStyle = 'rgba(255,255,255,0.15)'
    C.fillRect(0,0 , canvas.width , canvas.height)
    player.update()
    enemy.update()

    player.velocity.x =0
    enemy.velocity.x =0
    //player

    if (keys.a.pressed && player.lastkey === 'a'){
        player.velocity.x = -5
        player.switchsprite('run')
    }else if (keys.d.pressed && player.lastkey === 'd'){
        player.velocity.x = 5
        player.switchsprite('run')
        
    }else{
        player.switchsprite('idle')
    }

    //jump
    if (player.velocity.y < 0) {
        player.switchsprite('jump')
      } else if (player.velocity.y > 0) {
        player.switchsprite('fall')
      }

    // Enemy movement
  if (keys.ArrowLeft.pressed && enemy.lastkey === 'ArrowLeft') {
    enemy.velocity.x = -5
    enemy.switchsprite('run')
  } else if (keys.ArrowRight.pressed && enemy.lastkey === 'ArrowRight') {
    enemy.velocity.x = 5
    enemy.switchsprite('run')
  } else {
    enemy.switchsprite('idle')
  }
// jumping
if (enemy.velocity.y < 0) {
    enemy.switchsprite('jump')
  } else if (enemy.velocity.y > 0) {
    enemy.switchsprite('fall')
  }
    // detect for collision & enemy gets hit
  if (retangularcollision({
      rectangle1: player,
      rectangle2: enemy
    }) && player.isattacking && player.framecurrent === 3 ) {
    enemy.takehit()
    player.isattacking = false

    gsap.to('#en-heal', {
        width: enemy.health + '%'
      })
    }

    // if player misses
  if (player.isattacking && player.framecurrent === 3) {
    player.isattacking = false
  }
        
// this is where our player gets hit
if (
    retangularcollision({
      rectangle1: enemy,
      rectangle2: player
    }) &&
    enemy.isattacking &&
    enemy.framecurrent === 2
  ) {
    player.takehit()
    enemy.isattacking = false

    gsap.to('#ol-heal', {
        width: player.health + '%'
      })
    }
    
  
    //missing
    if(enemy.isattacking &&enemy.framecurrent === 2){
        enemy.isattacking = false
    }

    //end game
    if (enemy.health <= 0 || player.health <= 0){
        determineWinner({player,enemy,timeid})

    }
    if(player.health<=0){
        player.switchsprite('death')
    }
    if(enemy.health<=0){
        enemy.switchsprite('death')
    }
}

animate()

window.addEventListener('keydown' , (event) =>{
    if(!player.dead){
        switch (event.key) {
            case 'd':
                keys.d.pressed = true
                player.lastkey = 'd'
                break
            case 'a':
                keys.a.pressed = true
                player.lastkey = 'a'
                break
            case 'w':
                keys.w.pressed = true
                player.velocity.y = -15
                break
            case 's':
                player.attack2()
                break
            case 'e':
                player.attack1()
                break
    
    }

    if(!enemy.dead){
    switch (event.key){
        case 'ArrowRight':
            keys.ArrowRight.pressed = true
            enemy.lastkey = 'ArrowRight'
            break
        case 'ArrowLeft':
            keys.ArrowLeft.pressed = true
            enemy.lastkey = 'ArrowLeft'
            break
        case 'ArrowUp':

            enemy.velocity.y = -15
            break 
        case 'ArrowDown':
            enemy.attack1()

            break
        case ' ':
            enemy.attack2()
            break        


    }
}
}
})
window.addEventListener('keyup' , (event) =>{
    switch (event.key) {
        case 'd':
            keys.d.pressed = false
        break
        case 'a':
            keys.a.pressed = false
        break
        case 'w':
            keys.w.pressed = false
        break
        case 's':
            keys.s.pressed = false
        break
        case 'ArrowUp':
            keys.ArrowUp.pressed = false
        break
        case 'ArrowRight':
            keys.ArrowRight.pressed = false
        break    
        case 'ArrowLeft':
            keys.ArrowLeft.pressed = false
        break
        case 'ArrowDown':
            keys.ArrowDown.pressed = false
        break
    }
    
})     

