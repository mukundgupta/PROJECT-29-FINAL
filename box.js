class Box{
    constructor(x, y, width, height) {
        var options = {
          restitution:0.8,
            friction:1.0
        }
        this.body = Bodies.rectangle(x, y, width/2, height/2, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle)
        fill(0,255,193)
        rectMode(CENTER)
        rect(0,0,this.width/2,this.height/2)
        pop();
      }
}