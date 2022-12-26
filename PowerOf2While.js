function printPowersOfTwo(n) {
    console.log("n\t2^n");
  
    let i = 0;
    let power = 1;
  
    while (power <= 256) {
      console.log(`${i}\t${power}`);
      i++;
      power *= 2;
    }
  }
  const n = process.argv[2];
  
  printPowersOfTwo(n);
  