function rollDie() {
    // Create a map to store the results
    const results = new Map();
  
    // Roll the die until any number has been rolled 10 times
    let numRolls = 0;
    while (true) {
      // Roll the die and get a random number between 1 and 6
      const roll = Math.floor(Math.random() * 6) + 1;
  
      // Increment the number of rolls
      numRolls++;
  
      // Check if the number has been rolled before
      if (results.has(roll)) {
        // Increment the count for the number
        results.set(roll, results.get(roll) + 1);
      } else {
        // Add the number to the map with a count of 1
        results.set(roll, 1);
      }
  
      // Check if any number has been rolled 10 times
      if (Array.from(results.values()).some(count => count === 10)) {
        break;
      }
    }
  
    // Find the number that was rolled the maximum and minimum number of times
    let maxCount = 0;
    let minCount = Infinity;
    let maxNumber = null;
    let minNumber = null;
    for (const [number, count] of results) {
      if (count > maxCount) {
        maxCount = count;
        maxNumber = number;
      }
      if (count < minCount) {
        minCount = count;
        minNumber = number;
      }
    }
  
    console.log(`Number of rolls: ${numRolls}`);
    console.log(`Results: ${Array.from(results)}`);
    console.log(`Number rolled the most: ${maxNumber} (${maxCount} times)`);
    console.log(`Number rolled the least: ${minNumber} (${minCount} times)`);
  }
  
  rollDie();
  