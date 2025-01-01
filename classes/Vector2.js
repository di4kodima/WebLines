export class Vector2
{
    X = 0;
    Y = 0;
    constructor(x,y)
    {
        this.X = x;
        this.Y = y; 
    }

    Normalize() {
        const length = Math.sqrt(this.X * this.X + this.Y * this.Y);
        if (length !== 0) {
            this.X /= length;
            this.Y /= length;
        }
    }
}