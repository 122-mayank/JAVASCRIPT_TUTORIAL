
// var myFavNum = 56;
// console.log(myFavNum);

// var str ="Krishna is the supreme personality of God head";
// console.log(str);

// const bigINt = 12345678098765432123456789006212345678909815678n;
// console.log(bigINt);

// console.log(typeof('strrr'));

// var badmemories = null;
// console.log(typeof(badmemories));
// console.log(typeof(null));

// var mystring = "10";
// console.log(typeof +mystring);// convert string to number by adding + operator

// //convert no to string
// var num = 5;
// console.log( typeof (num+" "));


// var logic = 'vinod'

// if(logic){
//      console.log("this is truthy value");
// }
// else{
//     console.log("this is truthy value");
// }

// const myString = "234";
// console.log(parseInt(myString));

// console.log(isNaN('5'));

// if(NaN == NaN){
//      console.log("Both are equal");
// }

// else{
//      console.log("Not equal");
// }

// console.log(10+"20");
// console.log('vinod'-'thapa');
// console.log(9 -'5');
// console.log(false-true);
// console.log(true+false);


// const value = "Hello" + "World";
// console.log(value);


// function sum(a,b){
//      return a+b;
// }

// console.log(sum(2,4));

// const res = ()=>{
//       var b = 20;
//       var c = 30;

//       return b+c;
// }

// console.log(res());

// var s = "Krishna";
// var s = 12;

// let c = 20;
// c = "Damodar";

// console.log(s +" "+ c);

//         // Function Expression
// var result = function add( a , b){
//              console.log(a+b);               
// }

// result(12 , 13);


//     //   Immediate invoked Function
// (function(a ,b){
//      console.log(a+b);
// })(12 , 13);


//   var output = (function(a,b){
//      return a+b;
//   })(12 , 7);


//   console.log(output);



//   if(true){
//       var name ="krishna";
//       console.log(name);
//   }
//   console.log(name);


//   let firstName = "Ms";
//   let lastName = "Word";

//   let fullname = `${firstName} ${lastName}`;
//   console.log(fullname);

//   //using array constructor
//   let fruits = new Array('apple' , 'orange' , 'banana');
//   console.log(fruits);

  //using array  literals
//   let arr = ['apple' , 'orange' , 'guaava'];
//   console.log(arr);


//   //use of for of loop
//   for(let item of arr){
//      console.log(item);
//   }

//   //use of for in loop
//   for(let idx in arr){
//        console.log(arr[idx]);
//   }

//   arr.forEach((curr , index , arr)=>{
//                   console.log(`${curr} ${index}`)
//   });
//   //removing an element
//   let fruits = ['aaple' , 'orange' , 'mango' , 'banana'];
// console.log(fruits.splice(1,1));

// // addding an element
// fruits.splice(fruits.length , 0 , 'pineapple');
// console.log(fruits);

// let num = [1 , 3, 4 , 8 , 9 , 6 , 7 , 6 , 4 , 3];
// console.log(num.indexOf(3));
// console.log(num.lastIndexOf(3));
// console.log(num.includes(2));

// const result = num.find((curr) => {
//         return curr>5;    
// });
// console.log(result);

//

// const num = [1 , 2 , 4 , 5,6 ,  7, 8,9];

// const result = num.map((curr) => curr *5);

// console.log(result);


// const result2 = num.findIndex((curr) => {
//     return curr >2
// });

// console.log(result2);

// const output = num.filter((curr) => {

//      return curr > 3;
// });

// console.log(output);


// const numbers = [1 , 2, 3 , 4,6, 5 , 6,7, 8,9];
// console.log(new Set(numbers));

// numbers.sort();

// console.log(numbers);


// //for descending order 
// const sortedNUM = numbers.sort((a,b) => {
//       if( a > b) 
//         {return -1;
//         }
//       else if( b > a) {return 1;
//       }
// });

// console.log(sortedNUM);

// const total = numbers.reduce((acc , curr)=>{
//     return acc + curr;
// },0);

// console.log(total);

// let text = "Microsoft Word";
// let ans = Array.from(text);
// console.log(ans);

let text2 = "Hello Javascript , welcome to our world best Javascript course";
// let res = text2.search("Javascript");
// console.log(res);

// let result = text2.match("Javascript");
// console.log(result);

let matchresult = text2.matchAll('Javascript');
console.log(...matchresult);


const mathfloor = Math.floor(3.4);
console.log(mathfloor);

const ceilans = Math.ceil(-2.4);
console.log(ceilans);


const ans = Math.pow(2,3);
console.log(ans);

