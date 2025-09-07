// let arr =["love" , 1 , 'radha'];

// let ans = arr.filter((value) => {

//     if( typeof(value) == 'number'){
//         return true;
//     }
//     else{
//         return false;
//     }
// })
// console.log(ans);


// let brr =[10 , 20 , 30 , 40];
// let ans2 = brr.reduce((acc,curr) => {
//            return acc + curr;
// })

// console.log(ans2);

// let arr2=[8 , 10 , 34 , 67];
// arr.sort();

// console.log(arr2);

// let arr=[6, 2 , 8 , 9];

// arr.forEach((value , index) => {
//      console.log("Number: ",value , "Index: ",index);
// })

// let arr="RADHA KRISHNA"

// for(let value of arr){
//     console.log(value);
// }

// let arr = [10 , 20 , 20 , 40 , 50 , 60];

// function getsum(arr){
//     let len = arr.length;
//     let sum = 0;
//     for(let index = 0 ; index < len ; index++){
//        sum = sum + arr[index];
//     }
//     return sum;
// }
// let ans = getsum(arr)
// console.log(ans);


// let age = "Babbar";

// function solve(){
//          var age = 20;
//          console.log(age);
// }

// solve();

// age = 20;
// console.log(age);
// age = "Love Babbbar"
// console.log(typeof(age));


let obj = {
       
    name : "Mayank",
    age : 23,
    weight : 55,
    height: "5.8 inch",
    greet : function(){
         console.log("Heelo jee kaise ho ");
    }
    
};

console.log(obj);
obj.greet();

let arr =[ 1 , 2 , 3, 4, 5];
let brr = new Array("love" , 1, true);
console.log(arr);

brr.push(12);
brr.pop();
brr.shift();
brr.unshift("RAdha krishna");
brr.push(20);
brr.push(40);
brr.push(60);

// console.log(brr.slice(2,4));
brr.splice(1,0,"Kunal");
console.log(brr);

//map 

let a = [ 10 , 20 , 30];

a.map((number, index) => {
      console.log(number);
      console.log(index);
})

ans = a.map((number) =>{
            return number * number;
})

console.log(ans);

a = [ 20 , 67 , 21 , 34 , 56, 89];

let even = a.filter((number) => {
    if(number % 2 == 0){
         return true;
    }
    else{
        return false;
    }
})

console.log(even);

arr = [ 10 , 20 , 30 , 40 , 50];
for( let val of arr){
    console.log(val);
}

let full = "Madhav ";
