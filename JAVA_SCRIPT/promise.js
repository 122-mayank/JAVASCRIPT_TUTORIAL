// let firstPromise = new Promise((resolve , reject)=>{
//     console.log("Babbar");
//     resolve(1001);
// })
// let sayMyName= function sayMyName(){
//         console.log("My name is love babbar");

// }
// setTimeout(sayMyName,10000);


let promise1 = new Promise((resolve , reject)=>{
    let success = true;
    if(success){
        resolve("Promise Fulfiiled");
    }
    else{
        reject("Promise Rejcted");
    }
});

promise1.then((message) => {
    console.log("first msg:"+message);
   return "Promise fullfilled second message";
}).then((message)=>{
    console.log("Second msg: "+message);
    return "Promise fulfilled third message";
})