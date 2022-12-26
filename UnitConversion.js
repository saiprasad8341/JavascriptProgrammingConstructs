function convertUnits(value, fromUnit, toUnit) {
    // Convert the value from the fromUnit to the toUnit
    let result;
    switch (fromUnit) {
      case "feet":
        switch (toUnit) {
          case "inch":
            result = value * 12;
            break;
          case "meter":
            result = value * 0.3048;
            break;
        }
        break;
      case "inch":
        switch (toUnit) {
          case "feet":
            result = value / 12;
            break;
          case "meter":
            result = value * 0.0254;
            break;
        }
        break;
      case "meter":
        switch (toUnit) {
          case "feet":
            result = value / 0.3048;
            break;
          case "inch":
            result = value / 0.0254;
            break;
        }
        break;
    }
  
    console.log(`${value} ${fromUnit} is ${result} ${toUnit}`);
  }
  
  const value = process.argv[2];
  const fromUnit = process.argv[3];
  const toUnit = process.argv[4];
  
  convertUnits(value, fromUnit, toUnit);
  