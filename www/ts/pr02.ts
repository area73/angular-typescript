/**
 * Created by rerades on 12/8/15.
 */

/**
 * @description
 * Archivo donde definimos las clases y la funcionalidad del método principal
 *
 * @learn
 * Vamos a ver la estructura de las clases y como instanciarlas
 */



/**
 * @description
 * Clase Ball
 *
 * @learn
 * 1) definición de la clase
 * 2) Constructor
 * 3) instanciar una clase  --> probar con un alert
 * 4) probar a pasar parámetros al constructor
 * 5) crear variables de clase
 * 6) crear métodos
 * 7) ES5 crear setters y getters con accessor (get radius())  (se necesita ES5  (compilador --> /usr/local/lib/node_modules/typescript/bin))
 * 8) añadir al DOM
 */



// TODO:  1 definición de la clase (escribir arriba)
class Ball {
     // TODO: 5
     //private _SVGCircle:SVGCircleElement;

    // TODO: 7

    //private _radius : number = 10;
    //private _x : number = 100;
    //private _y : number = 100;
    //private _color:string;
    //private _borderWidth:number;
    //private _borderColor:string;
    //private _alpha:number;

    // TODO: 2

    //constructor() {
    //    console.log('clase creada');
    //}

    // TODO: 4a:: parametros obligatorios  [comentar anterior]

    //constructor(info:String) {
    //    console.log(info);
    //}

    // TODO: 4b:: parámetros predefinidos [comentar anterior]

    //constructor(info:String, version:number = 1) {
    //    console.log('info', info);
    //    console.log('versión', version);
    //}


    // TODO: 4c:: parámetros optativos [comentar anterior]

    //constructor(info:String, version:number = 1, principal?:boolean) {
    //    console.log('info', info);
    //    console.log('versión', version);
    //    console.log('es principal', principal);
    //    console.log('------------------------');
    //}

    // TODO 5:: Variables de clase [comentar anterior]
    // TODO NOTA: explicar también la creación de variables de clase en el contructor

    //constructor(canvas:SVGElement) {
    //    var canvasNS = canvas.namespaceURI;
    //    this._SVGCircle = <SVGCircleElement>document.createElementNS(canvasNS,'circle');
    //    canvas.appendChild(this._SVGCircle);
    //}

    // TODO 6

    //public setPos(x:number, y:number, r:number = 10):void {
    //    this._SVGCircle.cx.baseVal.value = x;
    //    this._SVGCircle.cy.baseVal.value = y;
    //    this._SVGCircle.r.baseVal.value = r;
    //}

    // TODO 7 [comentar anterior]

    //public setPos(x:number,
    //              y:number,
    //              r:number = 10,
    //              color:string = '#ff0',
    //              borderWidth:number = 1,
    //              borderColor:string = '#aaa',
    //              alpha:number = 1):void {
    //    this.x = x;
    //    this.y = y;
    //    this.radius = r;
    //    this.color = color;
    //    this.borderColor = borderColor;
    //    this.borderWidth = borderWidth;
    //    this.alpha = alpha;
    //}


    // TODO: 7 accesors

    //public get radius():number {
    //    return this._radius;
    //}
    //
    //public set radius(value:number) {
    //    this.SVGCircle.r.baseVal.value = value;
    //    this._radius = value;
    //}
    //
    //
    //public get x():number {
    //    return this._x;
    //}
    //
    //public set x(value:number) {
    //    this._SVGCircle.cx.baseVal.value = value;
    //    this._x = value;
    //}
    //
    //public get y():number {
    //    return this._y;
    //}
    //
    //public set y(value:number) {
    //    this._SVGCircle.cy.baseVal.value = value;
    //    this._y = value;
    //}
    //
    //public get SVGCircle():SVGCircleElement {
    //    return this._SVGCircle;
    //}
    //
    //public set SVGCircle(value:SVGCircleElement) {
    //    this._SVGCircle = value;
    //}
    //
    //
    //public get color():string {
    //    return this._color;
    //}
    //
    //public set color(value:string) {
    //    // this.SVGCircle.setAttribute('fill', value);
    //    this.SVGCircle.style.fill = value;
    //    this._color = value;
    //}
    //
    //public get borderWidth():number {
    //    return this._borderWidth;
    //}
    //
    //public set borderWidth(value:number) {
    //    this.SVGCircle.style.strokeWidth = <string><any>value;
    //    this._borderWidth = value;
    //}
    //
    //public get borderColor():string {
    //    return this._borderColor;
    //}
    //
    //public set borderColor(value:string) {
    //    this.SVGCircle.style.stroke = value;
    //    this._borderColor = value;
    //}
    //
    //public get alpha():number {
    //    return this._alpha;
    //}
    //
    //public set alpha(value:number) {
    //    this.SVGCircle.style.opacity = <string><any>value;
    //    this._alpha = value;
    //}

} // fin de la definición de la clase BALL


/** FUNCIONES PRINCIPALES FUERA DE LA DEFINICIÓN DE LA CLASE **/

// TODO: 3
// var c1:Ball = new Ball();

// TODO: 4a

//new Ball('primera bola');
//new Ball('segunda bola');
//new Ball('tercera');

// TODO: 4b

//new Ball('primera bola', 5);
//new Ball('segunda bola', 2);
//new Ball('tercera');

// TODO: 4c

//new Ball('primera bola', 5, true);
//new Ball('segunda bola', 2);
//new Ball('tercera');

// TODO: 5 nos creamos el SVG canvas y lo añadimos al display list
// var canvas:SVGElement = <SVGElement>document.createElementNS("http://www.w3.org/2000/svg", "svg");
// canvas.id = 'canvas';
// var wrapper = document.getElementById('wrapper');
// wrapper.appendChild(canvas);
// var c1:Ball = new Ball(canvas);

// TODO: 6

//c1.setPos(50,50,30);
//var c2:Ball = new Ball(canvas);
//c2.setPos(100,80);

// TODO: 7 [comentar anterior]

//c1.setPos( Math.random()*500 , Math.random()*500);
//c1.radius = (Math.random()*10)+5;
//c1.color = '0xff0000';
//c1.borderWidth = 3;
//c1.borderColor = '#000';
//c1.borderWidth = 2;


// TODO: 8 loop

// for (var i:number = 0; i < 1500 ; i++) {
//    var c1:Ball = new Ball(canvas);
//    c1.setPos(Math.random()*canvas.clientWidth,
//        Math.random()*canvas.clientHeight,
//        Math.random()*20+2,
//        '#ff0000',
//        null,
//        null,
//        0.25);
//}



