function isSpring(day, month) {
    // Check if the month is March, April, May, or June
    if (month < 3 || month > 6) {
      return false;
    }
  
    // If the month is March, check if the day is greater than or equal to 20
    if (month === 3 && day >= 20) {
      return true;
    }
  
    // If the month is June, check if the day is less than or equal to 20
    if (month === 6 && day <= 20) {
      return true;
    }
  
    // If the month is April or May, return true
    return true;
  }
  
  // Get the day and month from the command line arguments
  const day = process.argv[2];
  const month = process.argv[3];
  
  // Print the result of the isSpring function
  console.log(isSpring(day, month));
  