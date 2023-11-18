// The title of the game to be displayed on the title screen
title = "LOCKPICK";

// The description, which is also displayed on the title screen
description = `
Pick the lock
`;

// The array of custom sprites
characters = [
];

// Game design variable container
const G = {
	WIDTH: 100,
	HEIGHT: 100,
};

// Game runtime options
// Refer to the official documentation for all available options
options = {
	viewSize: {x: G.WIDTH, y: G.HEIGHT},
    //isCapturing: true,
    //isCapturingGameCanvasOnly: true,
    //captureCanvasScale: 2,
    //isReplayEnabled: true,
};
/**
* 
    */
    
    let loop; // slabs
    let keyholeX = 75;
    let keyholeY= 75;
    let axisDetermine = 0;
    let axisKey = 0;
    let keyX = 25;
    let keyY = 25;
    let hit = false;
    let goLeft = -1;


// The game loop function
function  update() {
	// The init function
	if (!ticks) {
        color("blue");
        line(25,25,75,25,5);
        line(25,25,25,75,5);
        line(25,50,25,25,5);
        axisDetermine = floor(rnd(0,4))
	}
    color("blue");
    line(25,25,75,25,5);
    line(25,25,25,75,5);
    line(75,75,75,25,5);
    line(25,75,75,75,5);
    //line(0,0,25,25,3);
    if(hit == true)
    {
        axisDetermine = floor(rnd(0,4)); //determines which axis the thing is on (maybe up to 4 once i have the other two axes figured out)
        keyholeX = rnd(25, 75);
        keyholeY = rnd(25, 75);
        hit = false;
    }
    
    color("red");

    if(axisDetermine == 0)
    {
        //keyholeX = rnd(25, 75);
        keyholeY = 25
        box(keyholeX,keyholeY,5,5); // rightleftup
    }
    else if (axisDetermine == 1)
    {
        keyholeX = 25
        //keyholeY = rnd(25, 75);  
        box(keyholeX,keyholeY,5,5);// updownleft

    }
    else if (axisDetermine == 2)
    {
        keyholeX = 75
        //keyholeY = rnd(25, 75);  
        box(keyholeX,keyholeY,5,5); //updownright

    }
    else if (axisDetermine == 3) //leftrightdown
    {
        //keyholeX = rnd(25, 75);  
        keyholeY = 75
        box(keyholeX,keyholeY,5,5);

    }



    color("green");
    if(goLeft == 1)
    {
        if(keyX <= 75 && keyY == 25)
        {
            keyX++;
            box(keyX,keyY,5,5);
        }
        else if(keyX >= 75 && keyY >= 25 && keyY <= 75) // go down
        {
            keyX = 75;
            keyY++;
            box(keyX,keyY,5,5);
        }
        else if(keyY >= 75 && keyX > 25) //once it reaches the bottom, stop Y and go left
        {
            keyX--;
            keyY = 75;
            box(keyX,keyY,5,5);
        }
        else if(keyX <= 25)
        {
            keyX = 25;
            keyY--;
            box(keyX,keyY,5,5);
        }
    }
    else if(goLeft == -1)
    {
        if(keyX <= 25 && keyY >= 25 && keyY <= 75)
        {
            //keyX++;
            keyY++;
            box(keyX,keyY,5,5);
        }
        else if(keyX <= 75 && keyY >= 75) // go up on right
        {
            keyY = 75;
            keyX++;
            box(keyX,keyY,5,5);
        }
        else if(keyX >= 75 && keyY <= 75 && keyY > 25) //once it reaches the bottom, stop Y and go left
        {

            keyX = 75;
            keyY--;
            box(keyX,keyY,5,5);
            //console.log("meow");
        }
        else if(keyX <= 75 && keyY ==25)
        {
            keyX--;
            keyY = 25;
            //keyY--;
            box(keyX,keyY,5,5);
        }
    
    }

    if(input.isJustPressed && (Math.abs(keyY-keyholeY) < 4 ) && (Math.abs(keyX - keyholeX) < 4))
    {
        addScore(1);
        hit = true;
        goLeft = -goLeft;
    }
    else if(input.isJustPressed)
    {
        end();
    }


    
    



    
    //keyholeY = rnd(25, 50);
    
    //x value starts at 25. shift between 25 and 75
    //y value also between 25 and 75
    // probably save those as specific variables



}
