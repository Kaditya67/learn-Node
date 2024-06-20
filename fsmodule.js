const { error } = require("console");
const fs=require("fs");

// fs.readFile("./NotesNode",(err,data)=>{
//   console.log(err);
//   console.log(data);
//   console.log(data.toString());  
// })

// fs.readFile("./NotesNode","utf-8",(err,data)=>{
//   console.log(err);
//   console.log(data);
// //   console.log(data.toString());          // not needed when encoding is provided
// })


// using readFileSync

// const data1=fs.readFileSync("./NotesNode");
// console.log(data1.toString());
// const data2=fs.readFileSync("./NotesNode","utf-8");
// console.log(data2);



// writeFile

fs.writeFile("test.txt","hello this is aditya",(err)=>{         // non blocking function
    console.log(err);
});

const b=fs.writeFileSync("test1.txt","hello this is aditya");
console.log(b);