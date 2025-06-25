// This key word used to refer a value in outside values.
var obj = {
  name: "hari",
  age: 12,

  det: function () {
    console.log(this.age);
  },
};
console.log(obj);
obj.det();
console.log("  ");

// Constructor Function:- function variable name will be caps.
// new key words:- Create a new object for constructor.
function Bike(name, year, model) {
  this.name = name;
  this.year = year;
  this.model = model;
}
var detials = new Bike("datona", 2024, "dtd660");
var detials1 = new Bike("ducati", 2020, "monster660");
console.log(detials);
console.log(detials1);
console.log("   ");

// Template literals or String literals(tilde symbol) `${}`:-
var a = "hari";
var b = "hi";
console.log(a + b + "how are you.."); //old
console.log(`${a} ${b} How are you...`); //new
console.log("   ");

// Constructor using in function:-
function Bikes(name, year, model) {
  this.bikesname = name;
  this.bikesyear = year;
  this.bikesmodel = model;
  this.bikesdetials = function () {
    console.log(
      `this bike name is ${name} and the year is ${year} and the model ${model}`
    );
  };
}
var detial = new Bikes("kawasiziki", 2024, "z10r");
detial.bikesdetials();
console.log("   ");

// Class:- function called as methods.
class Office {
  constructor(name, dept, id) {
    this.name = name;
    this.dept = dept;
    this.id = id;
  }
  fulldetials() {
    console.log(
      `the name is ${this.name} dept is ${this.dept} and the id numder is ${this.id}`
    );
  }
}
var detls = new Office("hari", "IT", 123);
console.log(detls);
detls.fulldetials();
console.log("    ");

// Call Back:- passing the function into the another function arguments.
function greets() {
  console.log("hello");
}
function name(x) {
  console.log("jai");
  x();
}
name(greets);
console.log("  ");

// Interconnecting Multiple Function:-
function task1(x) {
  console.log("task1");
  x();
}
function task2(y) {
  console.log("task2");
  y();
}
function task3(z) {
  console.log("task3");
  z();
}
function task4() {
  console.log("task4");
}
task1(() => {
  task2(() => {
    task3(task4);
  });
});
console.log("  ");

// Synchronous:- to follow the order.
// Asynchronous:- to not follow the order.
// Call Back Hell:- treditional concept to handle the asynchronous operation.
function Task1() {
  setTimeout(() => {
    console.log("Task One");
  }, 2000);
  //   x();
}
function Task2() {
  setTimeout(() => {
    console.log("Task Two");
  }, 1000);
  //   y();
}
function Task3() {
  setTimeout(() => {
    console.log("task Three");
  }, 4000);
  //   z();
}
function Task4() {
  setTimeout(() => {
    console.log("Task Four");
  }, 3000);
}
Task1();
Task2();
Task3();
Task4();
// Task1(() => {
//   Task2(() => {
//     Task3(Task4);
//   });
// });
console.log("  ");

// Promise:- resolve or reject callback advanced version.
// Syntex:-
// new promise((resolve , reject) => )
// Then() => resolve.
// Catch() => reject.
function water() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("water can full");
    }, 8000);
  });
}
function room() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("room cleaned");
    }, 6000);
  });
}
function trash() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("trash out");
    }, 10000);
  });
}
water()
  .then((value) => {
    console.log(value);
    return room();
  })
  .then((value) => {
    console.log(value);
    return trash();
  })
  .then((value) => {
    console.log(value);
    console.log("Task complete");
  });
console.log("  ");


function Water() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const fill = true;
      if (fill) {
        resolve("water can is fill");
      } else {
        reject("water can not fill");
      }
    }, 13000);
  });
}
function Room(){
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      const cln = true
    if(cln){
      resolve("room is cleane")
    }else{
      reject("room is not cleane")
    }
    }, 11000);
  })
}
function Trash(){
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      const out = false
      if(out){
        resolve("trash is out")
      }else{
        reject("trash is not out")
      }
    }, 15000);
  })
}
// Water()
//   .then((value) => {
//     console.log(value);
//     return Room();
//   })
//   .then((value) => {
//     console.log(value);
//     return Trash();
//   })
//   .catch((error) => {
//     console.log(error);
//     console.log("Task complete");
//   });
console.log("  ");

  // Async and await:-
 // Async:- it returns the promise.
// await:- it will make the promise wait.
async function data(){
  try{
    const waterbottle = await Water()
    console.log(waterbottle);
    const rooms = await Room()
    console.log(rooms);
    const garbeg = await Trash()
    console.log(garbeg);
  }catch(e){
    console.log(e);
  }
}data()