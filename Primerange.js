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
  
  function printPrimeNumbers(start, end) {
    for (let i = start; i <= end; i++) {
      if (isPrime(i)) {
        console.log(i);
      }
    }
  }
  
  const start = process.argv[2];
  const end = process.argv[3];
  
  printPrimeNumbers(start, end);
  