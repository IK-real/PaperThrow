class Paper{


    constructor(x,y,radius){
       
        var options = {
            restitution: 0.8,
            friction: 0.5,
            density: 1.2,
            isStatic: false
        }

        this.body = Bodies.circle(x,y,radius/1.5,options);
        World.add(world,this.body);
        this.radius = radius;
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        ellipseMode(CENTER)
        fill(255,0,255);
        ellipse(0,0,this.radius,this.radius)
        pop();
    }
}