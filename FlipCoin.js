function flipCoin() {
    const randomNumber = Math.random();
  
    // If the random number is less than 0.5, return "Heads". Otherwise, return "Tails"
    if (randomNumber < 0.5) {
      return "Heads";
    }
    return "Tails";
  }
  console.log(flipCoin());
  