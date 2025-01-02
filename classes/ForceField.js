import { CanvasDrawer } from "./CanvasClasses/CanvasDrawer.js";
import { Vector2 } from "./Vector2.js";


export class ForceField
{
    Canvas;
    ChargedObjects = [];

    AddChargeObject(chargedObject)
    {
        this.ChargedObjects.push(chargedObject);
    }

    ForceLinesPaint(count, step)
    {
        let PosCharges = this.ChargedObjects.filter(e => e.Charge > 0);
        PosCharges.forEach(PosCharge => {
            
            for (let a = 0; a < Math.PI * 2; a += Math.PI * 2 / count)
                {
                    let point = new Vector2(PosCharge.Position.X + Math.cos(a) * 5, PosCharge.Position.Y + Math.sin(a) * 5);
                    this.ForceLinePaint(point, step);
                }
        });
    }

    ForceLinePaint(start,h, IterCount = 1000)
    {
        let Vres = new Vector2(0,0);
        IterCount--;
        if (IterCount <= 0)
        {
            return;
        }
        this.ChargedObjects.forEach(Charge => 
        {
            let Field = Charge.GetForce(start);

            if (Field < -1000000000) return;
            if (Math.abs(Field) < 0.00000000001) return;
            let v = new Vector2(-Charge.Position.X + start.X, -Charge.Position.Y + start.Y);
            v.Normalize();
            v.X *= Charge.GetForce(start);
            v.Y *= Charge.GetForce(start);

            Vres.X += v.X;
            Vres.Y += v.Y;
        })
        
        let a = h;

        Vres.Normalize();
        if (start.X > this.Canvas.weght + h || start.X + h < 0 || start.Y > this.Canvas.height + h || start.Y < 0)
            a = 100;

        Vres.X *= a;
        Vres.Y *= a;

        if (!(start.X > this.Canvas.weght || start.X < 0 || start.Y > this.Canvas.height || start.Y < 0))
           {
            CanvasDrawer.DrawLine(this.Canvas ,new Vector2(start.X, start.Y), new Vector2(start.X + Vres.X, start.Y + Vres.Y), 'red');
           }

        this.ForceLinePaint(new Vector2(start.X + Vres.X, start.Y + Vres.Y), h, IterCount);
    }
    
    EquipotentialLinesPaint(MinField, MaxField, LinesCount, h)
    {
        if (this.ChargedObjects.Count == 0) return;

        let values = [];

        for (let i = 1; i < LinesCount + 1; i++)
        {
            values.push(MinField + ((MaxField - MinField) / LinesCount * i));
        }
        
        for (let i = 0; i < 1200 / h; i++)
        {
            for (let j = 0; j < 800 / h; j++)
            {
                values.forEach(val =>
                {
                    this.Rastr(0 + h * i, 0 + h * j, h, val);
                    this.Rastr(0 + h * i, 0 + h * j, h, -val);
                });
            }
        }
    }

    Rastr( x,  y,  h,  val)
    {
        let points = [];

        let point = new Vector2(0,0);

        points.push(this.OnLine(x, x + h, y, y, h, val));
        points.push(this.OnLine(x + h, x + h, y, y + h, h, val));
        points.push(this.OnLine(x, x + h, y + h, y + h, h, val));
        points.push(this.OnLine(x, x, y, y + h, h, val));

        points = points.filter(p => p);
        if (points.length == 2)
        {
            CanvasDrawer.DrawLine(this.Canvas,new Vector2(points[0].X, points[0].Y), new Vector2(points[1].X, points[1].Y), "blue");
        }
    }

    OnLine( x1,  x2,  y1,  y2,  h,  v)
    {
        let f1 = this.func(new Vector2(x1, y1));
        let f2 = this.func(new Vector2(x2, y2));
        let min = Math.min(f1, f2);
        let max = Math.max(f1, f2);
        let p = new Vector2(0,0);

        if (x1 != x2)
            if (f1 < f2)
                p.X = x1 + h * (v - min) / (max - min);
            else
                p.X = x1 + h * (1 - (v - min) / (max - min));
        else
            p.X = x1;

        if (y2 != y1)
            if (f1 > f2)
                p.Y = y1 + h * (1 - (v - min) / (max - min));
            else
                p.Y = y1 + h * ((v - min) / (max - min));
        else
            p.Y = y1;
        if(v <= max && v > min)
            return p;
        else return null;
    }

    func(Position)
    {
        let Force = 0;
        this.ChargedObjects.forEach(charge =>
            Force += charge.GetForce(Position)
        );
        return Force;
    }
}

