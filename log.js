class Log {
    constructor(x, y, height,width,angle) {

        var options = {
            restitution: 0, friction: 6000, density: 12.3
        }
        this.body = Bodies.rectangle(x, y, 20, height, options);
        this.width = width;
        this.height = height;
        Matter.Body.setAngle(this.body,angle);
        World.add(world, this.body);
    }

    display() {
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        fill(255);
        rectMode(CENTER);
        rect(0, 0, this.width, this.height)

        pop();
    }
}

