/**
 * Created by rerades on 30/8/15.
 */


/**
 *  Creamos el método move
 *
 *  @learn
 *  fat arrow ámbito de las varialbes
 *
 *
 *
 */

import {InteractiveObject} from './InteractiveObject';

export class Ball extends InteractiveObject {



    constructor(canvas:SVGElement) {
        super (canvas, 'circle');
    }


    public setSize(r:number):void {
        super.setSize(r,r);

    }


    protected setLimits():void {
        // TODO:: triple igualdad
        this._leftLimit = this._rightLimit = this._width/2;
        this._topLimit = this._bottomLimit = this._height/2;
        // this._leftLimit = this._width/2;
        // this._topLimit = this._height/2;

    }

/*
    private checkBounce():void {
        this.speedX = (this.x + this.radius / 2 > this._canvas.clientWidth) ? -Math.abs(this.speedX) :
            (this.x - this.radius / 2 < 0) ? Math.abs(this.speedX) : this.speedX;
        this.speedY = (this.y + this.radius / 2 > this._canvas.clientHeight) ? -Math.abs(this.speedY) :
            (this.y - this.radius / 2 < 0) ? Math.abs(this.speedY) : this.speedY;
    }
*/

    // ------------------------------------------------------------------------------------------------------------
    // -- SETTERS y GETTERS
    // ------------------------------------------------------------------------------------------------------------



    public set height(value:number) {
        (<SVGCircleElement>this.SVGElement).r.baseVal.value = value;
        this._height = value;
    }


    public set x(value:number) {
        (<SVGCircleElement>this.SVGElement).cx.baseVal.value = value;
        this._x = value;
    }


    public set y(value:number) {
        (<SVGCircleElement>this.SVGElement).cy.baseVal.value = value;
        this._y = value;
    }

    public set color(value:string) {
        (<SVGCircleElement>this.SVGElement).style.fill = value;
    }

      public set borderWidth(value:number) {
        (<SVGCircleElement>this.SVGElement).style.strokeWidth = <string><any>value;
      }


    public set borderColor(value:string) {
        (<SVGCircleElement>this.SVGElement).style.stroke = value;
      }


    public set alpha(value:number) {
        (<SVGCircleElement>this.SVGElement).style.opacity = <string><any>value;
    }






}






