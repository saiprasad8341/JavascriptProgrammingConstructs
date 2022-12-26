function printNthHarmonicNumber(n) {
    // Calculate the nth harmonic number
    let sum = 0;
    for (let i = 1; i <= n; i++) {
      sum += 1 / i;
    }
  
    // Print the nth harmonic number
    console.log(`The ${n}th harmonic number is ${sum}`);
  }
  
  // Read the n from the command line
  const n = process.argv[2];
  
  // Print the nth harmonic number
  printNthHarmonicNumber(n);
  