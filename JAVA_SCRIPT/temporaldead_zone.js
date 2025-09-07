



console.log(marks);   // line 5 to 8 called temporal dead zone
console.log("babbar");
console.log("Love");
const marks = 100;
console.log(marks);






// //global scope
// const age = 15;  // if i replace cosnt with let and var so it works as it is it is globally defined

// console.log(age);
// {
//     console.log(age);
// }
// if(true){
//     console.log(age);
// }

// for(let i = 0 ; i<=2 ; i++){
//  console.log(age);

// }

// function sayHello(){
//     console.log(age);
// }
// sayHello();



// function sayHEllo(){   //function scope name is only up to function
//     var name="earth";  
//     console.log("Hello jee",name);
// }
// console.log(name);
// sayHEllo();


// console.log(height);
// {
//     var height=100;
// }
// console.log(height);

{
    let age = 100;
}
console.log(age); // not behave properly because 
// the let scope is only to block as also with const









