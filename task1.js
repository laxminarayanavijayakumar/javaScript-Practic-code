var arr = (x) => {console.log(x*2)}
arr(2)

console.log("x ------------------------------ x");

var num = 2
num+=5
num-=5
num*=5
num**=5
console.log(num)

console.log("x ------------------------------ x");

var hight= 500
var limit = (hight>=155 && hight<=188)?"he is eligible to ride":"he is not eligible to ride"
console.log(limit);

console.log("x ------------------------------ x");

let str = "java"
let rev = " "
for(i = str.length-1; i >= 0; i--){
    rev += str[i]
}
console.log('reverse print = '+rev)

let hor = " "
for(i = 0; i<str.length; i++){
    hor += str[i]
}
console.log('horizondal print = '+hor);

console.log("x ------------------------------ x");

var num = 10
var sum = 0
for(var i =0; i<=num; i++){
    sum +=i
    console.log(i)
}
console.log("total : "+sum)

console.log("x ------------------------------ x");

var count = 5
while(count>=0){
    console.log(count)
    count--
}

console.log("x ------------------------------ x");

var docount = 5
do {
    console.log(docount)
    docount--
} while (docount>=0);

console.log("x ------------------------------ x");

var num1 = 0
var sum1 = 0
do{
    console.log(num1)
    sum1 += num1
    console.log("Tot : "+sum1)
    num1++

}
while(num1<=10)
    console.log("Total : "+sum1)
console.log("  ")

var number = 0
var store = 0
while(number<=10){
    console.log(number)
    store += number
    number++
}console.log("Total : "+store)

let str1 = "java"
console.log(
    (str.split('').reverse().join(''))
);

var obj = {
    name : "balaji",
    dep : "it"
}

for(var x in obj){
    console.log(x +"<=>"+ obj[x])
}

console.log("x ------------------------------ x");

let ai = 9
if(ai==8){
    console.log("Auto will move");

}else if(ai<8){
    console.log("Wait for the passenger");

}else if(ai>8){
    console.log("Drop the passenger");

}else{
    console.log("Wait for passenger arrival");

}

console.log("x ------------------------------ x");

// task 3:-
var ar = 3
if(ar % 2 == 0){
    console.log("even number : "+ar);

}else if(ar % 2 != 0){
    console.log("odd number : "+ar);

}else{
    console.log("invalid");

}

console.log("x ------------------------------ x");

function revstr(name){
    var rev =""
    for( i=name.length-1; i>=0; i--){
        rev += name[i]
    }
    console.log(rev);

}revstr("Trendnologies");

console.log("x ------------------------------ x");

var num = 10
for(i=0; i<=num; i++){

    if(i % 2 == 0){
        console.log("even num : "+i);
    }
}

console.log("x ------------------------------ x");

let time = 12.30
if(time >= 9.05 && time <= 10.05){
    console.log("Madurai and thanjavur buses will depart.");

}else if(time >= 12.10 && time <= 13.10){
    console.log("Bangalore and Mysore buses will depart.");

}else if(time >= 15.00 && time <= 16.00){
    console.log("Pondicherry or Cuddalore buses will depart.");

}else{
    console.log("Local buses will depart.");

}

console.log("x ------------------------------ x");

let fruit = ["mango","apple","orange","banana","icecreame"]
for(i=0; i<=fruit.length-1; i++){
    let fruits = fruit[i]

    console.log(fruits);
}

console.log("x ------------------------------ x");

var num = [10,25,67,11,98];
var max = num[0]
for( i=1; i<=num.length-1; i++){

    if(num[i]>max){
        max = num[i]
    }
}console.log("maximum value : "+max);
console.log("   ");

for(var i = 20; i<=30; i++){

    if(i % 2 != 0){
        console.log("Odd Numbers : "+i);

    }
}
console.log("x ------------------------------ x");
// task 4:-
var office = [
    {
        name : "hari",
        age : 20,
        role : "manager",
        location : "chennai"
    },
    {
        name : "karthi",
        age : 25,
        role : "developer",
        location : "banglore"
    },
    {
        name : "aswin",
        age : 22,
        role : "suppotenginner",
        location : "thanjavur"
    }
]
console.log(office);

office[2].name = "balaji"
office[2].role = "tester"
console.log(office);

for(i=0; i<=office.length-1; i++){
let key = Object.keys(office[i])
console.log(key);
let val = Object.values(office[i])
console.log(val);
}

task5:-
console.log("--Asyncronice--");
function wakeup() {
  setTimeout(() => {
    console.log("morning wakeup at 5am");
  }, 2000);
}
function gym() {
  setTimeout(() => {
    console.log("go to gym");
  }, 3000);
}
function ofc() {
  setTimeout(() => {
    console.log("go to office");
  }, 1000);
}
wakeup();
gym();
ofc();


console.log("--Syncronice--");
function Wakeup() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("morning wakeup at 5am");
    }, 7000);
  });
}
function Gym() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("go to gym")
    }, 8000);
  });
}
function Ofc() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("go to office");
        
    }, 6000);
  });
}
Wakeup()
  .then((value) => {
    console.log(value);
    return Gym();
  })
  .then((value) => {
    console.log(value);
    return Ofc();
  })
  .then((value) => {
    console.log(value);
    console.log("Complete The Task");
  });
