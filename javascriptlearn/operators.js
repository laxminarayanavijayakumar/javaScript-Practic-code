// SyntaxError: Invalid left-hand side in assignment
// Operators:- Arithematic operators , Assignment , Logical , comparasion , Equality , Ternary.
// Arithematic:- add+ , sub- , mul* , div/ , modules% , exponent** , increment++ , decrement--
// add+:-
var num1 = 2;
var num2 = 3;
a = num1 + num2 // addition
s = num1 - num2 // subration
ml = num1 * num2 // multiple
div = num1 / num2 // division
mo = num1 % num2 // modulus
ex = num1 ** num2 // exponent
num1++ // increament
num2-- // decreament

console.log(`increment ${num1}`)
console.log(`decrement ${num2}`)
console.log(`addition ${a}`)
console.log(`subration ${s}`)
console.log(`multiple ${ml}`)
console.log(`division ${div}`)
console.log(`modulus ${mo}`)
console.log(`exponent ${ex}`)

// logical operators:-
// && => AND , || => OR , ! => NOT.
var a = 30;
var b = 20;

c = a != b
c1 = a || b 
c2 = a && b 

console.log(`notequal:- ${c} OR:- ${c1} And:- ${c2}`)

// comparasion operators:-
// lessthen < , greaterthen > , lessthen equal <= , greaterthen equal >= , equals ==.
var v1 = 5;
var v2 = 5;

l = v1 < v2
l1 = v1 > v2
l2 = v1 <= v2
l3 = v1 >= v2
l4 = v1 == v2

console.log(`LessThen:- ${l}  , GreateThen:- ${l1} , LessThen Equals:- ${l2} , GreaterThen Equals:- ${l3} , Equals:- ${l4}`)

// Equality operators:-
// double equals , loose equality == .
// Double Equals:- it only check the value not the datatype.
var xbox = 10;
var xboxt = '10';
console.log(`double equals:- ${xbox == xboxt}`)

// triple equals , strict equality === .
// Triple Equals:- it only check both the value and datatype.
var ps3 = 20;
var ps3p = '20';
console.log(`triple Equals:- ${ps3 === ps3p}`)

// trinary operators:-
// syntex:- (condition)?"statement_value is true" : "statement_value is false"
var age = 12;
var limits = (age >= 18) ? 'he is Eligible to vote' : 'He is not eligible to vote'
console.log(`Status of appliner:- ${limits}`)