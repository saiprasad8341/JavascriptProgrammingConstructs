function isPalindrome(num1, num2) {
    // Convert the numbers to strings
    const num1String = num1.toString();
    const num2String = num2.toString();
  
    // Check if the strings are palindromes
    return num1String === num1String.split('').reverse().join('') && num2String === num2String.split('').reverse().join('');
  }
  console.log(isPalindrome(121, 232)); 
  console.log(isPalindrome(123, 321)); 
    