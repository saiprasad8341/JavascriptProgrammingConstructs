function factorial(n) {
    let result = 1;
  
    for (let i = 1; i <= n; i++) {
      result *= i;
    }
  
    return result;
  }
  
  const n = process.argv[2];
  
  const factorial = factorial(n);
  
  console.log(`The factorial of ${n} is ${factorial}`);
  