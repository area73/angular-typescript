/**
 * Created by rerades on 6/9/15.
 */

import graphics = require('./IFigure');

export class Rectangle implements graphics.IFigure {

    private _canvas:SVGElement;
    private _x:number;
    private _y:number;
    private _width:number;
    private _height:number;
    private _color:string;
    private _borderWidth:number;
    private _borderColor:string;
    private _alpha:number;
    private _speedX:number;
    private _speedY:number;
    private _SVGRectangle:SVGRectElement;





    constructor(canvas:SVGElement) {
        this._canvas = canvas;
        var canvasNS = canvas.namespaceURI;
        this._SVGRectangle = <SVGRectElement>document.createElementNS(canvasNS, 'rect');
        canvas.appendChild(this._SVGRectangle);
    }




    public setPos(x:number, y:number) {
        this.x = x;
        this.y = y;
    }

    public setSize(width:number, height:number):void {

        this.width = width;
        this.height = height;
    }

    public move(speedX:number, speedY:number){
        this._speedX = speedX;
        this._speedY = speedY;
        this.startToMove();
    }

    private startToMove():void {
        setInterval(
            () => {
                // console.log(this._x)
                this.checkBounce();
                this.x = this.x + this.speedX;
                this.y = this.y + this.speedY;

            }, 30)
    }


    private checkBounce():void {
        this.speedX = (this.x + this.width > this._canvas.clientWidth)   ? - Math.abs(this.speedX) :  (this.x < 0) ?  Math.abs(this.speedX) : this.speedX ;
        this.speedY = (this.y + this.height > this._canvas.clientHeight) ? - Math.abs(this.speedY) :  (this.y < 0) ?  Math.abs(this.speedY) : this.speedY;
    }


    public get x():number {
        // return this._x + this.width / 2;
        return this._x ;
    }

    public set x(value:number) {
        this._SVGRectangle.x.baseVal.value = value;
        this._x = value;
    }

    public get y():number {

        // return this._y + this.height / 2;
        return this._y;
    }

    public set y(value:number) {
        this._SVGRectangle.y.baseVal.value = value;
        this._y = value;
    }

    public get width():number {
        return this._width;
    }

    public set width(value:number) {
        this._SVGRectangle.width.baseVal.value = value;
        this._width = value;
    }

    public get height():number {
        return this._height;
    }

    public set height(value:number) {
        this._SVGRectangle.height.baseVal.value = value;
        this._height = value;
    }

    public get color():string {
        return this._color;
    }

    public set color(value:string) {
        this._SVGRectangle.style.fill = value;
        this._color = value;
    }

    public get borderWidth():number {
        return this._borderWidth;
    }

    public set borderWidth(value:number) {
        this._SVGRectangle.style.strokeWidth = <any>value;
        this._borderWidth = value;
    }

    public get borderColor():string {
        return this._borderColor;
    }

    public set borderColor(value:string) {
        this._SVGRectangle.style.stroke = value;
        this._borderColor = value;
    }

    public get alpha():number {
        return this._alpha;
    }

    public set alpha(value:number) {
        this._SVGRectangle.style.fillOpacity = <any>value;
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

    public get canvas():SVGElement {
        return this._canvas;
    }

    public set canvas(value:SVGElement) {
        this._canvas = value;
    }

    public get SVGRectangle():SVGRectElement {
        return this._SVGRectangle;
    }

    public set SVGRectangle(value:SVGRectElement) {
        this._SVGRectangle = value;
    }
}

