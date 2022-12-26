function findThreeNumbers(nums) {
    // Sort the array in ascending order
    nums.sort((a, b) => a - b);
  
    // Loop through the array and check if the sum of three numbers is 0
    for (let i = 0; i < nums.length - 2; i++) {
      let j = i + 1;
      let k = nums.length - 1;
      while (j < k) {
        const sum = nums[i] + nums[j] + nums[k];
        if (sum === 0) {
          return [nums[i], nums[j], nums[k]];
        } else if (sum < 0) {
          j++;
        } else {
          k--;
        }
      }
    }
  
    return [];
  }
  
  // Test the function with different arrays
  console.log(findThreeNumbers([-1, 0, 1, 2, -1, -4])); // [-1, -1, 2]
  console.log(findThreeNumbers([1, 2, 3, 4, 5, 6])); // []
  console.log(findThreeNumbers([-3, -2, -1, 0, 1, 2, 3])); // [-3, -2, 5]
  