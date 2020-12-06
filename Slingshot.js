class Slingshot{
constructor(bodyA,pointB){
var Options = {
bodyA:bodyA,
pointB:pointB,
stiffness:0.01,
length:10,



}
this.sling = Matter.Constraint.create(Options)
this.pointB = pointB
World.add(world,this.sling)











}
Display() {
    if(this.sling.bodyA!== null){
    stroke("red")
strokeWeight(3)
line(this.sling.bodyA.position.x,this.sling.bodyA.position.y,this.pointB.x,this.pointB.y)


    }
}
fly() {
this.sling.bodyA = null







}






}