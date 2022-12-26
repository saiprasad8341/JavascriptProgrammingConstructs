function isPrime(num) {
  if (num < 2) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}
// Checking Palindrome....
function getPalindrome(num) {
  const numString = num.toString();

  return parseInt(numString.split("").reverse().join(""));
}
function checkNumber(num) {
  if (isPrime(num)) {
    console.log(`${num} is a prime number`);

    const palindrome = getPalindrome(num);
    console.log(`The palindrome of ${num} is ${palindrome}`);

    if (isPrime(palindrome)) {
      console.log(`${palindrome} is also a prime number`);
    } else {
      console.log(`${palindrome} is not a prime number`);
    }
  } else {
    console.log(`${num} is not a prime number`);
  }
}

checkNumber(11);
checkNumber(9);
