function gamble() {
  let money = 100;
  let wins = 0;
  let bets = 0;

  while (money > 0 && money < 200) {
    money--;
    bets++;

    if (Math.random() < 0.5) {
      money++;
      wins++;
    }
  }

  console.log(`Wins: ${wins}`);
  console.log(`Bets: ${bets}`);
  console.log(`Money: Rs ${money}`);
}

gamble();
