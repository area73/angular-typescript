/**
 * Created by rerades on 12/9/15.
 */


import {IFigure} from './IFigure';


export class InteractiveObject implements IFigure {

    protected _x:number;
    protected _y:number;
    private _color:string;
    private _borderWidth:number;
    private _borderColor:string;
    private _alpha:number;
    private _canvas:SVGElement;
    private _SVGElement:Element;
    private _speedX:number;
    private _speedY:number;
    protected _width:number;
    protected _height:number;
    private _refreshTime:number = 30;
    private _centX:number;
    private _centY:number;
    protected _rightLimit:number = 0;
    protected _bottomLimit:number = 0;
    protected _leftLimit:number = 0;
    protected _topLimit:number = 0;

    constructor(canvas:SVGElement, svgElName:string) {
        this._canvas = canvas;
        var canvasNS = canvas.namespaceURI;
        this._SVGElement = document.createElementNS(canvasNS, svgElName);
        canvas.appendChild(this._SVGElement);
    }


    public setPos(x:number, y:number):void {
        this.x = x;
        this.y = y;

    }


    // TODO: explicar overloads
    public setSize(w:number, h:number):void {
        this.width = w;
        this.height = h;
        this.setLimits();
    }

    protected setLimits():void {
        this._rightLimit = this._width;
        this._bottomLimit = this._height;
    }


    public move(speedX:number, speedY:number) {
        this.speedX = speedX;
        this.speedY = speedY;
        this.startToMove();
    }


    private startToMove():void {
        setInterval(
            () => {
                // console.log(this._x)
                this.checkBounce();

                this.x = this._x + this.speedX;
                this.y = this._y + this.speedY;

            }, this._refreshTime)
    }

    // todo: --> protected
    protected checkBounce():void {
        this.speedX = (this._x + this._rightLimit > this._canvas.clientWidth) ?  - Math.abs(this.speedX) : (this._x - this._leftLimit  < 0) ?  Math.abs(this.speedX) : this.speedX  ;
        this.speedY = (this._y + this._bottomLimit  > this._canvas.clientHeight) ? - Math.abs(this.speedY) : (this._y - this._topLimit  < 0) ?  Math.abs(this.speedY) : this.speedY ;
    }


    // ------------------------------------------------------------------------------------------------------------
    // -- SETTERS y GETTERS
    // ------------------------------------------------------------------------------------------------------------


    public get x():number {
        return this._x;
    }


    public set x(value:number) {
        this._x = value;
    }


    public get y():number {
        return this._y;
    }

    public set y(value:number) {
        this._y = value;
    }

    public get color():string {
        return this._color;
    }

    public set color(value:string) {
        this._color = value;
    }

    public get borderWidth():number {
        return this._borderWidth;
    }

    public set borderWidth(value:number) {
        this._borderWidth = value;
    }

    public get borderColor():string {
        return this._borderColor;
    }

    public set borderColor(value:string) {
        this._borderColor = value;
    }

    public get alpha():number {
        return this._alpha;
    }

    public set alpha(value:number) {
        this._alpha = value;
    }

    public get canvas():SVGElement {
        return this._canvas;
    }

    public set canvas(value:SVGElement) {
        this._canvas = value;
    }

    public get SVGElement():Element {
        return this._SVGElement;
    }

    public set SVGElement(value:Element) {
        this._SVGElement = value;
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


    public get refreshTime():number {
        return this._refreshTime;
    }

    public set refreshTime(value:number) {
        this._refreshTime = value;
    }


    public get centX():number {
        return this._x;
    }


    public get centY():number {
        return this._y;
    }


}
