class Box
{
    constructor(x,y,width,height)
    {
        this.x=x
        this.y=y
        this.w=width
        this.h=height

        var option={
            isStatic: true
        }

        this.body=Bodies.rectangle(x,y,width,height,option);
       
        World.add(world,this.body)
    }

display() {
rectMode(CENTER) 
fill("green"); 
rect(this.x,this.y,this.w,this.h)
}
}