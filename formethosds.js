   //for methods:-
  //for each:- to read the array.
 //syntex:-
//var_name.foreach((value,index,acctualarray) => )
     
    var week = ["sunday","monday","tuesday","wednesday","thirsday","friday","saturday"]

    week.forEach((value,index,array) => console.log(value))
    console.log("  ")

      //for in:-
     //syntex:-
    //for(var_type var_name in obj_name){  console.log(obj_name[var_name])}

    var obj = {
        name : "Laxminarayana Vijaykumar",
        dept : "sdet enginnar"
    }
    for(var x in obj){
        console.log(x+"<-:-:->"+obj[x])
    }
    console.log("   ")

  //for of:- string or array loop.
 //syntex:-
//for(var_type var_name of str_name){ console.log(var_name)}

let str = "happy"
for(var x of str){
    console.log(x)
}