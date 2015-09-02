/**
 * Created by rerades on 30/8/15.
 */


/**
 *
 * Creamos la clase LineConnector
 * y
 * añadimos más funcionalidades a Ball (move, rebounce)
 *
 *  creamos métodos globales de ayuda (utils)
 *
 * mostramos posibilidades de tipos de uniones
 *
 *
 */


var canvas:SVGElement = <SVGElement>document.createElementNS("http://www.w3.org/2000/svg", "svg");
canvas.id = 'canvas';
document.body.appendChild(canvas);

import figure = require('./learn/a73/figures/Ball');
import conn = require('./learn/a73/figures/LineConnector');
import utils = require('./learn/a73/utils')

var lastCircle:figure.Ball;


var cOrigin:figure.Ball ;

for (var i:number = 0; i < 20; i++) {
    var c1:figure.Ball;
    c1 = new figure.Ball(canvas);
    var randColor:string = utils.decToHex(Math.random() * 16777215);
    c1.setPos(Math.random() * canvas.clientWidth, Math.random() * canvas.clientHeight, Math.random() * 10 + 5, '#' + randColor, null, null, 0.25);
    if (i > 0) {
        // var lc:conn.LineConnector = new conn.LineConnector(c1, this.lastCircle);
        var lc:conn.LineConnector = new conn.LineConnector(c1, this.cOrigin);
    } else {
        this.cOrigin = c1;
    }
    c1.move(5 - Math.random()*10, 5 - Math.random() * 10);
    this.lastCircle = c1;
}


