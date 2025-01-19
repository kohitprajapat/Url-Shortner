const fs = require("fs/promises");
const path = require("path");
const fileName = "test.txt";
const filePath = path.join(__dirname, fileName);
console.log(__dirname);
const file = __dirname;

// fs
//     .readdir(file)
//     .then((data) => console.log(data))
//     .catch((err) => console.error(err));


// const readFolder = async () => {
//     try {
//         // Read the contents of the directory where the script is located
//         const files = await fs.readdir(__dirname);
//         console.log(files); // Logs all files and folders in the directory
//     } catch (error) {
//         console.error("Error reading the folder:", error);
//     }
// };

// readFolder();

// const writeFile = async () => {
//     try {
//         fs.writeFile(
//             filePath,
//             "This is new data",
//             "utf-8"
//         )
//     } catch (error) {
//         console.error(error)
//     }
// }

// writeFile();

// const appendFile = async () => {
//     try {
//         await fs
//             .appendFile(
//                 filePath,
//                 "\nThis is next line(Updated)",
//                 "utf-8"
//             );
//     } catch (error) {
//         console.error(error);
//     }
// };

// appendFile();

// const deleteFile = async () => {
//     try {
//         await fs    
//             .unlink(filePath)
//     } catch (err) {
//         console.error(err);
//     }
// };

// deleteFile();