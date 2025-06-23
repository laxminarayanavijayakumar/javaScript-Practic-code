// function statement or declaration
// syntex:-
// function var_name() {
//     Code;
// }

function box() {
    console.log(`this is a box of chocolate`)
}
box();  // to call the function

// parameter and argument:-
// parameter is like an variable name and argument is value apptudes all common.

function ironbox(x) {
    console.log(x)
}
ironbox('philips')  // argument passed in calling function

// function with return method

function cash(params) {
    return params;
}
console.log(cash(`rupiss: ${100}`))

// function expression:- storing the function inside the varadle name is called function expression.

// anonymous function:-
var fn = function(){
    console.log(`this is anonymous function`);
}
fn()

// arrow function:-
// short hand syntex:-  ()=>{}

    var arr = ()=>{console.log(`hello arrow function`)}
    arr()

    // using parameter and argument:-
    const arr1 = (x)=>{console.log(x)}
    arr1(`arrow function using parameter`)

    