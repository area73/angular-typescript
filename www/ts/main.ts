/**
 * Created by rerades on 30/8/15.
 */


/**
 * @description
 * Separamos la función main del archivo que contenía la clase Ball
 * Para referirnos a la clase Ball utilizamos (sólo a nivel de TS) /// <reference ....
 * Tendríamos que añadir todos los js (en orden) en el html
 *
 * @learn
 * 1) Separación de clases e imports internos
 */

// TODO: referecia interna
/// <reference path="learn/a73/figures/Ball.ts" />

var canvas:SVGElement = <SVGElement>document.createElementNS("http://www.w3.org/2000/svg", "svg");
canvas.id = 'canvas';
var wrapper = document.getElementById('wrapper');
wrapper.appendChild(canvas);


// TODO: Typescript necesita tener referencia a la clase Ball
// TODO: en este caso utilizamos una referencia interna con ///
// TODO: Además tendremos que añadir los JS en el HTML
// TODO: El orden de los factores SI altera el prducto

//for (var i:number = 0; i < 1500 ; i++) {
//    var c1:Ball;
//    c1 = new Ball(canvas);
//    c1.setPos(Math.random()*canvas.clientWidth, Math.random()*canvas.clientHeight,Math.random()*10+5,'#ff0000',null,null,0.25);
//}


