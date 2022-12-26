function printPowersOfTwo(n) {
    // Print the table header
    console.log("n \t 2^n");
  
    // Print the powers of 2
    for (let i = 0; i <= n; i++) {
      console.log(`${i} \t ${Math.pow(2, i)}`);
    }
  }
  
  const n = process.argv[2];
  
  printPowersOfTwo(n);
  