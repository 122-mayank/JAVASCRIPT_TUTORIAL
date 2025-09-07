const greet = function(name){
    return `hello ${name}!`
}

console.log(greet("Mayank"));


function example(){
  
    var x = 10;
    console.log(x);
}
example();


var x = 20;
console.log(x);


x="Radha Krishna";
console.log(x);



var y = 30;
console.log(y);


var y = "Radha Madhava";
console.log(y);

let c =10;
if(true){
    let z = 20;
    console.log(c);
}
console.log(c);


const person = {
       Name : "Krishna",
       age : 21
};

console.log(person.Name);
person.Name = "Love Krishna";
console.log(person.Name);


const numbers = [1,2,3,4];

numbers.push(5);
console.log(numbers);

let individual = {
    Name : "Love Krishna",
    age : 21,
    Country:"India",
    message: function(){
           console.log("I am in love witth " + this.Name);
    }
};

individual.age = 22;

delete individual.Country;
individual.isSleeping = false;

individual.message();

console.log(individual);


let sum = function( a ,  b)
{
    return a + b;
}

let op = sum(2,3);
console.log(op);

a = 2;
b = 3;
result = a + b;
console.log(result);