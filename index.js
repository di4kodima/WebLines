import {ForceField} from "./classes/ForceField.js";
import {BrushesHandler} from "./classes/CanvasBrushes/BrushesHander.js"
import {ChargedPointBrush} from "./classes/CanvasBrushes/ChargedPointBrush.js"
import { CanvasDrawer } from "./classes/CanvasClasses/CanvasDrawer.js";
import { Vector2 } from "./classes/Vector2.js";

var Canvas = document.getElementById("myCanvas");
let Field = new ForceField();
Field.Canvas = Canvas;
let BrushHandler = new BrushesHandler(Canvas, Field);

var ForceLinesCountInput = document.getElementById("ForceLinesCountInput");
var ForceLinesStepInput = document.getElementById("ForceLinesStepInput");

var EqviLinesStepInput = document.getElementById("EqviLinesStepInput");
var EqviLinesCountInput = document.getElementById("EqviLinesCountInput");
var EqviLinesMinForceInput = document.getElementById("EqviLinesMinForceInput");
var EqviLinesMaxForceInput = document.getElementById("EqviLinesMaxForceInput");

var ClearButton = document.getElementById("ClearButton");
ClearButton.addEventListener('click', function(event)
{
    const ctx = Canvas.getContext('2d');
    ctx.clearRect(0, 0, Canvas.width, Canvas.height);
    Field.ChargedObjects = [];
})

var PaintButton = document.getElementById("PaintButton");
PaintButton.addEventListener('click', function(event)
{
    const ctx = Canvas.getContext('2d');
    ctx.clearRect(0, 0, Canvas.width, Canvas.height);
    Field.ChargedObjects.forEach(element => {
        element.Paint(Canvas);
    });
    Field.ForceLinesPaint(ForceLinesCountInput.value, ForceLinesStepInput.value);
    Field.EquipotentialLinesPaint(+EqviLinesMinForceInput.value,+EqviLinesMaxForceInput.value,+EqviLinesCountInput.value,+EqviLinesStepInput.value);
})

var ChargeValueInput = document.getElementById('ChargeValueInput');
ChargeValueInput.addEventListener('input', function(event)
{
    BrushHandler.Brush.Charge = event.target.value;
});

BrushHandler.Brush = new ChargedPointBrush();
BrushHandler.Brush.Charge = 5;

CanvasDrawer.DrawLine(Canvas,new Vector2(0,0),new Vector2(300,150),"magenta",5)