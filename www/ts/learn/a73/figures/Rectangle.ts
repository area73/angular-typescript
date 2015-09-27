/**
 * Created by rerades on 6/9/15.
 */

// import graphics = require('./IFigure');


import {InteractiveObject} from './InteractiveObject';

export default class Rectangle extends InteractiveObject {

    constructor(canvas:SVGElement) {
        super (canvas, 'rect');
    }

    public set x(value:number) {
        // todo :: polimorfismo
        (<SVGRectElement>this.SVGElement).x.baseVal.value = value;
        this._x = value;

    }

    public set y(value:number) {
        (<SVGRectElement>this.SVGElement).y.baseVal.value = value;
         this._y = value;
    }

    public set width(value:number) {
        (<SVGRectElement>this.SVGElement).width.baseVal.value = value;
        this._width = value
    }


    public set height(value:number) {
        (<SVGRectElement>this.SVGElement).height.baseVal.value = value;
        this._height = value
    }

    public set color(value:string) {
        (<SVGRectElement>this.SVGElement).style.fill = value;
    }

    public set borderWidth(value:number) {
        (<SVGRectElement>this.SVGElement).style.strokeWidth = <any>value;
    }

    public set borderColor(value:string) {
        (<SVGRectElement>this.SVGElement).style.stroke = value;
    }


    public set alpha(value:number) {
        (<SVGRectElement>this.SVGElement).style.fillOpacity = <any>value;
    }

    public get centX():number {
        return this._width/2 + this._x;
    }

    public get centY():number {
        return this._height/2 + this._y;
    }

}


