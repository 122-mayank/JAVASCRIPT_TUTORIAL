 var greet;
console.log(greet)

 var greet = function(){
    console.log("NAmsate Dunua");
}



// function sayMyName(finalName){
//     console.log(finalName);
// }

// sayMyName("Radha krishna");
// function sayMyName(finalName){
//     console.log(finalName);
// }

// console.log(age);
// var age = 25;


// sayHello();
// let sayHello = function(){
//     console.log("Hello jee kaise ho ");
// }  // it also gives error

// const obj1 = new Human();
// class Human{

// }

// const obj1 = new Human();


function solve(number){
     return function(number){
        return number * number;
     }
}

let ans = solve(5);

let finalans = ans(10);
console.log(finalans);


// const arr = [
 
//     function( a ,b){
//         return a+b;
//     },

//     function(a,b){
//         return a-b;
//     },

//     function(a,b){
//         return a*b;
//     }

// ]
// let first = arr[2];
// let ans1 = first(5,10);
// console.log(ans1);


let obj = {
    age:25,
    wt:23,
    ht:180,
    greet: () => {
        console.log("Hello dunia");
    }
}
console.log(obj.age);
obj.greet();
