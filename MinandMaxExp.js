function findMaxMin(a, b, c) {
    // Perform the arithmetic operations
    const result1 = a + b * c;
    const result2 = a % b + c;
    const result3 = c + a / b;
    const result4 = a * b + c;
  
    let max = result1;
    let min = result1;
    if (result2 > max) {
      max = result2;
    }
    if (result2 < min) {
      min = result2;
    }
    if (result3 > max) {
      max = result3;
    }
    if (result3 < min) {
      min = result3;
    }
    if (result4 > max) {
      max = result4;
    }
    if (result4 < min) {
      min = result4;
    }
  
    console.log(`Maximum value: ${max}`);
    console.log(`Minimum value: ${min}`);
  }
  
  const a = process.argv[2];
  const b = process.argv[3];
  const c = process.argv[4];
  
  findMaxMin(a, b, c);
  