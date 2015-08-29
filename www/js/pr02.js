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
 * @learn
 * 1) definición de la clase
 * 2) Constructor --> probar con un alert
 * 3) instanciar una clase
 * 4) probar a pasar parámetros al constructor
 * 5) crear variables de clase
 * 6) crear métodos
 * 7) explicar métodos publicos / privados hacer demo y mosrar error en TS y no JS
 * 8) ES5 crear setters y getters con accesor (get radius())  (se necesita ES5  (compilador --> /usr/local/lib/node_modules/typescript/bin))
 * 8) añadir al DOM
 */
var Ball = (function () {
    function Ball(canvas) {
        this._radius = 10;
        this._x = 100;
        this._y = 100;
        var canvasNS = canvas.namespaceURI;
        this._SVGCircle = document.createElementNS(canvasNS, 'circle');
        canvas.appendChild(this._SVGCircle);
    }
    Ball.prototype.setPos = function (x, y, r, color, borderWidth, borderColor, alpha) {
        if (r === void 0) { r = 10; }
        if (color === void 0) { color = '#ff0'; }
        if (borderWidth === void 0) { borderWidth = 1; }
        if (borderColor === void 0) { borderColor = '#aaa'; }
        if (alpha === void 0) { alpha = 1; }
        this.x = x;
        this.y = y;
        this.radius = r;
        this.color = color;
        this.borderColor = borderColor;
        this.borderWidth = borderWidth;
        this.alpha = alpha;
    };
    Object.defineProperty(Ball.prototype, "radius", {
        get: function () {
            return this._radius;
        },
        set: function (value) {
            this.SVGCircle.r.baseVal.value = value;
            this._radius = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Ball.prototype, "x", {
        get: function () {
            return this._x;
        },
        set: function (value) {
            this._SVGCircle.cx.baseVal.value = value;
            this._x = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Ball.prototype, "y", {
        get: function () {
            return this._y;
        },
        set: function (value) {
            this._SVGCircle.cy.baseVal.value = value;
            this._y = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Ball.prototype, "SVGCircle", {
        get: function () {
            return this._SVGCircle;
        },
        set: function (value) {
            this._SVGCircle = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Ball.prototype, "color", {
        get: function () {
            return this._color;
        },
        set: function (value) {
            // this.SVGCircle.setAttribute('fill', value);
            this.SVGCircle.style.fill = value;
            this._color = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Ball.prototype, "borderWidth", {
        get: function () {
            return this._borderWidth;
        },
        set: function (value) {
            this.SVGCircle.style.strokeWidth = value;
            this._borderWidth = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Ball.prototype, "borderColor", {
        get: function () {
            return this._borderColor;
        },
        set: function (value) {
            this.SVGCircle.style.stroke = value;
            this._borderColor = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Ball.prototype, "alpha", {
        get: function () {
            return this._alpha;
        },
        set: function (value) {
            this.SVGCircle.style.opacity = value;
            this._alpha = value;
        },
        enumerable: true,
        configurable: true
    });
    return Ball;
})();
var canvas = document.createElementNS("http://www.w3.org/2000/svg", "svg");
canvas.id = 'canvas';
document.body.appendChild(canvas);
var c1 = new Ball(canvas);
c1.setPos(100, 100);
c1.radius = (Math.random() * 10) + 5;
// c1.x = 22;
c1.color = '0xff0000';
c1.borderWidth = 3;
c1.borderColor = '#000';
c1.borderWidth = 2;
// c1.addToStage('artboard');
//c1.setPos(100,100);
for (var i = 0; i < 1500; i++) {
    var c1 = new Ball(canvas);
    c1.setPos(Math.random() * canvas.clientWidth, Math.random() * canvas.clientHeight, Math.random() * 10 + 5, '#ff0000', null, null, 0.25);
}
//# sourceMappingURL=pr02.js.map