const readline = require('readline');
const { parseArgs } = require('util');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout

});



const computerGuess = Math.floor(Math.random() * 100 + 1);
let numberOfAttempts = 0;



function askQuestion() {
    rl.question("Is your number between 1 and 100?  ", (myAnswer) => {
        
        
        let playerAnswer = myAnswer;

        if (playerAnswer === ('yes')) {
            console.log(`my guess is ${computerGuess}`)
        }
        else if (playerAnswer === ('try again')) {
            console.log(`Lets try ${computerGuess}`)
        }
        else {
            console.log("The number has to be between 1 and 100 to continue")
            rl.close();
        }
    } )


    let myNumber = 35;
    numberOfAttempts++;

        if (computerGuess === myNumber) {
            console.log(`You geussed the number in ${numberOfAttempts}, you won!! `);
        }
        else if (computerGuess > myNumber) {
            console.log('Your guess is to high');
            
        }
        else if (computerGuess < myNumber) {
            console.log('your guess is to low');
            
        }
        else {
            console.log('keep trying!');
            
        }
    
}
askQuestion(); 
    