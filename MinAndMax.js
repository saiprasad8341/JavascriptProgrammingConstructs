function findMinMax() {
  // Generate 5 random 3-digit numbers
  const numbers = [];
  for (let i = 0; i < 5; i++) {
    numbers.push(100 + Math.floor(Math.random() * 900));
  }

  // Find the minimum and maximum values
  let min = numbers[0];
  let max = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < min) {
      min = numbers[i];
    }
    if (numbers[i] > max) {
      max = numbers[i];
    }
  }

  // Output the minimum and maximum values
  console.log(`Minimum value: ${min}`);
  console.log(`Maximum value: ${max}`);
}

findMinMax();