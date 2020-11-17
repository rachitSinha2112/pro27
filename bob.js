class bob{
    constructor(x,y,radius){
      var ball_options={
        isStatic:false,
        restitution:1.0,
        density:1.2
     }
         this.body= Bodies.circle(x,y,radius,ball_options);
         World.add(world,this.body)
         this.radius=radius;  
   }
      display(){
        var pos=this.body.position;
        fill("magenta")   
       ellipseMode(RADIUS)
        ellipse(pos.x,pos.y,this.radius,this.radius)
      }
              
  }