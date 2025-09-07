// async function getData(){

//       setTimeout(function(){
//      console.log("Radha madhav");
//       },3000);

// }

// getData();

//await - ?

//fetch API ---> JSON Placeholder

// async function getData(){
// let response = await fetch('https://jsonplaceholder.typicode.com/todos/1');


// let data = await response.json();
// console.log(data);

    
// }
// getData();

//scenarios

//prepare url / api endpoint  -> sync code 
// await // fetch data  -> network call -> async catgories
// process data -> sync code

const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const url = "https://jsonplaceholder.typicode.com/posts";

const options ={
  method: "POST",
  body: JSON.stringify({ username: "example" }),
  headers: myHeaders,
};

async function getData(){
  
    const response = await fetch(url,options);
    let data = await response.json();
    console.log(data);

}
async function postData(){
  
    const response = await fetch(url,options);
    let data = await response.json();
    console.log(data);

}
async function processData() {
      await postData();
      await getData();
}
processData();




