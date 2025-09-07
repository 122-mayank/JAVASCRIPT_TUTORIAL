console.log("Babbar");


function say(){
   console.log("Mayank Saini");
}

say();

function printCount(){
   
    for( let i = 1 ; i < 10 ; i++){
          console.log(i);
    }

}

printCount();


function print(num){
    console.log("Printing Number: ",num);
}

print(23);


function   avg( num1 , num2){
             let avg = (num1 + num2) / 2;
             console.log("Average: ",avg);
}

avg(12 , 14);

//return functions
function getSum(a , b ,c){
    return a + b + c;
}

let ans = getSum(12 , 13 , 14);
console.log(ans);


function getMyName(firstName , lastName){
          
      let fullName = firstName +" "+ lastName;
       return fullName;
}

let res = getMyName("Mayank","Saini");
console.log(res);

let solve = function (a , b){
    return a*b;
}

ans = solve(12 ,3);
console.log(ans);


let getExp = (x,y) =>{
         let ans = x**y;
         return ans;
}

console.log(getExp(2,10));