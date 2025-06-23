// Object :- Collections of keys and values pairs.
var obj = {
    name : "karthi",
    age : 20
}
// to update the values :-
obj.name = "balaji"
obj.age = 25
console.log(obj);
console.log("  ");

// to get the value from the obj:-
console.log(obj.name);
console.log(obj.age);

// nested array and object:- store the data in array.

var stobj = [
    {
        name : "hari",
        age : 15,
        std : "x"
    },
    {
        name : "karthi",
        age : 16,
        std : "x"
    },
    {
        name : "aswin",
        age : 15,
        std : "x"
    }
]
console.log(stobj);
console.log(stobj[1].name);
console.log(stobj[1]);
console.log("  ");

// to get keys and values.
var obj = {
    name : "hari",
    age : 15
}

let key = Object.keys(obj)
console.log(key);

let val = Object.values(obj)
console.log(val);
console.log("   ");

  // Object Destructuring:-
 // Object Destructuring in javascript allowes you to extract multiple properties from an 
// object and assign them to enhancing code readability and reducing repetion.
var deobj = {
    name : "balaji",
    age : 20,
    dept : "csc"
}
const {name , age , dept} = deobj
console.log(name);
console.log(name , age , dept);
console.log("  ");

// Set Time Out Function:-
setTimeout(() => {
    console.log("hello");
    
},2000)
console.log("  ");
