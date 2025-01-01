import {ChargedObject} from "./ChargedObject.js"
import { Vector2 } from "../Vector2.js";
import {CanvasDrawer} from "../CanvasClasses/CanvasDrawer.js"

export class ChargedPoint extends ChargedObject
{
    Position;

    constructor()
    {
        super();
        this.Position = new Vector2(0,0);
    }

    GetForce(position)
    {
        let r = Math.sqrt((position.X - this.Position.X)** 2 + (position.Y - this.Position.Y)** 2)
        return this.Charge * ChargedObject.K / r ** 2;
    }
    
    // GetForce(x,y)
    // {
    //     let r = Math.sqrt((x - this.Position.X)** 2 + (y - this.Position.Y)** 2)
    //     return this.Charge * ChargedObject.K / r ** 2;
    // }

    Paint(canvas)
    {
        if(this.Charge > 0)
            CanvasDrawer.DrawCircle(canvas,this.Position,10,'red');
        else 
        CanvasDrawer.DrawCircle(canvas,this.Position,10,'blue');
    }
}