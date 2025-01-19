import https from "https";
import readline from "readline";
import chalk from "chalk";
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const convertCurrency = (a,b) => {
    return (a*b).toFixed(2);
}

const curConverter = () => {
    const api = 'db0072bb151fd989978e0c04';
    const url = 'https://v6.exchangerate-api.com/v6/db0072bb151fd989978e0c04/latest/USD';
    https.get(url, (response)=>{
        let data = "";
        response.on('data', (chunk)=>{
            data+=chunk;
        });
        response.on('end', ()=>{
            const curr = JSON.parse(data).conversion_rates;
            console.log(curr);
            rl.question("Enter the amount in USD: ", (amoount)=>{
                rl.question("Enter the Targeted Currency [INR,PKR,NMP...] : ", (currency)=>{
                    const rate = curr[currency.toUpperCase()];
                    if(rate){
                        console.log(chalk.bgBlue.yellow(`${amoount} in USD is approx ${convertCurrency(amoount, rate)} ${currency.toUpperCase()}`));
                        //curConverter();
                    }else console.error(error);
                    rl.close();
    
                })
            })
            
        });
    });
};

curConverter();