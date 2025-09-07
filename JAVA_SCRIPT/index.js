// function getsum( a, b , c){
//     let sum = a + b + c;
//     return sum;
// }
// let ans = getsum(1,2,3);

// console.log("Printing Sum: ",ans);

// let getexp = (x,y) =>{
//     let ans = x**y;
//     return ans;
// }
// console.log(getexp(2,10));


let obj = {
   
    name : "radha",
    age :25,
    weight: 85,
    height: "6ft 1in",
    greet : function(){
        console.log("Hello ji kaise ho saare");
    }

};

for(let key in obj){
    console.log(key , " ",obj[key]);
}

// console.log(obj);
// obj.greet();

// let arr = [1,2,3,4,5];

// let brr = new Array("Love" , 1 , true);
// console.log(brr);
// console.log(typeof(brr));



