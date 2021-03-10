class Drop {
    constructor(x,y) {
      var options = {
          'restitution':0.8,
          'friction':0.4,
          'density':0.3
      }
      this.body = Bodies.circle(x,y,2,options);
     
      this.r =5;
     // this.width = width;
      
      World.add(world, this.body);
    }
    display(){
     var pos =this.body.position;
      var angle = this.body.angle;
      push();
      //translate(pos.x, pos.y);
      //rotate(angle);
    ellipseMode(CENTER);
      //strokeWeight(2);
      //stroke(55,55,55);
     // Image(0, 0, this.width, this.height);
     fill("blue");
//this.maxDrops=100;
    // for(var i=0;;i++)
     //{
       ellipse(pos.x,pos.y, this.r);
     //}
      pop();
    }
  };
  