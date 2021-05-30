class Umbrella {
    constructor(x,y){
        var options = {
            isStatic: true,
        }
        this.umbrella = Bodies.circle(x,y,50,options);
        this.radius = 50;
        //load Image for BestMan
        this.image = loadImage("Walking Frame/walking_1.png", "Walking Frame/walking_2.png", 
        "Walking Frame/walking_3.png", "Walking Frame/walking_4.png", "Walking Frame/walking_5.png", 
        "Walking Frame/walking_6.png", "Walking Frame/walking_7.png", "Walking Frame/walking_8.png");
        World.add(world, this.umbrella);
        
    }

    display(){
        var pos = this.umbrella.position;
        imageMode(CENTER);
        //display the image for BestMan if the frameCount is over 200, otherwise display the boy with umbrella image
        image(this.image,pos.x,pos.y+70,300,300);
    }
}
