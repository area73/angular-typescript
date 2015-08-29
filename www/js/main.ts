/**
 * Created by rerades on 30/8/15.
 */


/**
 *
 * Utilizamos módulos para identificar de forma inequívoca nuestras clases
 *
 *  [MODULOS INTERNOS]
 *
 */




/// <reference path="learn/a73/figures/Ball.ts" />



var canvas:SVGElement = <SVGElement>document.createElementNS("http://www.w3.org/2000/svg", "svg");
canvas.id = 'canvas';
document.body.appendChild(canvas);


for (var i:number = 0; i < 1500 ; i++) {
    var c1:learn.a73.figures.Ball;
    c1 = new learn.a73.figures.Ball(canvas);
    c1.setPos(Math.random()*canvas.clientWidth, Math.random()*canvas.clientHeight,Math.random()*10+5,'#ff0000',null,null,0.25);
}


