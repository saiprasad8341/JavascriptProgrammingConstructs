function printWeekDay(day) {
    switch (day) {
      case 0:
        console.log("Sunday");
        break;
      case 1:
        console.log("Monday");
        break;
      case 2:
        console.log("Tuesday");
        break;
      case 3:
        console.log("Wednesday");
        break;
      case 4:
        console.log("Thursday");
        break;
      case 5:
        console.log("Friday");
        break;
      case 6:
        console.log("Saturday");
        break;
      default:
        console.log("Invalid day");
    }
  }
  
  // Read a number from the command line
  const day = process.argv[2];
  
  printWeekDay(day);
  