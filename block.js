class Block{
    constructor(x, y, width, height) {
        var options = {
                  restitution:0.8,
                  friction:1,
                  density:0.4   
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.image = loadImage("block.png");
        this.width = width;
        this.height = height;
        this.visibility = 255;
        World.add(world, this.body);
        this.visibilty = 255;
        
      }
      display(){
        
        var angle = this.body.angle;
        var pos= this.body.position;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        
        if(this.body.speed<3){
          image(this.image,0,0,this.width, this.height);
        }
        else{
          World.remove(world,this.body);
          this.visibility = this.visibility -5;
          tint(255,this.visibility);
          image(this.image,0,0,this.width, this.height);
        }
       
        pop();
      }
}
