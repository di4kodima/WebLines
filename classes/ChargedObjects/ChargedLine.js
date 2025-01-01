export {ChargedObject} from "./ChargedObject.js"

export class ChargedLine extends ChargedObject
{
    GetForce(position)
    {
        console.log(this.Position);
    }
}