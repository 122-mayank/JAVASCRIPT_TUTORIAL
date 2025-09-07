//compile time error
//synatx error
// console.log(1;

//Runtime error
// console.log(x);

// try{
//     console.log("try block starts here");
//     console.log(x);
//     console.log("try block ends here");
// }

// catch(err){
//     //define krte h , erroe ke sath kya karna chahte h
//     //retry logic
//     //fallback mechanism
//     //logging
//     //custom error

//     console.log("I am inside catch block");
//     console.log("ur err is here",err);
// }
// finally{
//     console.log("I am finally back");
// }


// try{

//     //refernce error
//     console.log(x);
    
// }
// catch(err){
//     throw new Error("Bhai pehle declare kro , fir print krna ");

// }

let errorCode = 100;
if(errorCode == 100){
    throw new Error("Invalid json");
}