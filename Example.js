//with function name
function fun1(n){
    console.log("Akshi"+n);
}
fun1("po");
//array functions
const greet=(name)=>{
    console.log("helo");
}
greet();

//objects in js
let personOne=
{
    name:"Akshu",
    age:"19",
    gender:"F"
}
//accessing them in destructing method
const {name,age,gender}=personOne;
console.log(name,age,gender);

//If two entities wants to communicate it will done by using JSON only
//If a server wants to send an object to another client then it will send in format of string


//JSON
let object1=
{
    name:"Akshu",
    age:"19",
    gender:"F"
}
console.log(typeof object1)
let stringifiedObject=JSON.stringify(object1);
console.log(typeof stringifiedObject);

let parsedobject=JSON.parse(stringifiedObject);
console.log(typeof parsedobject);
console.log(parsedobject.name);