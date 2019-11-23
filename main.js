// function log(message){
//     console.log(message);
// }
// var message = "hello world";
// log(message);
// var x=1;
// let y = 2;
// const z =3;
// function doSomething (){
//     for(var i =0; i<5; i++){
//         console.log(i);
//     }
//     console.log("Var Finally: "+i)
// }
// function doSomething1 (){
//     for(let i =0; i<5; i++){
//         console.log(i);
//     }
//     console.log("let Finally: "+ i +" but with compile error")
// }
// doSomething();
// doSomething1();
// let count = 5;
// count = "a";   // typescript has type
// let a;      // if didn't declare type might have issues
// a = 1;
// a = true;
// // let b: number; //declare type to preven issue
// // b = 1;
// // b = true;
// let c: boolean;
// let d: string;
// let e: any;
// let f: number[];
// let g: any[];
// enum Color { Red = 0, Green = 1, Blue = 2 }; // better to explicitly set the value of enum.
// let backgroundColor = Color.Red;
// let message;
// message ="abc";
// let endsWithC = (message as string).endsWith('c');
// let alternativeWay = (<string> message).endsWith('c');
// let log = function(message){
//     console.log(message);
// }
// let doLog = (message) => console.log(message);
// let dolog2 = () => console.log("empty")
// let drawPoint = (x,y)=>{
//     // ...
// }
// Interface
// interface Point{
//     x: number,
//     y: number
// }
// let drawPoint = (point: Point) => {
//     // ...
// }
// drawPoint({x:1, y:2})
// Classes
// interface Point {
//     x:number,
//     y:number,
//     draw: () => void
// }
var Point = /** @class */ (function () {
    function Point() {
    }
    Point.prototype.draw = function () {
        // ..
        console.log("x: " + this.x + " Y: " + this.y);
    };
    Point.prototype.getDistance = function () {
        // ..
    };
    return Point;
}());
var point = new Point(); //object
point.x = 1;
point.y = 2;
point.draw();
