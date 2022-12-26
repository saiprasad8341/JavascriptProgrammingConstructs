function primeFactorization(n) {
    // Create an array to store the prime factors
    const primeFactors = [];
  
    // Find the prime factors of the number
    while (n % 2 === 0) {
      primeFactors.push(2);
      n = n / 2;
    }
  
    for (let i = 3; i <= Math.sqrt(n); i += 2) {
      while (n % i === 0) {
        primeFactors.push(i);
        n = n / i;
      }
    }
  
    // If the number is greater than 2, it is a prime factor
    if (n > 2) {
      primeFactors.push(n);
    }
  
    return primeFactors;
  }
  
  // Test the function with different numbers
  console.log(primeFactorization(12)); // [2, 2, 3]
  console.log(primeFactorization(15)); // [3, 5]
  console.log(primeFactorization(21)); // [3, 7]
  