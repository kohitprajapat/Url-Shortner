import https from "https";
import chalk from "chalk";

const getJoke = () => {
    const url = 'https://official-joke-api.appspot.com/random_joke';
    https.get(url, (response)=>{
        let data = "";
        response.on('data', (chunk)=>{
            data+=chunk;
        });
        response.on('end', ()=>{
            const joke = JSON.parse(data);
            console.log("Here is the Joke---");
            //console.log(joke);
            console.log(chalk.yellowBright(`Joke Type => ${joke.type}`));
            console.log(chalk.red(`${joke.setup}`));
            console.log(chalk.bgGreen.bold(`${joke.punchline}`));
        });
        response.on("error", (err)=>{
            if(err){
                console.error(`Error while fetching joke(-'-)", ${err.message}`);
            }
        })
    })
}

getJoke();