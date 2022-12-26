function findFactors(N) {
    const factors = [];
  
    let n = N;
    for (let i = 2; i <= n; i++) {
      while (n % i === 0) {
        factors.push(i);
        n /= i;
      }
    }
    console.log(`The factors of ${N} are: ${factors.join(", ")}`);
  }
  
  const N = process.argv[2];
  
  findFactors(N);
  