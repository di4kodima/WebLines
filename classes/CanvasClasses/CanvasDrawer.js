export class CanvasDrawer
{
    static DrawCircle(Canvas, position, radius, color)
    {
        this.context = Canvas.getContext('2d');

        this.context.beginPath();
        this.context.arc( position.X, position.Y, radius, 0, 2 * Math.PI, false);
        this.context.fillStyle = color;
        this.context.fill();
        this.context.lineWidth = 2;
        this.context.strokeStyle = '#003300';
        this.context.stroke();
    }

    static DrawLine(canvas, point1, point2, color, width)
    {
        const ctx = canvas.getContext('2d');


        ctx.beginPath();
        ctx.moveTo(point1.X, point1.Y);
        ctx.lineTo(point2.X, point2.Y);

        ctx.strokeStyle = color;
        ctx.lineWidth = width;
        
        ctx.stroke();
    }
}