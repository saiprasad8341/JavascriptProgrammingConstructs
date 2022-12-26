const prompt = require("prompt-sync")();
function findMagicNumber() {
    // Initialize the variables
    let low = 1;
    let high = 100;
    let guess = 50;
  
    // Use a while loop to find the magic number
    while (true) {
      // Ask the user if the magic number is less than or greater than the guess
      const response = prompt(`Is your number less than or greater than ${guess}?`);
  
      if (response === "less") {
        high = guess;
      } else if (response === "greater") {
        low = guess;
      } else {
        // If the user doesn't enter "less" or "greater", assume they are correct
        break;
      }
  
      // Calculate the new guess
      guess = Math.floor((low + high) / 2);
    }
  
    // Output the magic number
    console.log(`The magic number is ${guess}!`);
  }
  
  // Find the magic number
  findMagicNumber();
  