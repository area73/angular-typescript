/**
 * Created by rerades on 12/8/15.
 */



/**
 * @description
 * Archivo donde definimos las clases y la funcionalidad
 *
 * @learn
 * Vamos a ver la estructura de las clases y como instanciarlas
 */


/**
 * @description
 * Clase Ball
 * Setters & getters
 *
 * @learn
 *
 * Queremos crear setters y getters para las propiedades de nuestro círculo
 * accesor (get radius())  (se necesita ES5  (compilador --> /usr/local/lib/node_modules/typescript/bin))
 *
 *
 *
 */

class Ball {

    private _radius : number = 10;
    private _x : number = 100;
    private _y : number = 100;
    private _SVGCircle:SVGCircleElement;
    private _color:string;
    private _borderWidth:number;
    private _borderColor:string;
    private _alpha:number;

    constructor(canvas:SVGElement) {
        var canvasNS = canvas.namespaceURI;
        this._SVGCircle = <SVGCircleElement>document.createElementNS(canvasNS,'circle');
        canvas.appendChild(this._SVGCircle);
    }

/*
    public setPos(x:number, y:number, r:number = 10, color:string = '#ff0', borderWidth:number = 1, borderColor:string = '#aaa', alpha:number = 1):void {
        this.x = x;
        this.y = y;
        this.radius = r;
        this.color = color;
        this.borderColor = borderColor;
        this.borderWidth = borderWidth;
        this.alpha = alpha;
    }
*/

/*
    public get radius():number {
        return this._radius;
    }

    public set radius(value:number) {
        this.SVGCircle.r.baseVal.value = value;
        this._radius = value;
    }


    public get x():number {
        return this._x;
    }

    public set x(value:number) {
        this._SVGCircle.cx.baseVal.value = value;
        this._x = value;
    }

    public get y():number {
        return this._y;
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
        this.SVGCircle.style.fill = value;
        this._color = value;
    }

    public get borderWidth():number {
        return this._borderWidth;
    }

    public set borderWidth(value:number) {
        this.SVGCircle.style.strokeWidth = value.toString();
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
        this.SVGCircle.style.opacity = <any>value;
        this._alpha = value;
    }
    */
}




var canvas:SVGElement = <SVGElement>document.createElementNS("http://www.w3.org/2000/svg", "svg");
canvas.id = 'canvas';
document.body.appendChild(canvas);


var c1:Ball = new Ball(canvas);
c1.setPos(100,100);
// c1.radius = (Math.random()*10)+5;
// c1.x = 22;
// c1.color = '0xff0000';
// c1.borderWidth = 3;
// c1.borderColor = '#000';
// c1.borderWidth = 2;







