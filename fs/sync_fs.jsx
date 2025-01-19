const fs = require('fs');
const path = require("path");
const fileName = "newtest.txt";
const filePath = path.join(__dirname, fileName);

// console.log(__dirname);
// const writeFile = fs.writeFileSync(
//     filePath,
//     "This is text - updated",
//     "utf-8",
// );
// console.log(writeFile);

// const readFile = fs.readFileSync(
//     filePath,
//     "utf-8"
// );
// console.log(readFile);

// const appendFile = fs.appendFileSync(
//     filePath,
//     "\nThis is 2nd line of data",
//     'utf-8'
// );
// console.log(appendFile);

// const fileDelete = fs.unlinkSync(filePath);
// console.log(fileDelete);
const newFileName = "test.txt";
const newFilePath = path.join(__dirname, newFileName);
const renameFile = fs.renameSync(filePath, newFilePath);
console.log(renameFile);