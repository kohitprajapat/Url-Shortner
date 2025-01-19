import readline from "readline";
import fs from "fs";
import { error } from "console";
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});


const fileCreator = ()=> {
    rl.question("Enter your file name: ", (filename) => {
        rl.question("Enter your plain text content: ", (text) => {
            fs.writeFile(
                `${filename}.txt`,
                text,
                (err)=>{
                    if(err) console.error(err);
                    else console.log(`File ${filename}.txt created successfully`);
                    rl.close();
                }
            )
        })
    })
    
}

fileCreator();


