//functions:- block of code.

function box (){
    console.log("hello")
}
box() //to call the function.

//parameter and argument:-

function box(x){
    console.log(x)
}
box("hello")

//return:-

function cash(x){
    return x
}
console.log(cash("Rs = "+1000))

//function expression:-

var fn = function happy(){
    console.log("hello")
}
fn()

//--:anonymous function:--\\

var fn = function(){
    console.log("hello myl")
}
fn()

//arrow function:- Short hand 

var arr = () => {console.log("myl haii")}
arr()

var arr1 = (x) => {console.log(x)}
arr1("helooo myl")