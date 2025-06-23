
// Loops:- conditional loop , entery level condition checking loop.
// forloop syntex:-
// for(Initalization;condition;iteration,increament , decreament){
// Code
// }

for(var i = 0; i<=5; i++){
    console.log(i)
}
console.log(`------------------`)
for(let i=5; i>=0; i--){
    console.log(i)
}
console.log(`------------------`)
var str = 'java';
for(let i=0; i<str.length; i++){
    console.log(str[i])
}
console.log(`------------------`)

let nam = 'java'
let rev = ''
for(var i = nam.length-1; i>=0; i--){
    rev = rev + nam[i]
    console.log(rev)
}
console.log(rev)
console.log(`------------------`)
let hor = ''
for(let i=0; i<nam.length; i++){
    hor = hor + nam[i]
    console.log(hor)
}
console.log(hor)
console.log(`------------------`)
var nums = '12345';
var x = ''
for(var i=0; i<=nums.length-1; i++){
    x = x+nums[i]
    console.log(x)
}
console.log(`-------------------`)

for(i=1; i<=5; i++){
    row = ''
    for(j=1; j<=i; j++){
        row = row+j
    }
    console.log(row)
}