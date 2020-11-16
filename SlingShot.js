class SlingShot{

    constructor(bodyA,bodyB){

        var option = {

            bodyA:bodyA,
            bodyB:bodyB,

            stiffness:0.04,
            length:20

        }

        this.sling = Matter.Constraint.create(option);
        
        World.add(world,this.sling);

    }

    display(){

        var b =this.sling.bodyA.position
        var p =this.sling.bodyB.position

        push();

        stroke("black");
        strokeWeight(6);
        line(b.x,b.y,p.x,p.y);

        pop();

    }
}