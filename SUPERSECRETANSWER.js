// Require the readline module to create an interface for reading from stdin and writing to stdout
const readline = require('readline');

// Create the readline interface using process.stdin and process.stdout
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Introduction message for the user
console.log('Please think of a number between 1 and 100 (inclusive).');
console.log('I will try to guess it.');

// Initialize the lower and upper bounds for the guessing game
let lowerBound = 1;
let upperBound = 100;
let tries = 0; // Variable to keep track of the number of guesses

// Function to guess the number
const guessNumber = () => {
    // Check if the bounds are still valid, indicating a misunderstanding if not
    if (lowerBound > upperBound) {
        console.log('It seems there might have been a misunderstanding.');
        rl.close(); // Close the readline interface
        return;
    }

    // Calculate the guess by finding the midpoint between the current bounds
    const guess = Math.floor((lowerBound + upperBound) / 2);
    tries++; // Increment the tries counter

    // Ask the user if the guess is correct
    rl.question(`Is it... ${guess}? (Y/N) `, (answer) => {
        // Check if the user confirmed the guess
        if (answer.toUpperCase() === 'Y') {
            console.log(`Your number was ${guess}!`);
            console.log(`I guessed it in ${tries} tries.`);
            rl.close(); // Close the interface after a correct guess
        } else if (answer.toUpperCase() === 'N') {
            // If the guess was not correct, ask if the number is higher or lower
            rl.question('Is it higher (H), or lower (L)? ', (hint) => {
                // Adjust the bounds based on the user's hint
                if (hint.toUpperCase() === 'H') {
                    lowerBound = guess + 1; // Move the lower bound up
                } else if (hint.toUpperCase() === 'L') {
                    upperBound = guess - 1; // Move the upper bound down
                } else {
                    // Handle invalid input for the hint
                    console.log('Please enter H for higher, L for lower.');
                }
                guessNumber(); // Make another guess with the updated bounds
            });
        } else {
            // Handle invalid input for the initial guess confirmation
            console.log('Please enter Y for yes, N for no.');
            guessNumber(); // Retry the guess with the same bounds
        }
    });
};

guessNumber(); // Start the guessing game
