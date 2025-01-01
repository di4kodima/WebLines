export class CanvasDrawer
{
    static DrawCircle(Canvas, position, radius, color)
    {
        this.context = Canvas.getContext('2d');

        var rect = Canvas.getBoundingClientRect();

        this.context.beginPath();
        this.context.arc( position.X - rect.left, position.Y - rect.top, radius, 0, 2 * Math.PI, false);
        this.context.fillStyle = color;
        this.context.fill();
        this.context.lineWidth = 2;
        this.context.strokeStyle = '#003300';
        this.context.stroke();
    }

    static DrawLine(canvas, point1, point2, color, width)
    {
        const ctx = canvas.getContext('2d');

        var rect = canvas.getBoundingClientRect();

        ctx.beginPath();
        ctx.moveTo(point1.X- rect.left, point1.Y - rect.top);
        ctx.lineTo(point2.X- rect.left, point2.Y - rect.top);

        ctx.strokeStyle = color;
        ctx.lineWidth = width;
        
        ctx.stroke();
    }
}