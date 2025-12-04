function getUserDetails(id){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve({userroll:"678"})
        },2000);
    })
};
//async and await are used for api calls
//without async we cant use await in the code
//await is used for the async function
const myfun=async() => {
    console.log("123")
    const result=await getUserDetails("123");
    console.log(result);
    console.log("456");
};
myfun();

const myfun2=async() => {
    console.log("Neeru143")
    const result=await getUserDetails("Neeru143");
    console.log(result);
    console.log("8989");
};
myfun2();

const myfun3=async() => {
    console.log("Abhi143")
    const result=await getUserDetails("Abhi143");
    console.log(result);
    console.log("630");
};
myfun3();