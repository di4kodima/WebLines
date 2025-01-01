export class ChargedObject
{
    static get K()
    {
        return 8.987551787e9;
    }

    Paint(canvas){}

    Charge;
    constructor(position, charge)
    {
        this.Charge = charge;
    }

    GetForce(position) 
    {
        return;
    }
}