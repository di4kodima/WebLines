import {ChargedPoint} from "../ChargedObjects/ChargedPoint.js"
import { Brush } from "./Brush.js";

export class ChargedPointBrush extends Brush
{
    Canvas;
    Click(event)
    {
        let point = new ChargedPoint(this.Charge);
        point.Position.X = event.clientX;
        point.Position.Y = event.clientY;
        point.Charge = this.Charge;
        point.Paint(this.Canvas);

        console.log(point);
        this.Field.AddChargeObject(point);
        // this.OnCompleteAction(point);
    }
    MouseMove(event){}
    Exit(){}
}