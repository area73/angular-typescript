/**
 * Created by rerades on 4/9/15.
 */
export interface IFigure {
    x:number;
    y:number;
    width:number;
    height:number;
    color:string;
    borderWidth:number;
    borderColor:string;
    alpha:number;
    speedX:number;
    speedY:number;
    canvas:SVGElement;

    setSize(...rest:number[]);
    setPos(x:number, y:number);
    move(x:number , y:number);
    // constructor(canvas:SVGElement);
}