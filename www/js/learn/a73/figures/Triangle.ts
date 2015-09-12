/**
 * Created by rerades on 4/9/15.
 */

import graphics = require('./IFigure');

export class Triangle implements graphics.IFigure {

    private _canvas:SVGElement;
    private _SVGTrinagle:SVGPolygonElement;
    private _x:number = 100;
    private _y:number = 100;
    private _color:string;
    private _borderWidth:number;
    private _borderColor:string;
    private _alpha:number;
    private _speedX:number;
    private _speedY:number;
    private _width:number;
    private _height:number;

    constructor(canvas:SVGElement) {
        this._canvas = canvas;
        var canvasNS = canvas.namespaceURI;
        this._SVGTrinagle = <SVGPolygonElement>document.createElementNS(canvasNS, 'polygon');
        canvas.appendChild(this._SVGTrinagle);

    }



    public setPos(x:number, y:number):void {
        this.x = x;
        this.y = y;
    }


    public setSize(width:number, height:number):void {

        var p1:SVGPoint = (<SVGSVGElement>this._canvas).createSVGPoint();
        p1.x = 0;
        p1.y = 0;

        var p2:SVGPoint = (<SVGSVGElement>this._canvas).createSVGPoint();
        p2.x = width;
        p2.y = 0;

        var p3:SVGPoint = (<SVGSVGElement>this._canvas).createSVGPoint();
        p3.x = width/2;
        p3.y = height;

        this._SVGTrinagle.points.appendItem(p1);
        this._SVGTrinagle.points.appendItem(p2);
        this._SVGTrinagle.points.appendItem(p3);

    }


    public move(speedX:number , speedY:number){
        this._speedX = speedX;
        this._speedY = speedY;
        this.startToMove();
    }

    private startToMove():void {
        setInterval(
            () => {
                // console.log(this._x)
                this.checkBounce();
                this.x =  this.speedX;
                this.y =  this.speedY;
            }, 30)
    }

    private checkBounce():void {
        this.speedX = (this._SVGTrinagle.getBBox().x +  this._SVGTrinagle.getBBox().width  > this._canvas.clientWidth)   ?  - Math.abs(this.speedX) : (this._SVGTrinagle.getBBox().x < 0) ? Math.abs(this.speedX) : this.speedX  ;
        this.speedY = (this._SVGTrinagle.getBBox().y +  this._SVGTrinagle.getBBox().height  > this._canvas.clientHeight) ?  - Math.abs(this.speedY) : (this._SVGTrinagle.getBBox().y < 0) ? Math.abs(this.speedY) : this.speedY  ;
    }


    public get canvas():SVGElement {
        return this._canvas;
    }

    public set canvas(value:SVGElement) {
        this._canvas = value;
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
        this._x = value;
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
        this._y = value;
    }

    public get color():string {
        return this._color;
    }

    public set color(value:string) {
        this._SVGTrinagle.style.fill = value;
        this._color = value;
    }

    public get borderWidth():number {
        return this._borderWidth;
    }

    public set borderWidth(value:number) {
        this._SVGTrinagle.style.strokeWidth = <any>value;
        this._borderWidth = value;
    }

    public get borderColor():string {
        return this._borderColor;
    }

    public set borderColor(value:string) {
        this._SVGTrinagle.style.stroke = value;
        this._borderColor = value;
    }

    public get alpha():number {
        return this._alpha;
    }

    public set alpha(value:number) {
        this._SVGTrinagle.style.fillOpacity = <any>value;
        this._alpha = value;
    }

    public get speedX():number {
        return this._speedX;
    }

    public set speedX(value:number) {
        this._speedX = value;
    }

    public get speedY():number {
        return this._speedY;
    }

    public set speedY(value:number) {
        this._speedY = value;
    }

    public get width():number {
        return this._width;
    }

    public set width(value:number) {
        this._width = value;
    }

    public get height():number {
        return this._height;
    }

    public set height(value:number) {
        this._height = value;
    }
}
