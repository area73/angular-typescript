/**
 * Created by rerades on 30/8/15.
 */

/// <reference path="./Ball.ts" />


import {Ball} from './Ball';
import {IFigure} from './IFigure';


export class LineConnector {


    private _SVGLine:SVGLineElement;
    private _color:string;
    private _refreshTime:number = 30;

    constructor(private _b1:IFigure, private _b2:IFigure) {
        this.createLine();
        this.linkLine();
        this.startWatch();

    }


    private createLine():void {
        var canvasNS = this.b1.canvas.namespaceURI;
        this._SVGLine = <SVGLineElement>document.createElementNS(canvasNS, 'line');
        this.b1.canvas.appendChild(this._SVGLine);
        this.SVGLine.style.strokeWidth = '1';
        this.color = '#666666'
    }

    private linkLine():void {
        this.linkNodes();
    }

    private linkNodes() {
        this.SVGLine.x1.baseVal.value = <any>this.b1.x;
        this.SVGLine.y1.baseVal.value = <any>this.b1.y;
        this.SVGLine.x2.baseVal.value = <any>this.b2.x;
        this.SVGLine.y2.baseVal.value = <any>this.b2.y;
    }


    private startWatch() {
        setInterval(
            () => {
                this.linkNodes();
            }, this._refreshTime)
    }


    public get b1():IFigure {
        return this._b1;
    }

    public set b1(value:IFigure) {
        this._b1 = value;
    }



    public get b2():IFigure {
        return this._b2;
    }

    public set b2(value:IFigure) {
        this._b2 = value;
    }


    public get SVGLine():SVGLineElement {
        return this._SVGLine;
    }

    public set SVGLine(value:SVGLineElement) {
        this._SVGLine = value;
    }


    public get color():string {
        return this._color;
    }

    public set color(value:string) {
        this._SVGLine.style.stroke = value;
        this._color = value;
    }
}
