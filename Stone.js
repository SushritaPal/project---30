class Stone  {
  constructor(x, y) {
    var options = {
              restitution:0.8,
              friction:1,
              density:1   
    }
    this.body = Bodies.rectangle(x, y, 50,50, options);
    this.image = loadImage("polygon.png");
    this.width =50;
    this.height = 50;
    
    World.add(world, this.body);
    
  }
  
    display() {
      var angle = this.body.angle;
      var pos= this.body.position;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image,0,0,this.width, this.height);
      pop();
    }
  }
  