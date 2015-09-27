/**
 * Created by rerades on 30/8/15.
 */



export class Ball {

    private _x:number;
    private _y:number;
    private _color:string;
    private _borderWidth:number;
    private _borderColor:string;
    private _alpha:number;
    private _canvas:SVGElement;
    private _SVGElement:SVGCircleElement;
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
        this._SVGElement = <SVGCircleElement>document.createElementNS(canvasNS, 'circle');
        canvas.appendChild(this._SVGElement);
    }


    public setSize(r:number):void {
        this.width = r;
        this.height = r;
        this.setLimits();

    }



    protected setLimits():void {
        //TODO: triple igualdad
        this._leftLimit = this._rightLimit = this._width/2;
        this._topLimit = this._bottomLimit = this._height/2;
    }


    public setPos(x:number, y:number):void {
        this.x = x;
        this.y = y;

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


    private checkBounce():void {
        this.speedX = (this._x + this._rightLimit > this._canvas.clientWidth) ?  - Math.abs(this.speedX) :
            (this._x - this._leftLimit  < 0) ?  Math.abs(this.speedX) : this.speedX  ;
        this.speedY = (this._y + this._bottomLimit  > this._canvas.clientHeight) ? - Math.abs(this.speedY) :
            (this._y - this._topLimit  < 0) ?  Math.abs(this.speedY) : this.speedY ;
    }

    // ------------------------------------------------------------------------------------------------------------
    // -- SETTERS y GETTERS
    // ------------------------------------------------------------------------------------------------------------



    public set height(value:number) {
        (<SVGCircleElement>this.SVGElement).r.baseVal.value = value;
        this._height = value;
    }

    public set x(value:number) {
        (<SVGCircleElement>this.SVGElement).cx.baseVal.value = value;
        this._x = value;
    }


    public set y(value:number) {
        (<SVGCircleElement>this.SVGElement).cy.baseVal.value = value;
        this._y = value;
    }

    public set color(value:string) {
        (<SVGCircleElement>this.SVGElement).style.fill = value;
    }

      public set borderWidth(value:number) {
        (<SVGCircleElement>this.SVGElement).style.strokeWidth = <string><any>value;
      }


    public set borderColor(value:string) {
        (<SVGCircleElement>this.SVGElement).style.stroke = value;
      }


    public set alpha(value:number) {
        (<SVGCircleElement>this.SVGElement).style.opacity = <string><any>value;
    }

    public get SVGElement():SVGCircleElement {
        return this._SVGElement;
    }

    public set SVGElement(value:SVGCircleElement) {
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

    public set width(value:number) {
        this._width = value;
    }

    public get refreshTime():number {
        return this._refreshTime;
    }

    public set refreshTime(value:number) {
        this._refreshTime = value;
    }

    public get centX():number {
        return this._centX;
    }

    public set centX(value:number) {
        this._centX = value;
    }

    public get centY():number {
        return this._centY;
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






