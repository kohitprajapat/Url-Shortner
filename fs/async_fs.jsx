const fs = require("fs");
const path = require("path");
const fileName = "test.txt";
const filePath = path.join(__dirname, fileName);
console.log(__dirname);

// const writeFile = fs.writeFile(
//     filePath,
//     "This is 1st line",
//     'utf-8',
//     (err) => {
//         if (err) {
//             console.error();
//         }else console.log("File has been saved");
//     }
// );
// console.log(writeFile);

// const readFile = fs.readFile(
//     filePath,
//     'utf-8',
//     (err, data) => {
//         if (err) console.error(err);
//         else console.log(data);
//     }
// );
// console.log(readFile);

// const appendFile = fs.appendFile(
//     filePath,
//     "\nThis is 2nd line",
//     "utf-8",
//     (err) => {
//         if(err) console.error();
//         else console.log("Data Added Successfully");
//     }
// );
// console.log(appendFile);

// const unlink = fs.unlink(
//     filePath,
//     (err) => {
//         if(err) throw err;
//         console.log(__dirname, fileName, "Deleted Successfully");
//     }
// );
// console.log(unlink);
