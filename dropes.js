class Dropes {
    constructor(x,y,radius) {
      var options = {
          
isStatic: false,
          restitution:0.04,
          friction:0.4           
      }
      this.radius = 7;
      this.body = Bodies.circle(x,y,this.radius,options);
      this.radius;
     // World.add(world, this.body);
    }
    display(){
      
      var pos =this.body.position;
      var angle = this.body.angle;
       push();

       translate(pos.x,pos.y);
       rotate(angle)
       rectMode(CENTER);
       fill("red");
       ellipseMode(RADIUS);
       ellipse(0, 0, this.radius, this.radius);  
        pop();
    }
  };