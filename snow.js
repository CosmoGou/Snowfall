class Snow {
 constructer(x,y){
 var options = {
     'friction': 0.01,
     'restitution':0.01
 }
 this.body = Bodiees.circle(x,y,5,options);
 this.radius = 5;
 this.image = loadImage("snow4.webp")
 World.add(world, this.body);

 }
 update(){
    if(this.body.position.y > height){
    Matter.Body.setPosition(this.body,{x:random(0,800)},{y:random(0,400)});
    }
 }
 display(){
    noStroke();
    fill(165, 244, 247);
    ellipseMode(RADIUS);
    ellipse(this.body.position.x,this.body.position.y,this.radius,this.radius);
 }
 ;
}