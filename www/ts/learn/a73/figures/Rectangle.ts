/**
 * Created by rerades on 6/9/15.
 */




export default class Rectangle  {

    private _x:number;
    private _y:number;
    private _color:string;
    private _borderWidth:number;
    private _borderColor:string;
    private _alpha:number;
    private _canvas:SVGElement;
    private _SVGElement:SVGRectElement;
    private _speedX:number;
    private _speedY:number;
    private _width:number;
    private _height:number;
    private _refreshTime:number = 30;
    private _centX:number;
    private _centY:number;
    private _rightLimit:number = 0;
    private _bottomLimit:number = 0;
    private _leftLimit:number = 0;
    private _topLimit:number = 0;

    constructor(canvas:SVGElement) {
        this._canvas = canvas;
        var canvasNS = canvas.namespaceURI;
        this._SVGElement = <SVGRectElement>document.createElementNS(canvasNS, 'rect');
        canvas.appendChild(this._SVGElement);
    }



///////////////////////

    public setPos(x:number, y:number):void {
        this.x = x;
        this.y = y;
    }

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
    private checkBounce():void {
        this.speedX = (this._x + this._rightLimit > this._canvas.clientWidth) ?  - Math.abs(this.speedX) :
            (this._x - this._leftLimit  < 0) ?  Math.abs(this.speedX) : this.speedX  ;
        this.speedY = (this._y + this._bottomLimit  > this._canvas.clientHeight) ? - Math.abs(this.speedY) :
            (this._y - this._topLimit  < 0) ?  Math.abs(this.speedY) : this.speedY ;
    }


    // ------------------------------------------------------------------------------------------------------------
    // -- SETTERS y GETTERS
    // ------------------------------------------------------------------------------------------------------------


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


    public set x(value:number) {
        // todo :: polimorfismo
        (<SVGRectElement>this.SVGElement).x.baseVal.value = value;
        this._x = value;
    }

    public set y(value:number) {
        (<SVGRectElement>this.SVGElement).y.baseVal.value = value;
        this._y = value;
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


    public get SVGElement():SVGRectElement {
        return this._SVGElement;
    }

    public set SVGElement(value:SVGRectElement) {
        this._SVGElement = value;
    }


    public get canvas():SVGElement {
        return this._canvas;
    }

    public set canvas(value:SVGElement) {
        this._canvas = value;
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



    public get refreshTime():number {
        return this._refreshTime;
    }

    public set refreshTime(value:number) {
        this._refreshTime = value;
    }

    public get centX():number {
        return this._width/2 + this._x;
    }

    public get centY():number {
        return this._height/2 + this._y;
    }

    public set centX(value:number) {
        this._centX = value;
    }

    public set centY(value:number) {
        this._centY = value;
    }

    public get rightLimit():number {
        return this._rightLimit;
    }

    public set rightLimit(value:number) {
        this._rightLimit = value;
    }

    public get bottomLimit():number {
        return this._bottomLimit;
    }

    public set bottomLimit(value:number) {
        this._bottomLimit = value;
    }

    public get leftLimit():number {
        return this._leftLimit;
    }

    public set leftLimit(value:number) {
        this._leftLimit = value;
    }

    public get topLimit():number {
        return this._topLimit;
    }

    public set topLimit(value:number) {
        this._topLimit = value;
    }
    public get x():number {
        return this._x;
    }

    public get y():number {
        return this._y;
    }

}


