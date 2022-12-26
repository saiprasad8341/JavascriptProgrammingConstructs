function generateBirthMonths() {
    // Create a map to store the birth months
    const birthMonths = new Map();
  
    // Generate the birth months of 50 individuals
    for (let i = 0; i < 50; i++) {
      // Generate a random year between 92 and 93
      const year = 92 + Math.floor(Math.random() * 2);
  
      // Generate a random month between 1 and 12
      const month = Math.floor(Math.random() * 12) + 1;
  
      // Check if the month has been generated before
      if (birthMonths.has(month)) {
        // Increment the count for the month
        birthMonths.set(month, birthMonths.get(month) + 1);
      } else {
        // Add the month to the map with a count of 1
        birthMonths.set(month, 1);
      }
    }
  
    // Find the months with the most and least individuals
    let maxCount = 0;
    let minCount = Infinity;
    let maxMonth = null;
    let minMonth = null;
    for (const [month, count] of birthMonths) {
      if (count > maxCount) {
        maxCount = count;
        maxMonth = month;
      }
      if (count < minCount) {
        minCount = count;
        minMonth = month;
      }
    }
  
    console.log(`Birth months: ${Array.from(birthMonths)}`);
    console.log(`Month with the most individuals: ${maxMonth} (${maxCount} individuals)`);
    console.log(`Month with the least individuals: ${minMonth} (${minCount} individuals)`);
  }
  
  generateBirthMonths();
  