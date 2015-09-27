/**
 * Created by rerades on 4/9/15.
 */

import {IFigure} from './IFigure';

export class Triangle implements IFigure {


    // private _SVGElement:SVGPolygonElement;
    private _x:number;
    private _y:number;
    private _color:string;
    private _borderWidth:number;
    private _borderColor:string;
    private _alpha:number;
    private _canvas:SVGElement;
    private _SVGElement:SVGPolygonElement;
    private _speedX:number;
    private _speedY:number;
    private _width:number;
    private _height:number;
    private _refreshTime:number = 30;
    private _centX:number;
    private _centY:number;
    private _rightLimit:number = 0;
    private _bottomLimit:number = 0;
    private _leftLimit:number = 0;
    private _topLimit:number = 0;

    constructor(canvas:SVGElement) {
        this._canvas = canvas;
        var canvasNS = canvas.namespaceURI;
        this._SVGElement = <SVGPolygonElement>document.createElementNS(canvasNS, 'polygon');
        canvas.appendChild(this._SVGElement);

    }

    public setSize(width:number, height:number):void {
        var p1:SVGPoint = (<SVGSVGElement>this.canvas).createSVGPoint();
        p1.x = 0;
        p1.y = 0;

        var p2:SVGPoint = (<SVGSVGElement>this.canvas).createSVGPoint();
        p2.x = width;
        p2.y = 0;

        var p3:SVGPoint = (<SVGSVGElement>this.canvas).createSVGPoint();
        p3.x = width/2;
        p3.y = height;

        (<SVGPolygonElement>this.SVGElement).points.appendItem(p1);
        // todo: se podría escribir así también
        // this._SVGElement.points.appendItem(p1);
        (<SVGPolygonElement>this.SVGElement).points.appendItem(p2);
        (<SVGPolygonElement>this.SVGElement).points.appendItem(p3);

    }


    protected setLimits():void {
        //TODO: triple igualdad
        this._leftLimit = this._rightLimit = this._width/2;
        this._topLimit = this._bottomLimit = this._height/2;
    }


    public setPos(x:number, y:number):void {
        this.x = x;
        this.y = y;

    }

    public move(speedX:number, speedY:number) {
        this.speedX = speedX;
        this.speedY = speedY;
        this.startToMove();
    }


    private startToMove():void {
        setInterval(
            () => {
                // console.log(this._x)
                this.checkBounce();
                this.x =  this.speedX;
                this.y =  this.speedY;

            }, this._refreshTime)
    }


    protected checkBounce():void {
        this.speedX = (this._SVGElement.getBBox().x +  this._SVGElement.getBBox().width  > this.canvas.clientWidth)   ?
            - Math.abs(this.speedX) : (this._SVGElement.getBBox().x < 0) ?
            Math.abs(this.speedX) : this.speedX  ;
        this.speedY = (this._SVGElement.getBBox().y +  this._SVGElement.getBBox().height  > this.canvas.clientHeight) ?
            - Math.abs(this.speedY) : (this._SVGElement.getBBox().y < 0) ?
            Math.abs(this.speedY) : this.speedY  ;
    }


    // ------------------------------------------------------------------------------------------------------------
    // -- SETTERS y GETTERS
    // ------------------------------------------------------------------------------------------------------------

    public get x():number {
        var points:SVGPointList =  this._SVGElement.points;
        return points.getItem(0).x + this._SVGElement.getBBox().width / 2;
    }


    public set x(value:number) {
        var points:SVGPointList =  this._SVGElement.points;
        for (var i:number = 0; i < points.numberOfItems; i++) {
            points.getItem(i).x += value;
        }
    }


    public get y():number {
        var points:SVGPointList =  this._SVGElement.points;
        return points.getItem(0).y + this._SVGElement.getBBox().height / 2;
    }

    public set y(value:number) {
        var points:SVGPointList =  this._SVGElement.points;
        for (var i:number = 0; i < points.numberOfItems; i++) {
            points.getItem(i).y += value;
        }
        // this._y = value;
    }


    public set color(value:string) {
        this._SVGElement.style.fill = value;
        // this._color = value;
    }

    public set borderWidth(value:number) {
        this._SVGElement.style.strokeWidth = <any>value;
        // this._borderWidth = value;
    }


    public set borderColor(value:string) {
        this._SVGElement.style.stroke = value;
        // this._borderColor = value;
    }


    public set alpha(value:number) {
        this._SVGElement.style.fillOpacity = <any>value;
        // this._alpha = value;
    }



    public get SVGElement():SVGPolygonElement {
        return this._SVGElement;
    }

    public set SVGElement(value:SVGPolygonElement) {
        this._SVGElement = value;
    }


    public get canvas():SVGElement {
        return this._canvas;
    }

    public set canvas(value:SVGElement) {
        this._canvas = value;
    }

    public get speedX():number {
        return this._speedX;
    }

    public set speedX(value:number) {
        this._speedX = value;
    }

    public get speedY():number {
        return this._speedY;
    }

    public set speedY(value:number) {
        this._speedY = value;
    }

    public get width():number {
        return this._width;
    }

    public set width(value:number) {
        this._width = value;
    }

    public get refreshTime():number {
        return this._refreshTime;
    }

    public set refreshTime(value:number) {
        this._refreshTime = value;
    }

    public get centX():number {
        return this._centX;
    }

    public set centX(value:number) {
        this._centX = value;
    }

    public get centY():number {
        return this._centY;
    }

    public set centY(value:number) {
        this._centY = value;
    }

    public get rightLimit():number {
        return this._rightLimit;
    }

    public set rightLimit(value:number) {
        this._rightLimit = value;
    }

    public get bottomLimit():number {
        return this._bottomLimit;
    }

    public set bottomLimit(value:number) {
        this._bottomLimit = value;
    }

    public get leftLimit():number {
        return this._leftLimit;
    }

    public set leftLimit(value:number) {
        this._leftLimit = value;
    }

    public get topLimit():number {
        return this._topLimit;
    }

    public set topLimit(value:number) {
        this._topLimit = value;
    }


    public get height():number {
        return this._height;
    }

    public set height(value:number) {
        this._height = value;
    }
}

