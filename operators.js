  //operators:-
 //Arithematic:-

 var num1 = 10
 var num2 = 5
 //add:-
 console.log(num1+num2)
 //sub:-
 console.log(num1-num2)
 //mul:-
 console.log(num1*num2)
 //div(cosient):-
 console.log(num1/num2)
 //mod(reminder):-
 console.log(num1%num2)

 //exponent:-
 var num3 = 3
 var num4 = 6
 console.log(num3**num4)

 //increament:-
 var inc = 5
 inc++
 console.log(inc)

 //decreament:-
 var dec = 5
 dec--
 console.log(dec)

 //logical operators:-

 var a = 10
 var b = 10

 //NOT:-
 console.log(a!=b)

 //OR:-
 console.log((a!=b)||(a==b))

 //AND:-
console.log((a!=b)&&(a==b))


//Comparasion operator:-

//lessthen < :-
console.log(a<b)

//greatrthen > :-
console.log(a>b)

//lessthen or equal <= :-
console.log(a<=b)

//greaterthen or equal >= :-
console.log(a>=b)

  //Equality operators:-
 //(double equals , loose equality) == :-
//double equals:- it only check the value not the datatype.
var n1 = 10
var n2 = "10"
console.log(n1==n2)

 //(Triple equals , strict equality) === :- 
//triple equals:- it check both the value and the datatype.
console.log(n1===n2)

  //Ternary Operators:-
 //syntex:-
//(condition) ? "value_true_statement" : "value_false_statement"

var age = 10
var limit = (age>=18) ? "he is eligible to dive the car" : "he is not eigible to drive the car"
console.log(limit)
