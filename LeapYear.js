function isLeapYear(year) {
    // Check if the year is divisible by 4
    if (year % 4 === 0) {
      // Check if the year is divisible by 100 but not 400
      if (year % 100 === 0 && year % 400 !== 0) {
        return false;
      }
      return true;
    }
    return false;
  }
  
  // Get the year from the command line arguments
  const year = process.argv[2];
  
  // Check if the year is a leap year
  if (isLeapYear(year)) {
    console.log(`${year} is a leap year`);
  } else {
    console.log(`${year} is not a leap year`);
  }
  