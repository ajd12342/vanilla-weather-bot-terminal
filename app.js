'use strict';
const readLine= require('readline');
const rl=readLine.createInterface({
   input:process.stdin,
   output:process.stdout,
   terminal:false,
});
rl.setPrompt('> ');
rl.prompt();
rl.on('line',(reply)=>{
    console.log(`You said ${reply}`);
    rl.prompt();
});