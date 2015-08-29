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
 *
 * Mostramos la creción de una clase , y su constructor
 * Al constructor le vamos a pasar un parámetro que será el canvas (SVGElement) donde se creará un objeto círculo que se añadirá
 * al display list del SVG
 *
 *
 * @learn
 * 1) definición de la clase
 * 2) estructura de la clase
 * 3) parámetros en el constructor
 * 4) creación de atributos de clase (público/privado)
 * 5) instanciar una clase ---> crear objeto
 */

/*
class Ball {


    // atributos de clase
    // ------------------
    private _SVGCircle:SVGCircleElement ;

    // constructor
    // -----------
    constructor(canvas:SVGElement) {
        var canvasNS = canvas.namespaceURI;
        this._SVGCircle = <SVGCircleElement>document.createElementNS(canvasNS,'circle');
        canvas.appendChild(this._SVGCircle);
    }

    // métodos
    // -------

}
*/


/*
var canvas:SVGElement = <SVGElement>document.createElementNS("http://www.w3.org/2000/svg", "svg");
canvas.id = 'canvas';
document.body.appendChild(canvas);

var c1:Ball = new Ball(canvas);
*/


