/// <reference path="./node_modules/@types/p5/global.d.ts" />

/*
Worked with Priscilla Esteves on this exercise

use the WSAD keys to move the player
*/


let player;
var pushableGroup;
var redGroup;


function setup() {
    createCanvas(windowWidth - 20, windowHeight - 20);


    player = createSprite(width / 2, height / 2, 30, 30);
    player.shapeColor = color(150);

    pushableGroup = new Group();
    redGroup = new Group();

    var greenSprite = createSprite(width/3,height/3,30,30);
    greenSprite.shapeColor = color('green');
    pushableGroup.add(greenSprite);

    for(var i = 0; i < 5; i++) {
        var spr = createSprite(random(width),random(height),30,30);
        spr.shapeColor = color('red');
        redGroup.add(spr);
    }

}

function draw() {
    background(220);
    drawSprites();
    //Checks and runs collision for pushable group
    pushableGroup.collide(player,(a,b) => {
        b.displace(a);
    });

    //Checks and runs collision for red group
    redGroup.collide(pushableGroup,(a,b) => {
        b.remove();
    });
}

function keyPressed() {
    if (key == "a") {
        player.velocity.x = -4;
    } else if (key == "d") {
        player.velocity.x = 4;
    } else if (key == "w") {
        player.velocity.y = -4;
    } else if (key == "s") {
        player.velocity.y = 4;
    }
    return false;
}

function keyReleased() {
    if (key == "a" || key == "d") {
        player.velocity.x = 0;
    } else if (key == "w" || key == "s") {
        player.velocity.y = 0;
    }
}
