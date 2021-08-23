class Stone{
    constructor(x, y, r){
        var options = {
            isStatic: false,
            restitution: 0.8
        }
        this.radius = r;
        this.body = Bodies.circle(x, y, r, options);
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        ellipseMode(RADIUS);
        fill("white");
        ellipse(pos.x, pos.y, this.r, this.r);
    }
}