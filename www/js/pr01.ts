/**
 * Created by rerades on 10/8/15.
 */

var c1:SVGCircleElement = <any>document.getElementById('c1');
var c2:SVGCircleElement = <any>document.getElementById('c2');
var l1:SVGLineElement = <any>document.getElementById('l1');

//console.log(c1.cx);

// c1.cx.baseVal.value = 200;
// c1.cy.baseVal.value = 200;


//TS
// setInterval(()=>{moveCicle(c1);},100);

//JS
setInterval(function () {
    moveCicle(c1, c2, l1)
}, 100)



function moveCicle(circle1:SVGCircleElement, circle2:SVGCircleElement, l1:SVGLineElement):void {

    circle1.cx.baseVal.value += 10;
    circle1.cy.baseVal.value += 8;

    circle2.cx.baseVal.value += 7;
    circle2.cy.baseVal.value -= 5;

    l1.x1.baseVal.value = circle1.cx.baseVal.value;
    l1.y1.baseVal.value = circle1.cy.baseVal.value;
    l1.x2.baseVal.value = circle2.cx.baseVal.value;
    l1.y2.baseVal.value = circle2.cy.baseVal.value;

}