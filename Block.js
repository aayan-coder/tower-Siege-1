class Block {
  constructor(x, y, width, height) {
    var options = {
        'restitution':.1,
        'friction':0.3,
        'density':.5
    }
    this.body = Matter.Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    fill(252, 191, 201);
    rect(0, 0, this.width, this.height);
    pop();
  }
};