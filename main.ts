
// function log(message){
//     console.log(message);
// }

// var message = "hello world";
// log(message);

// var x=1;
// let y = 2;
// const z =3;

function doSomething (){
    for(var i =0; i<5; i++){
        console.log(i);
    }

    console.log("Var Finally: "+i)
}

function doSomething1 (){
    for(let i =0; i<5; i++){
        console.log(i);
    }

    console.log("let Finally: "+ i +" but with compile error")
}

doSomething();
doSomething1();