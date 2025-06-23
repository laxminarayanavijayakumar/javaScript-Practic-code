 // String methods:-
// includes:-
var inc = "javascripts"
var inc2 = inc.includes("jav")
console.log(inc2);
console.log("  ");

// Touppercase:-
var up = "annanagar"
console.log(up.toUpperCase());
console.log("  ");

// Tolowercase:-
var low = "OMR"
console.log(low.toLowerCase());
console.log("  ");

// Indexof:-  if will take the first accurance of the duplicate value.
var idx = "america"
console.log("First Indexof : "+idx.indexOf("a"));
console.log("  ");


// Lastindexof:-  it will take the last accurence of the duplicate value.
var lidx = "america"
console.log("Last Indexof : "+lidx.lastIndexOf("a"));
console.log("  ");

// Length:-  to check the length of the string.
var l = "java"
console.log("Length of the String : "+l.length);
console.log("  ");

// CharAt:-  to get the specific character based on the indexes.
var ch = "javascripts"
console.log(ch.charAt(5));
console.log("  ");

//Reolace:-  to replace the perticular string value.
var rep = "helloworld"
console.log(rep.replace("hello","welcome"));
console.log("  ");

// Repeat:-  to repeat the string value.
var rept = "world"
console.log(rept.repeat(3));
console.log("  ");

// StartsWith:-  to check the first character in string.
var name1 = "javascripts"
console.log(name1.startsWith("j"));
console.log("  ");

// Endswith:-  to check the last characters in string.
var name2 = "javascripts"
console.log(name2.endsWith("s"));
console.log("  ");
