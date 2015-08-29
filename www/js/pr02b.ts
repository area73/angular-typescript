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
 * creación de método
 * @learn
 *
 * crear metodo publico
 * pasar parámetros  obligatorios, opcionales, con valor por defecto
 *
 *
 *
 */


class Ball {

    private _SVGCircle:SVGCircleElement;

    constructor(canvas:SVGElement) {
        var canvasNS = canvas.namespaceURI;
        this._SVGCircle = <SVGCircleElement>document.createElementNS(canvasNS,'circle');
        canvas.appendChild(this._SVGCircle);
    }

    public setPos(x:number, y:number, r:number):void {
        this._SVGCircle.cx.baseVal.value = x;
        this._SVGCircle.cy.baseVal.value = y;
        this._SVGCircle.r.baseVal.value = r
    }
}


var canvas:SVGElement = <SVGElement>document.createElementNS("http://www.w3.org/2000/svg", "svg");
canvas.id = 'canvas';
document.body.appendChild(canvas);

var c1:Ball = new Ball(canvas);
c1.setPos(100,100,10);