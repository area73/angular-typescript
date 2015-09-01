/**
 * Created by rerades on 30/8/15.
 */


/**
 *
 * Utilizamos módulos para identificar de forma inequívoca nuestras clases
 *
 *  [MODULOS EXTERNOS]
 *  [commonJS ]
 *
 *  To use ES6 modules in the browser you currently need to include a module loader such as RequireJS or SystemJS or use a bundling tool such as Browserify.
 *
 *
 * Vamos a utilizar Systemjs --> https://github.com/systemjs/systemjs
 *
 *  ejecutamos desde el raiz del proyecto : npm install systemjs
 *
 *
 * copiamos del systemjs/dist --> system.js a nuestra raiz y lo referenciamos en el HTML
 *
 * Y hacenos la carga del main utilizanod system
 *
 *
 *
 * Podemos eliminar ---> /// <reference path="learn/a73/figures/Ball.ts" />
 *
 *
 *
 *
 *
 *
 * Here is how to chose which one is right for you:

 Want the package on NPM : --module commonjs
 Only want to use the code in the browser : --module amd
 Want to deploy the code on NPM and use it in the browser without any dependency on something (like requirejs, webpack or browserify etc). : --module umd
 Ready for the promised future of a truly unified and ECMA approved module system : --module system
 I recommend that for new projects you just use --module system. But it is good to be aware of this compiler option.
 *
 */


var canvas:SVGElement = <SVGElement>document.createElementNS("http://www.w3.org/2000/svg", "svg");
canvas.id = 'canvas';
document.body.appendChild(canvas);

import figure = require('./learn/a73/figures/Ball');

for (var i:number = 0; i < 1500 ; i++) {
    var c1:figure.Ball;
    c1 = new figure.Ball(canvas);
    c1.setPos(Math.random()*canvas.clientWidth, Math.random()*canvas.clientHeight,Math.random()*10+5,'#ff0000',null,null,0.25);
}


