/**
 * Created by rerades on 30/8/15.
 */


/**
 *
 * Creamos interface para las figuras
 *
 * creamos 2 clases nuevas triangulo y rectangulo
 *
 * cambiamos los parámetros de LineConnector para que acepte un Interface en vez de una clase específica
 *
 *
 */


// TODO :: ES6 Modules (https://github.com/Microsoft/TypeScript/issues/2242)
import {LineConnector} from'./learn/a73/figures/LineConnector';
import {decToHex} from './learn/a73/utils';

import {Triangle} from './learn/a73/figures/Triangle';
import {Ball as Circle} from './learn/a73/figures/Ball'; // TODO: export as
import Rectangle from'./learn/a73/figures/Rectangle';   // TODO: exporting as default (mirar Rectangle class)

import {InteractiveObject} from './learn/a73/figures/InteractiveObject';



var canvas:SVGElement = <SVGElement>document.createElementNS("http://www.w3.org/2000/svg", "svg");
canvas.id = 'canvas';
document.body.appendChild(canvas);


var lastCircle:Circle;
var cOrigin:Circle;



for (var i:number = 0; i < 20; i++) {
    var c1:Circle;
    c1 = new Circle(canvas);
    var randColor:string = '#' + decToHex(Math.random() * 16777215);

    c1.setPos(Math.random() * canvas.clientWidth, Math.random() * canvas.clientHeight);
    c1.setSize(Math.random() * 10 + 5);
    c1.color = randColor;
    c1.alpha = 0.25;
    c1.borderColor = '#666666';
    c1.move(5 - Math.random() * 10, 5 - Math.random() * 10);
    if (i > 0) {
        var lc:LineConnector = new LineConnector(c1, this.cOrigin);
        lc.color = '#a2d2f0';
    } else {
        this.cOrigin = c1;
    }
}



/*

for (var i:number = 0; i < 20; i++) {

    var t:Triangle = new Triangle(canvas);
    var randColor:string = '#' + decToHex(Math.random() * 16777215);
    var long:number = Math.round(Math.random() * 20 + 15);
    t.setSize(long, long);
    t.setPos(Math.round(Math.random() * canvas.clientWidth), Math.round(Math.random() * canvas.clientHeight));
    t.move(Math.round(5 - Math.random() * 10), Math.round(5 - Math.random() * 10));
    t.color = randColor;
    t.alpha = 0.25;

    if (i > 0) {
        var lc:LineConnector = new LineConnector(t , this.tOrigin);
        lc.color = '#ebd188';
    } else {
        this.tOrigin = t;
    }
}
*/



for (var i:number = 0; i < 20; i++) {
    var randColor:string = '#' + decToHex(Math.random() * 16777215);
    var r:Rectangle = new Rectangle(canvas);
    var long:number = Math.round(Math.random() * 20 + 15);
    r.setSize(long, long);
    r.setPos(Math.round(Math.random() * canvas.clientWidth), Math.round(Math.random() * canvas.clientHeight));
    r.move(Math.round(5 - Math.random() * 10), Math.round(5 - Math.random() * 10));
    r.color = randColor;
    r.alpha = 0.25;
    r.borderColor = '#666666';


    if (i > 0) {
        var lc:LineConnector = new LineConnector(r , this.rOrigin);
        lc.color = '#f2b4d9';
    } else {
        this.rOrigin = r;
    }

}








