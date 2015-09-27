/**
 * Created by rerades on 30/8/15.
 */


/**
 *  @description
 *  Creamos el método move
 *
 *  @learn
 *  1) fat arrow ámbito de las varialbes
 */


export class Ball {

    private _radius:number = 10;
    private _x:number = 100;
    private _y:number = 100;
    private _SVGCircle:SVGCircleElement;
    private _color:string;
    private _borderWidth:number;
    private _borderColor:string;
    private _alpha:number;
    private _canvas:SVGElement;
    private _speedX:number;
    private _speedY:number;

    constructor(canvas:SVGElement) {
        this._canvas = canvas;
        var canvasNS = canvas.namespaceURI;
        this._SVGCircle = <SVGCircleElement>document.createElementNS(canvasNS, 'circle');
        canvas.appendChild(this._SVGCircle);
    }

    public setPos(x:number, y:number, r:number = 10, color:string = '#ff0', borderWidth:number = 1, borderColor:string = '#aaa', alpha:number = 1):void {
        this.x = x;
        this.y = y;
        this.radius = r;
        this.color = color;
        this.borderColor = borderColor;
        this.borderWidth = borderWidth;
        this.alpha = alpha;
    }

    // TODO: 1
    public move(speedX:number, speedY:number) {
        this._speedX = speedX;
        this._speedY = speedY;
        this.startToMove();
    }

    // TODO: 2 (probar en el navegador)
    private startToMove():void {

        //setInterval(
        //    function () {
        //        this.x = this.x + this.speedX;
        //        this.y = this.y + this.speedY;
        //        console.log(this._x)
        //    }, 100)


        setInterval(
            () => {
                // TODO
                this.checkBounce();
                this.x = this.x + this.speedX;
                this.y = this.y + this.speedY;
                // console.log(this._x)
            }, 30)

    }

    // TODO: 3 (probar en el navegador)
    private checkBounce():void {
        this.speedX = (this.x > this._canvas.clientWidth || this.x < 0) ? this.speedX * -1 : this.speedX;
        this.speedY = (this.y > this._canvas.clientHeight || this.y < 0 ) ? this.speedY * -1 : this.speedY;
    }


    // SETTERS y GETTERS
    // -----------------

    public get radius():number {
        return this._radius;
    }

    public set radius(value:number) {
        this.SVGCircle.r.baseVal.value = value;
        this._radius = value;
    }


    public get x():number {
        return this._SVGCircle.cx.baseVal.value;
    }

    public set x(value:number) {
        this._SVGCircle.cx.baseVal.value = value;
        this._x = value;
    }

    public get y():number {
        return this._SVGCircle.cy.baseVal.value;
    }


    public set y(value:number) {
        this._SVGCircle.cy.baseVal.value = value;
        this._y = value;
    }

    public get SVGCircle():SVGCircleElement {
        return this._SVGCircle;
    }

    public set SVGCircle(value:SVGCircleElement) {
        this._SVGCircle = value;
    }


    public get color():string {
        return this._color;
    }

    public set color(value:string) {
        // this.SVGCircle.setAttribute('fill', value);
        this.SVGCircle.style.fill = value;
        this._color = value;
    }

    public get borderWidth():number {
        return this._borderWidth;
    }

    public set borderWidth(value:number) {
        this.SVGCircle.style.strokeWidth = <string><any>value;
        this._borderWidth = value;
    }

    public get borderColor():string {
        return this._borderColor;
    }

    public set borderColor(value:string) {
        this.SVGCircle.style.stroke = value;
        this._borderColor = value;
    }


    public get alpha():number {
        return this._alpha;
    }

    public set alpha(value:number) {
        this.SVGCircle.style.opacity = <string><any>value;
        this._alpha = value;
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
}



