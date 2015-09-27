/**
 * Created by rerades on 30/8/15.
 */


/**
 * @description
 * Creamos la clase LineConnector y
 * añadimos más funcionalidades a Ball (move, rebounce)
 *  creamos métodos globales de ayuda (utils)
 * mostramos posibilidades de tipos de uniones
 *
 * @learn
 * 1) añadimos método publico move a la bola
 * 2) formas de hacer los imports
 * 3) crear función global utils
 * 4) crear clase connector

 * 5) alternativas de presentación
 */


var canvas:SVGElement = <SVGElement>document.createElementNS("http://www.w3.org/2000/svg", "svg");
canvas.id = 'canvas';
var wrapper = document.getElementById('wrapper');
wrapper.appendChild(canvas);


// TODO: 2

// TODO: import clásico
// import figure = require('./learn/a73/figures/Ball');
// truco: alias
// import Ball = figure.Ball;
// TODO: export
// import {Ball} from './learn/a73/figures/Ball'; //
// TODO: export as
// import {Ball as Circle} from './learn/a73/figures/Ball'; //
// TODO: export default
// import Ball from './learn/a73/figures/Ball'; //

// TODO: 2b

//import {Ball as Circle} from './learn/a73/figures/Ball';
//
//var c1:Circle = new Circle(canvas);
//c1.setPos(Math.random() * canvas.clientWidth,
//    Math.random() * canvas.clientHeight,
//    Math.random() * 10 + 5,
//    '#fa3a77', null, null, 0.25);
//
//c1.move(5 - Math.random()*10,
//    5 - Math.random() * 10);

// TODO: 3b

//import {Ball as Circle} from './learn/a73/figures/Ball';
//import {decToHex} from './learn/a73/utils';
//
//for (var i:number = 0; i < 100; i++) {
//    var c1:Circle = new Circle(canvas);
//    c1.setPos(Math.random() * canvas.clientWidth, Math.random() * canvas.clientHeight,);
//    c1.alpha = 0.25;
//    c1.color = '#' + decToHex(Math.random() * 16777215);
//    c1.move(5 - Math.random()*10, 5 - Math.random() * 10);
//}

// TODO: 4b [comentar lo anterior]

//import {Ball as Circle} from './learn/a73/figures/Ball';
//import {decToHex} from './learn/a73/utils';
//import {LineConnector} from './learn/a73/figures/LineConnector';
//
//var c0:Circle;
//for (var i:number = 0; i < 20; i++) {
//    var c1:Circle = new Circle(canvas);
//    c1.setPos(Math.random() * canvas.clientWidth, Math.random() * canvas.clientHeight);
//    c1.alpha = 0.25;
//    c1.color = '#' + decToHex(Math.random() * 16777215);
//    c1.move(5 - Math.random() * 10, 5 - Math.random() * 10);
//
//    if (i % 2 !== 0 && i !== 0) {
//        new LineConnector(c1, c0);
//        c0 = c1;
//    }
//    c0 = c1;
//}

// TODO: 5a [comentar lo anterior]

//import {Ball as Circle} from './learn/a73/figures/Ball';
//import {decToHex} from './learn/a73/utils';
//import {LineConnector} from './learn/a73/figures/LineConnector';
//
//var c0:Circle;
//for (var i:number = 0; i < 5; i++) {
//    var c1:Circle = new Circle(canvas);
//    c1.setPos(Math.random() * canvas.clientWidth, Math.random() * canvas.clientHeight);
//    c1.alpha = 0.25;
//    c1.color = '#' + decToHex(Math.random() * 16777215);
//    c1.move(5 - Math.random() * 10, 5 - Math.random() * 10);
//
//    if (i !== 0) {
//        new LineConnector(c1, c0);
//        c0 = c1;
//    }
//    c0 = c1;
//}



// TODO: 5b [comentar lo anterior]

//import {Ball as Circle} from './learn/a73/figures/Ball';
//import {decToHex} from './learn/a73/utils';
//import {LineConnector} from './learn/a73/figures/LineConnector';
//
//var c0:Circle;
//for (var i:number = 0; i < 50; i++) {
//    var c1:Circle = new Circle(canvas);
//    c1.setPos(Math.random() * canvas.clientWidth, Math.random() * canvas.clientHeight);
//    c1.alpha = 0.25;
//    c1.color = '#' + decToHex(Math.random() * 16777215);
//    c1.move(5 - Math.random() * 10, 5 - Math.random() * 10);
//
//    if (i !== 0) {
//        new LineConnector(c1, c0);
//    } else {
//        c0 = c1;
//    }
//
//
//}