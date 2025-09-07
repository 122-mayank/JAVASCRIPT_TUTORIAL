


// function init(){

//     let name = "Babbar";

//     function displayName(){
//         console.log(name);
//     }

//     displayName();
  

// }
// init();

// closure is given below


function outerFunction(){
 
    let name = "Babbar";

    function innerFunction(){
        console.log(name);
    }
      return innerFunction();
}

let inner = outerFunction();

inner();