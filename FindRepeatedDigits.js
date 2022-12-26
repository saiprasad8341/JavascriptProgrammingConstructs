function findRepeatedDigits() {
    // Create an array to store the repeated digits
    const repeatedDigits = [];
  
    // Loop through the range 0-100
    for (let i = 0; i <= 100; i++) {
      // Convert the number to a string
      const numString = i.toString();
  
      // Check if the string has any repeated digits
      for (let j = 0; j < numString.length; j++) {
        if (numString[j] === numString[j + 1]) {
          // Add the repeated digit to the array
          repeatedDigits.push(parseInt(numString[j]));
          break;
        }
      }
    }
  
    return repeatedDigits;
  }
  
  console.log(findRepeatedDigits()); // [11, 22, 33, 44, 55, 66, 77, 88, 99]
  