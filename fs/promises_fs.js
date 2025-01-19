const fs = require("fs/promises");
const path = require("path");
const fileName = "test.txt";
const filePath = path.join(__dirname, fileName);
console.log(__dirname);
const file = __dirname;

// fs.promises
//     .readdir(file)
//     .then((data) => console.log(data))
//     .catch((err) => console.error(err));

// fs.promises
//     .writeFile(
//         filePath,
//         "This is new line",
//         "utf-8",
//     )
//     .then((data)=> console.log(data))
//     .catch((err) => console.log(err));    

// fs
//     .readFile(
//         filePath,
//         "utf-8"
//     )
//     .then((data) => console.log(data))
//     .catch((err)=> console.log(err));

// fs
//     .appendFile(
//         filePath,
//         "\nThis is line 2",
//         "utf-8"
//     )
//     .then((data)=> console.log("Data added to next line"))
//     .catch((err)=> console.error(err));


// fs 
//     .unlink(
//         filePath
//     )
//     .then((data)=> console.log("Deleted Successfully"))
//     .catch((err)=> console.error(err));