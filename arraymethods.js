 //Array Methods:-
//Push:- to add a value in the last of an array.

var billcount = ["jai","arun","meha","ragu"]
billcount.push("sai")
console.log(billcount)
console.log("   ")

//pop:- to remove a value in the last of an array.
billcount.pop()
console.log(billcount)
console.log("  ")

//unshift:- to add a value in the first of an array.
var ap = ["jai","arun","meha","ragu"]
ap.unshift("sai")
console.log(ap)
console.log("  ")

//shift:- to remove a value in the first of an array.
ap.shift()
console.log(ap)
console.log("  ")

//concat:- uesd to add two or more arrays.
var fruits = ["apple","orange","banana"]
var veg = ["potato","tomato","potato"]
var tools = ["spanner","scrow","washer"]
var cover = fruits.concat(veg,tools)
console.log(cover)
console.log("  ");

//Sort:- the sort method arranges the elements of default , modifying the original array.
// :_ if the result of a-b is negative , a is placed before b.
//:_ if the result is positive , b is placed before a.
//:_ if the result is zero , the order remains unchanged (which is relavent for element that are equal).

// eg:-
        // starts arr = [2,1,8,4,9,7,6,5,3]
       // arr.sort((a,b) => a-b)
// comparing between 2 and 1 :-
// 2-1 = 1 since the result is positive , 2 should come after 1.
var num = [8,9,10,7,3,4,1,2,6,5]
num.sort((a,b) => a-b)
console.log(num);
console.log("  ");

//Split:- to split the string convert to array.(string to array).
var s = "java script"
var spl = s.split(" ")
spl = s.split("")
console.log(spl);
console.log("  ");

//join:- to join the splited array convert to string.
var  j = spl.join(" ")
j = spl.join("")
console.log(j);
console.log("  ");


//reverse:- to reverse the string.
var str = "annanagar"
var rev = str.split("").reverse().join("")
console.log(rev);
console.log("  ");

// slice:- slice is used to cut the array based on indixes.
let birds = ["parrot","pegion","peacock","hen","crow"]
let slice = birds.slice(2,-1)
console.log(slice);
console.log("   ");


 // splice:-
// syntex:-
    //  var_name.splice(index,counter[0,1],value)
// 0 => push and update.
// 1 => override and update.
let weeks = ["sun","mon","tue","thir","sat"]
weeks.splice(3,0,"wed")
weeks.splice(5,0,"far")
weeks.splice(5,1,"fri")
console.log(weeks);
console.log("   ");










