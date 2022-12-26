// Generate 10 random 3-digit numbers and store them in an array
const numbers = [];
for (let i = 0; i < 10; i++) {
  numbers.push(Math.floor(Math.random() * (999 - 100 + 1)) + 100);
}
console.log(`${numbers}`)
numbers.sort();

console.log(`The 2nd largest element is ${numbers[numbers.length - 2]}`);
console.log(`The 2nd smallest element is ${numbers[1]}`);