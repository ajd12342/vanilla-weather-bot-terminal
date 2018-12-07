'use strict';
const readLine= require('readline');
const rl=readLine.createInterface({
   input:process.stdin,
   output:process.stdout,
   terminal:false,
});
const matcher=require('./matcher');

rl.setPrompt('> ');
rl.prompt();
rl.on('line',(reply)=>{
    matcher(reply,data =>{
        switch(data.intent){
            case 'Hello':
                console.log("A big hello from Vanilla!");
                break;
            case 'Exit':
                console.log("Have a great day!");
                process.exit(0);
                break;
            default:
                console.log("I don't know what you mean :(");
        }
    });
    rl.prompt();
});