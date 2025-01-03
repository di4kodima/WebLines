import {ChargedPoint} from "../ChargedObjects/ChargedPoint.js"
import { Brush } from "./Brush.js";

export class ChargedPointBrush extends Brush
{
    Canvas;
    Click(event)
    {
        console.log(this.Canvas);
        let point = new ChargedPoint(this.Charge);

        
        var rect = this.Canvas.getBoundingClientRect();
        console.log(rect);
        point.Position.X = event.clientX - rect.left;
        point.Position.Y = event.clientY - rect.top;
        point.Charge = this.Charge;
        point.Paint(this.Canvas);

        console.log(point);
        this.Field.AddChargeObject(point);
        // this.OnCompleteAction(point);
    }
    MouseMove(event){}
    Exit(){}
}