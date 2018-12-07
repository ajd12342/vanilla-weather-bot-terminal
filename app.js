'use strict';
const readLine= require('readline');
const rl=readLine.createInterface({
   input:process.stdin,
   output:process.stdout,
   terminal:false,
});
const matcher=require('./matcher');
const weather=require('./weather');
rl.setPrompt('> ');
rl.prompt();
rl.on('line',(reply)=>{
    matcher(reply,data =>{
        switch(data.intent){
            case 'Hello':
                console.log(`${data.entities.greeting} to you too!`);
                rl.prompt();
                break;
            case 'Exit':
                console.log("Have a great day!");
                process.exit(0);
                break;
            case 'CurrentWeather':
                console.log(`Checking weather for ${data.entities.city}.`);
                weather(data.entities.city,'current')
                    .then(response=>{
                        console.log(response);
                        rl.prompt();
                    })
                    .catch(error=>{
                       console.log("There seems to be a problem connecting to the Weather service.");
                        rl.prompt();
                    });
                break;
            default:
                console.log("I don't know what you mean :(");
                rl.prompt();
        }
    });
});