/**
 * Created by rerades on 30/8/15.
 */


/**
 * No necesitamos module porque estará determinado por la ruta y el nombre del archivo
 * // module learn.a73.figures {
 *
 *  // si exportamos la clase el problema que tenemos es que
    // para instanciarla tendrmeos que hacer algo parecido a m:Ball.Ball = new Ball.Ball()
    // para solucionar esto ponemos el export al final del archivo y no a la clase




 */


    // truco:: no hacer el export de la clase aquí sino al final del archivo  (con --module system no funciona)
    //export class Ball {
    export class Ball {

        private _radius:number = 10;
        private _x:number = 100;
        private _y:number = 100;
        private _SVGCircle:SVGCircleElement;
        private _color:string;
        private _borderWidth:number;
        private _borderColor:string;
        private _alpha:number;

        constructor(canvas:SVGElement) {
            var canvasNS = canvas.namespaceURI;
            this._SVGCircle = <SVGCircleElement>document.createElementNS(canvasNS, 'circle');
            canvas.appendChild(this._SVGCircle);
        }

        public setPos(x:number, y:number, r:number = 10, color:string = '#ff0', borderWidth:number = 1, borderColor:string = '#aaa', alpha:number = 1):void {
            this.x = x;
            this.y = y;
            this.radius = r;
            this.color = color;
            this.borderColor = borderColor;
            this.borderWidth = borderWidth;
            this.alpha = alpha;
        }



        public get radius():number {
            return this._radius;
        }

        public set radius(value:number) {
            this.SVGCircle.r.baseVal.value = value;
            this._radius = value;
        }


        public get x():number {
            return this._x;
        }

        public set x(value:number) {
            this._SVGCircle.cx.baseVal.value = value;
            this._x = value;
        }

        public get y():number {
            return this._y;
        }


        public set y(value:number) {
            this._SVGCircle.cy.baseVal.value = value;
            this._y = value;
        }

        public get SVGCircle():SVGCircleElement {
            return this._SVGCircle;
        }

        public set SVGCircle(value:SVGCircleElement) {
            this._SVGCircle = value;
        }


        public get color():string {
            return this._color;
        }

        public set color(value:string) {
            // this.SVGCircle.setAttribute('fill', value);
            this.SVGCircle.style.fill = value;
            this._color = value;
        }

        public get borderWidth():number {
            return this._borderWidth;
        }

        public set borderWidth(value:number) {
            this.SVGCircle.style.strokeWidth = <string><any>value;
            this._borderWidth = value;
        }

        public get borderColor():string {
            return this._borderColor;
        }

        public set borderColor(value:string) {
            this.SVGCircle.style.stroke = value;
            this._borderColor = value;
        }


        public get alpha():number {
            return this._alpha;
        }

        public set alpha(value:number) {
            this.SVGCircle.style.opacity = <string><any>value;
            this._alpha = value;
        }
    }

    // export = Ball;




