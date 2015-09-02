/**
 * Created by rerades on 30/8/15.
 */

/// <reference path="./Ball.ts" />


import figure = require('./Ball');

// alias
import Ball = figure.Ball;

export class LineConnector {


    private _SVGLine:SVGLineElement;

    constructor(private _b1:Ball, private _b2:Ball) {
        this.createLine();
        this.linkLine();
        this.startWatch();

    }


    private createLine():void {
        var canvasNS = this.b1.canvas.namespaceURI;
        this._SVGLine = <SVGLineElement>document.createElementNS(canvasNS, 'line');
        this.b1.canvas.appendChild(this._SVGLine);
        this.SVGLine.style.strokeWidth = '1';
        this.SVGLine.style.stroke = '#666666';

    }

    private linkLine():void {
        this.linkNodes();
    }

    private linkNodes() {
        this.SVGLine.x1.baseVal.value = <any>this.b1.x;
        this.SVGLine.y1.baseVal.value = <any>this.b1.y;
        this.SVGLine.x2.baseVal.value = <any>this.b2.x;
        this.SVGLine.y2.baseVal.value = <any>this.b2.y;
        // console.log(this.SVGLine.x1.baseVal.value)
    }


    private startWatch() {
        setInterval(
            () => {
                this.linkNodes();
            },30)
    }





    public get b1():Ball {
        return this._b1;
    }

    public set b1(value:Ball) {
        this._b1 = value;
    }


    public get b2():Ball {
        return this._b2;
    }

    public set b2(value:Ball) {
        this._b2 = value;
    }


    public get SVGLine():SVGLineElement {
        return this._SVGLine;
    }

    public set SVGLine(value:SVGLineElement) {
        this._SVGLine = value;
    }
}
