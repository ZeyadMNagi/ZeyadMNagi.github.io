class Character{
    constructor({
        name,
        imgSrc,
        scale = 1,
        framemax = 1 ,
        sprites,
        offset = {x:0,y:0},


    }){
        this.name = name;
        this.image = new Image();
        this.image.src = imgSrc;
        this.scale = scale;
        this.framemax = framemax;
        this.sprites = sprites  ;
        this.offset = offset


        for (const Sprite in this.sprites) {
            sprites[Sprite].image = new Image();
            sprites[Sprite].image.src = sprites[Sprite].imageSrc;
        }
    }
    
}

const wizard_1 = new Character({
    name : "wizard",
    scale: 2.2,
    offset :{
        x: 250, 
        y: 155
    },
    sprites:{
        idle:{
            imgSrc:"./img/p1/Idle.png",
            framemax : 6
        },
        run:{
            imgSrc:"./img/p1/Run.png",
            framemax : 8
        },
        jump:{
            imgSrc:"./img/p1/Jump.png",
            framemax : 2
        },
        fall:{
            imgSrc:"./img/p1/Fall.png",
            framemax : 2
        },
        death:{
            imgSrc:"./img/p1/Death.png",
            framemax : 7
        },
        hit:{
            imgSrc:"./img/p1/Hit.png",
            framemax : 4
        },
        attack1:{
            imgSrc:"./img/p1/Attack1.png",
            framemax : 8
        },
        attack2:{
            imgSrc:"./img/p1/Attack2.png",
            framemax : 8
        }
    }
})



const wizard_2 = new Character({
    name : "wizard",
    scale: 2.2,
    offset :{
        x: 250, 
        y: 155
    },
    sprites:{
        idle:{
            imgSrc:"./img/p2/Idle.png",
            framemax : 6
        },
        run:{
            imgSrc:"./img/p2/Run.png",
            framemax : 8
        },
        jump:{
            imgSrc:"./img/p2/Jump.png",
            framemax : 2
        },
        fall:{
            imgSrc:"./img/p2/Fall.png",
            framemax : 2
        },
        death:{
            imgSrc:"./img/p2/Death.png",
            framemax : 7
        },
        hit:{
            imgSrc:"./img/p2/Hit.png",
            framemax : 4
        },
        attack1:{
            imgSrc:"./img/p2/Attack1.png",
            framemax : 8
        },
        attack2:{
            imgSrc:"./img/p2/Attack2.png",
            framemax : 8
        }
    }
})


const warrior_1 = new Character({
    name : "warrior",
    scale: 3.5,
    offset :{
        x:150, 
        y: 200
    },
    sprites:{
        idle:{
            imgSrc:"./img/p3/Idle.png",
            framemax : 10
        },
        run:{
            imgSrc:"./img/p3/Run.png",
            framemax : 8
        },
        jump:{
            imgSrc:"./img/p3/Jump.png",
            framemax : 3
        },
        fall:{
            imgSrc:"./img/p3/Fall.png",
            framemax : 3
        },
        death:{
            imgSrc:"./img/p3/Death.png",
            framemax : 7
        },
        hit:{
            imgSrc:"./img/p3/Take hit.png",
            framemax : 3
        },
        attack1:{
            imgSrc:"./img/p3/Attack1.png",
            framemax : 7
        },
        attack2:{
            imgSrc:"./img/p3/Attack2.png",
            framemax : 7
        }
    }
})


const warrior_2 = new Character({
    name : "warrior",
    scale: 3.5,
    offset :{
        x:150, 
        y:200
    },
    sprites:{
        idle:{
            imgSrc:"./img/p4/Idle.png",
            framemax : 10
        },
        run:{
            imgSrc:"./img/p4/Run.png",
            framemax : 8
        },
        jump:{
            imgSrc:"./img/p4/Jump.png",
            framemax : 3
        },
        fall:{
            imgSrc:"./img/p4/Fall.png",
            framemax : 3
        },
        death:{
            imgSrc:"./img/p4/Death.png",
            framemax : 7
        },
        hit:{
            imgSrc:"./img/p4/Take hit.png",
            framemax : 3
        },
        attack1:{
            imgSrc:"./img/p4/Attack1.png",
            framemax : 7
        },
        attack2:{
            imgSrc:"./img/p4/Attack2.png",
            framemax : 7
        }
    }
})


