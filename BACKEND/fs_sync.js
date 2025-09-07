const fs = require("fs");
const path = require("path");


const fileName = "test.txt";
const filePath = path.join(__dirname,fileName);
console.log(__dirname);

// Write data to file
fs.writeFileSync(filePath, "This is the initial Data,updated", "utf-8");

// Read data from file
const readFile = fs.readFileSync(fileName ,"utf-8" );

console.log(readFile);





