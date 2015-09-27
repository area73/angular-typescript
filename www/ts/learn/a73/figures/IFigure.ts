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
    centX:number;
    centY:number;

    setSize(...rest:number[]):void;
    setPos(x:number, y:number):void;
    move(x:number , y:number):void;

}