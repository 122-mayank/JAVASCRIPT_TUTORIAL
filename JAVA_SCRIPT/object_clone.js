// console.log("Babbar");

let src ={
    age : 12,
    wt: 68,
    ht : 180
};


let dest ={};

for(let key in src){
    let newKEY  = key;
    let newValue = src[key];
    //insert newKey and value in dest and create clone
    dest[newKEY] = newValue;
}
console.log(dest);





// let dest = Object.assign({} , src);

// src.age = 90;

// console.log(dest);
// console.log(src);

// let src2 ={
//     value:101,
//     name:"Love Babbar"
// }

//  let dest2 = Object.assign({},src,src2);
//  console.log(dest);

// let dest1 = {...src}; //spraed operator by cloning


// // let dest = src;  // copy the obj to provide a refernce
// src.age = 90;


// console.log("src: ",src);
// console.log("dest: ",dest2);

// // console.log(obj);


// // obj.color = "White";

// // console.log(obj);

