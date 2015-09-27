/**
 * Created by rerades on 4/9/15.
 */

import {InteractiveObject} from './InteractiveObject';

export class Triangle extends InteractiveObject {


    private _SVGTrinagle:SVGPolygonElement;

    constructor(canvas:SVGElement) {
        super (canvas, 'polygon');
        this._SVGTrinagle = <SVGPolygonElement>this.SVGElement;

    }

    public setSize(width:number, height:number):void {

        var p1:SVGPoint = (<SVGSVGElement>this.canvas).createSVGPoint();
        p1.x = 0;
        p1.y = 0;

        var p2:SVGPoint = (<SVGSVGElement>this.canvas).createSVGPoint();
        p2.x = width;
        p2.y = 0;

        var p3:SVGPoint = (<SVGSVGElement>this.canvas).createSVGPoint();
        p3.x = width/2;
        p3.y = height;

        (<SVGPolygonElement>this.SVGElement).points.appendItem(p1);
        // todo: se podría escribir así también
        // this._SVGTrinagle.points.appendItem(p1);
        (<SVGPolygonElement>this.SVGElement).points.appendItem(p2);
        (<SVGPolygonElement>this.SVGElement).points.appendItem(p3);

        // TODO super
        super.setSize(width, height)
    }


    protected startToMove():void {
        setInterval(
            () => {
                // console.log(this._x)
                this.checkBounce();

                this.x =  this.speedX;
                this.y =  this.speedY;

            }, this.refreshTime)
    }



    protected checkBounce():void {
        this.speedX = (this._SVGTrinagle.getBBox().x +  this._SVGTrinagle.getBBox().width  > this.canvas.clientWidth) ?
            - Math.abs(this.speedX) : (this._SVGTrinagle.getBBox().x < 0) ? Math.abs(this.speedX) : this.speedX  ;
        this.speedY = (this._SVGTrinagle.getBBox().y +  this._SVGTrinagle.getBBox().height  > this.canvas.clientHeight) ?
            - Math.abs(this.speedY) : (this._SVGTrinagle.getBBox().y < 0) ? Math.abs(this.speedY) : this.speedY  ;
    }




    public get SVGTrinagle():SVGPolygonElement {
        return this._SVGTrinagle;
    }

    public set SVGTrinagle(value:SVGPolygonElement) {
        this._SVGTrinagle = value;
    }

    public get x():number {
        var points:SVGPointList =  this._SVGTrinagle.points;
        return points.getItem(0).x + this._SVGTrinagle.getBBox().width / 2;
    }

    public set x(value:number) {
        var points:SVGPointList =  this._SVGTrinagle.points;
        for (var i:number = 0; i < points.numberOfItems; i++) {
            points.getItem(i).x += value;
        }
      // super._x = value;
    }



    public get y():number {
        var points:SVGPointList =  this._SVGTrinagle.points;
        return points.getItem(0).y + this._SVGTrinagle.getBBox().height / 2;
    }

    public set y(value:number) {
        var points:SVGPointList =  this._SVGTrinagle.points;
        for (var i:number = 0; i < points.numberOfItems; i++) {
            points.getItem(i).y += value;
        }
        // this._y = value;
    }


    public set color(value:string) {
        this._SVGTrinagle.style.fill = value;
        // this._color = value;
    }


    public set borderWidth(value:number) {
        this._SVGTrinagle.style.strokeWidth = <any>value;
        // this._borderWidth = value;
    }

    public set borderColor(value:string) {
        this._SVGTrinagle.style.stroke = value;
        // this._borderColor = value;
    }


    public set alpha(value:number) {
        this._SVGTrinagle.style.fillOpacity = <any>value;
        // this._alpha = value;
    }


    public get centX():number {

        return this._width/2 + (<SVGPolygonElement>this.SVGElement).getBBox().x;
    }

    public get centY():number {
        return this._height/2 + (<SVGPolygonElement>this.SVGElement).getBBox().y;
    }

}

