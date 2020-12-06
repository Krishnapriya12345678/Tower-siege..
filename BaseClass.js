class BaseClass{
    constructor(x, y,radius) {
        var options = {
            'restitution':0.2,
            'friction':1.2,
            'density':3,
           isStatic:true
        }
        this.radius=radius
        this.body = Bodies.circle(x, y, this.radius/2, options);
        
        this.image = loadImage("mango.png");
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0,this.radius*2,this.radius*2);
        pop();
      }
}







