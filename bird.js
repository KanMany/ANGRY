class Bird {
    constructor(x, y, radius) {

        var options = {
            restitution: 1, friction: 0.5987, density: 12.3
        }
        this.body = Bodies.circle(x, y, radius, options);
        this.radius = radius;
        World.add(world, this.body);
    }

    display() {
        var pos = this.body.position;
        var angle = this.body.angle;
        pos.x = mouseX;
        pos.y = mouseY;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        fill("red");
        ellipseMode(RADIUS);
        ellipse(0, 0, this.radius,this.radius);
        pop();
    }
}
