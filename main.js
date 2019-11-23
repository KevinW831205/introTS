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
var a; // if didn't declare type might have issues
a = 1;
a = true;
// let b: number; //declare type to preven issue
// b = 1;
// b = true;
var c;
var d;
var e;
var f;
var g;
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
; // better to explicitly set the value of enum.
var backgroundColor = Color.Red;
