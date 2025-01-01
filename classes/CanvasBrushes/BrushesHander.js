export class BrushesHandler
{
    Canvas;
    Field;

    #_brush;
    get Brush()
    {
        return this.#_brush;
    }
    set Brush(brush)
    {
        if(this.Brush)
            this.Brush.Exit();
        console.log(this.Canvas);
        brush.Canvas = this.Canvas;
        this.#_brush = brush;
        this.#_brush.Canvas = this.Canvas;
        this.#_brush.Field = this.Field;
        // this.#_brush.OnCompleteAction = this.OnBrushComplete;
    }
    
    constructor(element, field) {
        console.log(element);
        console.log(field);
        this.Canvas = element;
        this.Canvas.addEventListener('click', this.handleClick.bind(this));
        this.Canvas.addEventListener('mousemove', this.handleMouseMove.bind(this));

        this.Field = field;
        console.log(this.Field);
    }

    handleClick(event) {
        if(! this.Brush)
            return;
        this.Brush.Click(event);
    }

    handleMouseMove(event) {
        if(! this.Brush)
            return;
        this.Brush.MouseMove(event);
    }

    // OnBrushComplete(ChargedObject)
    // {
    //     this.Field.AddChargeObject(ChargedObject);
    // }
}