const samurai_1 = new Character({
    name : "samurai",
    scale: 2.9,
    offset :{
        x: 250, 
        y: 210
    },
    sprites:{
        idle:{
            imgSrc:"./img/p5/Idle.png",
            framemax : 4
        },
        run:{
            imgSrc:"./img/p5/Run.png",
            framemax : 8
        },
        jump:{
            imgSrc:"./img/p5/Jump.png",
            framemax : 2
        },
        fall:{
            imgSrc:"./img/p5/Fall.png",
            framemax : 2
        },
        death:{
            imgSrc:"./img/p5/Death.png",
            framemax : 7
        },
        hit:{
            imgSrc:"./img/p5/Take hit.png",
            framemax : 3
        },
        attack1:{
            imgSrc:"./img/p5/Attack1.png",
            framemax : 4
        },
        attack2:{
            imgSrc:"./img/p5/Attack2.png",
            framemax : 4
        }
    }
})

const samurai_2 = new Character({
    name : "samurai",
    scale: 2.9,
    offset :{
        x: 250, 
        y: 210
    },
    sprites:{
        idle:{
            imgSrc:"./img/p6/Idle.png",
            framemax : 4
        },
        run:{
            imgSrc:"./img/p6/Run.png",
            framemax : 8
        },
        jump:{
            imgSrc:"./img/p6/Jump.png",
            framemax : 2
        },
        fall:{
            imgSrc:"./img/p6/Fall.png",
            framemax : 2
        },
        death:{
            imgSrc:"./img/p6/Death.png",
            framemax : 7
        },
        hit:{
            imgSrc:"./img/p6/Take hit.png",
            framemax : 3
        },
        attack1:{
            imgSrc:"./img/p6/Attack1.png",
            framemax : 4
        },
        attack2:{
            imgSrc:"./img/p6/Attack2.png",
            framemax : 4
        }
    }
    
})

const king_1 = new Character({
    name : "king",
    scale: 3,
    offset :{
        x: 250, 
        y: 160
    },
    sprites:{
        idle:{
            imgSrc:"./img/p7/Idle.png",
            framemax : 8
        },
        run:{
            imgSrc:"./img/p7/Run.png",
            framemax : 8
        },
        jump:{
            imgSrc:"./img/p7/Jump.png",
            framemax : 2
        },
        fall:{
            imgSrc:"./img/p7/Fall.png",
            framemax : 2
        },
        death:{
            imgSrc:"./img/p7/Death.png",
            framemax : 6
        },
        hit:{
            imgSrc:"./img/p7/Take hit.png",
            framemax : 4
        },
        attack1:{
            imgSrc:"./img/p7/Attack1.png",
            framemax : 4
        },
        attack2:{
            imgSrc:"./img/p7/Attack2.png",
            framemax : 4
        }
    }
})
const king_2 = new Character({
    name : "king",
    scale: 3,
    offset :{
        x: 250, 
        y: 160
    },
    sprites:{
        idle:{
            imgSrc:"./img/p8/Idle.png",
            framemax : 8
        },
        run:{
            imgSrc:"./img/p8/Run.png",
            framemax : 8
        },
        jump:{
            imgSrc:"./img/p8/Jump.png",
            framemax : 2
        },
        fall:{
            imgSrc:"./img/p8/Fall.png",
            framemax : 2
        },
        death:{
            imgSrc:"./img/p8/Death.png",
            framemax : 6
        },
        hit:{
            imgSrc:"./img/p8/Take hit.png",
            framemax : 4
        },
        attack1:{
            imgSrc:"./img/p8/Attack1.png",
            framemax : 4
        },
        attack2:{
            imgSrc:"./img/p8/Attack2.png",
            framemax : 4
        }
    }
})

