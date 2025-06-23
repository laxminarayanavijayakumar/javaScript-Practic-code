   //loop:- condition loop and endless loop.
  //for loop :- entry level condition checking ioop.
 //syntex:-
//for(initalization; condition; iterator[increament/decreament]){
//code
//}

for(var i=0; i<5; i++){
    console.log('one :-'+i)
}
console.log('   ')

for(var i=0; i<=5; i++){
    console.log('two :-'+i)
}
console.log('   ')

for(var i=5; i>0; i--){
    console.log('three :-'+i)
}
console.log('   ')

//String loop:-

var str = "java"
for(let i=0; i<str.length; i++){
    console.log(str[i])
}
console.log('   ')

var hor = " "
for(let i=0; i<str.length; i++){
hor = hor+str[i]
}
    console.log(hor)

var rev = " "
for(let i=str.length-1; i>=0; i++){
    rev = rev+str[i]
}
console.log(rev)

 //while loop:- entry level condition checking ioop.
//syntex:-

var count = 0  //initalization
while(count<5){ //condition
    console.log(count) //print
    count++ //iteration
}

 //do-while:-
//syntex:-

var docount = 0 //initalization
do{
    console.log(decount) //print
    decount++ //iteration
}while(decount<5) //condition
