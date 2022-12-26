function convertTemperature(conversionSelection, temperature) {
    if (!(0 <= temperature && temperature <= 100)) {
      return "Temperature must be between 0 and 100.";
    }
  
    switch (conversionSelection) {
      case "degC_to_degF":
        return (temperature * 9/5) + 32;
      case "degF_to_degC":
        return (temperature - 32) * 5/9;
      default:
        return "Invalid conversion selection. Please choose 'degC_to_degF' or 'degF_to_degC'.";
    }
  }
  
  console.log(convertTemperature("degC_to_degF", 0)); 
  console.log(convertTemperature("degC_to_degF", 100)); 
  console.log(convertTemperature("degF_to_degC", 32));  
  console.log(convertTemperature("degF_to_degC", 212)); 
  console.log(convertTemperature("invalid_selection", 0));
  console.log(convertTemperature("degC_to_degF", 110));  
  