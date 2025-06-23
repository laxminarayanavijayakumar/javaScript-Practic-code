
// var  
// variable_type  variable_name = value
// we can reassign and redeclaration

var a = 5; 
var a = 10;
console.log(a)

// let
// we can't redeclaration and we can reassign
// SyntaxError: Identifier 'variable_name' has already been declared

let b = 5;
// let b = 10;
b = 10;  // reassign the value.
console.log(b)

// const
// we can't redeclare and can't reassign
// SyntaxError: Identifier 'variable_name' has already been declared


const c = 5;
// const c = 10;
// c = 10;   // TypeError: Assignment to constant variable. when try to reassign the value.
console.log(c)