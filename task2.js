var office = [
  {
    name: "hari",
    dept: "it",
    role: "software engineear",
    location: "chennai",
  },
  {
    name: "karthi",
    dept: "tlecom",
    role: "teleccmer",
    location: "madurai",
  },
  {
    name: "nayar",
    dept: "it",
    role: "system engineear",
    location: "kerala",
  },
  {
    name: "rahul",
    dept: "it",
    role: "software engineear",
    location: "tanjaur",
  },
  {
    name: "balaji",
    dept: "it",
    role: "test engineear",
    location: "chennai",
  },
  {
    name: "aswin",
    dept: "it",
    role: "support engineear",
    location: "bangloure",
  },
];
office[2].name = "hari karthik";
office[2].dept = "it";
office[2].role = "tester";
office[2].location = "cochi";
office[5].name = "rajesh";
office[5].dept = "it";
office[5].role = "tester";
office[5].location = "puna";

console.log(office);
console.log("   ");

var deobj = {
  name: "balaji",
  dept: "mech",
  loc: "chennai",
};
const { name, dept, loc } = deobj;
console.log(name, dept, loc);
console.log("  ");

var ofc = [
  {
    nam: "balaji",
    dep: "mech",
  },
  {
    nam: "hari",
    dep: "ece",
  },
  {
    nam: "ariyan",
    dep: "csc",
  },
];
for (i = 0; i <= ofc.length - 1; i++) {
  const { nam, dep } = ofc[i];
  console.log(nam, dep);
}
console.log("  ");

setTimeout(() => {
  console.log("HELLO i am JavaScript");
}, 10000);
console.log("  ");

var mkt = {
  fruit: "apple",
  id: 123,
};
for (var x in mkt) {
  console.log(x + "--" + mkt[x]);
}
console.log("  ");

let str = "happy"
for(var y of str){
    console.log(y);
}
console.log("  ");

var num = 10
for(i=0; i<=num; i++){
    if(i % 2 != 0){
        console.log("odd num : "+i);
        
    }
}
console.log("  ");

var arr1 = (x) => {console.log(x)}
arr1("helooo myl")
console.log("  ");

class car {
    constructor(brand , year , model){
        this.brand = brand;
        this.year = year;
        this.model = model;
    }
}
var dtl = new car("ford",2018,"fiate")
console.log(dtl);




    

