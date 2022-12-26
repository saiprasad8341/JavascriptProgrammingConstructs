function printUnit(number) {
    // Convert the number to a string and get the length
    const numString = number.toString();
    const numLength = numString.length;
  
    // Check the length of the number and print the corresponding unit
    switch (numLength) {
      case 1:
        console.log("Unit");
        break;
      case 2:
        console.log("Ten");
        break;
      case 3:
        console.log("Hundred");
        break;
      case 4:
        console.log("Thousand");
        break;
      case 5:
        console.log("Ten Thousand");
        break;
      case 6:
        console.log("Hundred Thousand");
        break;
      case 7:
        console.log("Million");
        break;
      default:
        console.log("Invalid number");
    }
  }
  
  // Read a number from the command line
  const number = process.argv[2];
  
  // Print the unit
  printUnit(number);
  