const evil_1 = new Character({
    name : "Evil wizard",
    scale: 3,
    offset :{
        x: 250, 
        y: 350
    },
    sprites:{
        idle:{
            imgSrc:"./img/p13/Idle.png",
            framemax : 8
        },
        run:{
            imgSrc:"./img/p13/Run.png",
            framemax : 8
        },
        jump:{
            imgSrc:"./img/p13/Jump.png",
            framemax : 2
        },
        fall:{
            imgSrc:"./img/p13/Fall.png",
            framemax : 2
        },
        death:{
            imgSrc:"./img/p13/Death.png",
            framemax : 7
        },
        hit:{
            imgSrc:"./img/p13/Take hit.png",
            framemax : 3
        },
        attack1:{
            imgSrc:"./img/p13/Attack1.png",
            framemax : 8
        },
        attack2:{
            imgSrc:"./img/p13/Attack2.png",
            framemax : 8
        }
    }
})

const evil_2 = new Character({
    name : "Evil wizard",
    scale: 3,
    offset :{
        x: 250, 
        y: 350
    },
    sprites:{
        idle:{
            imgSrc:"./img/p14/Idle.png",
            framemax : 8
        },
        run:{
            imgSrc:"./img/p14/Run.png",
            framemax : 8
        },
        jump:{
            imgSrc:"./img/p14/Jump.png",
            framemax : 2
        },
        fall:{
            imgSrc:"./img/p14/Fall.png",
            framemax : 2
        },
        death:{
            imgSrc:"./img/p14/Death.png",
            framemax : 7
        },
        hit:{
            imgSrc:"./img/p14/Take hit.png",
            framemax : 3
        },
        attack1:{
            imgSrc:"./img/p14/Attack1.png",
            framemax : 8
        },
        attack2:{
            imgSrc:"./img/p14/Attack2.png",
            framemax : 8
        }
    }
})

const knight_1 = new Character({
    name : "Knight",
    scale: 3.67,
    offset :{
        x: 250, 
        y: 160
    },
    sprites:{
        idle:{
            imgSrc:"./img/p15/Idle.png",
            framemax : 10
        },
        run:{
            imgSrc:"./img/p15/Run.png",
            framemax : 6
        },
        jump:{
            imgSrc:"./img/p15/Jump.png",
            framemax : 2
        },
        fall:{
            imgSrc:"./img/p15/Fall.png",
            framemax : 2
        },
        death:{
            imgSrc:"./img/p15/Death.png",
            framemax : 9
        },
        hit:{
            imgSrc:"./img/p15/Get hit.png",
            framemax : 3
        },
        attack1:{
            imgSrc:"./img/p15/Attack1.png",
            framemax : 4
        },
        attack2:{
            imgSrc:"./img/p15/Attack2.png",
            framemax : 4
        }
    }
})


const knight_2 = new Character({
    name : "Knight",
    scale: 3.67,
    offset :{
        x: 250, 
        y: 160
    },
    sprites:{
        idle:{
            imgSrc:"./img/p16/Idle.png",
            framemax : 10
        },
        run:{
            imgSrc:"./img/p16/Run.png",
            framemax : 6
        },
        jump:{
            imgSrc:"./img/p16/Jump.png",
            framemax : 2
        },
        fall:{
            imgSrc:"./img/p16/Fall.png",
            framemax : 2
        },
        death:{
            imgSrc:"./img/p16/Death.png",
            framemax : 9
        },
        hit:{
            imgSrc:"./img/p16/Get hit.png",
            framemax : 3
        },
        attack1:{
            imgSrc:"./img/p16/Attack1.png",
            framemax : 4
        },
        attack2:{
            imgSrc:"./img/p16/Attack2.png",
            framemax : 4
        }
    }
})


