export class Star {
    x: number;
    y: number;
    length: number;
    opacity: number;
    factor: number;
    increment: number;

    constructor(x, y, length, opacity) {
        this.x = parseInt(x);
        this.y = parseInt(y);
        this.length = parseInt(length);
        this.opacity = opacity;
        this.factor = 1;
        this.increment = Math.random() * .03;
    }


    draw(context: CanvasRenderingContext2D, screenH: number, screenW: number) {
        context.rotate((Math.PI * 1 / 10));

        // Save the context
        context.save();

        // move into the middle of the canvas, just to make room
        context.translate(this.x, this.y);

        // Change the opacity
        if(this.opacity > 1) {
            this.factor = -1;
        }
        else if(this.opacity <= 0) {
            this.factor = 1;

            this.x = Math.round(Math.random() * screenW);
            this.y = Math.round(Math.random() * screenH);
        }

        this.opacity += this.increment * this.factor;

        context.beginPath()
        for (var i = 5; i--;) {
            context.lineTo(0, this.length);
            context.translate(0, this.length);
            context.rotate((Math.PI * 2 / 10));
            context.lineTo(0, - this.length);
            context.translate(0, - this.length);
            context.rotate(-(Math.PI * 6 / 10));
        }
        context.lineTo(0, this.length);
        context.closePath();
        context.fillStyle = "white";
        // comment to optimize performance
        // context.shadowBlur = 5;
        // context.shadowColor = '#c2f1ff';
        context.fill();

        context.restore();
    }
}
