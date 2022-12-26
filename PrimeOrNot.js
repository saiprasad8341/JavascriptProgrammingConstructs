function isPrime(n) {
    if (n < 2) {
      return false;
    }
  
    if (n === 2) {
      return true;
    }
  
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) {
        return false;
      }
    }
  
    return true;
  }
  
  const n = process.argv[2];
  
  // Check if the number is prime or not.
  if (isPrime(n)) {
    console.log(`${n} is a prime number`);
  } else {
    console.log(`${n} is not a prime number`);
  }
  