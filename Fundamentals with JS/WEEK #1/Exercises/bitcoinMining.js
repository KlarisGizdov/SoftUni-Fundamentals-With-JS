function bitcoinMining(input) {
  let day = 0;
  let money = 0;
  let firstBitcoin =[];
  let bitcoins = 0;

  for (let i = 0; i < input.length; i++) {
      day++;
      let k = 1;
      (day % 3 === 0) ? (k = 0.7) : k ;        
      money += (input[i] * 67.51 * k);

      while (money >= 11949.16) {
          money -= 11949.16;
          bitcoins++;
          firstBitcoin.push(day); 
      }
  }
  console.log(`Bought bitcoins: ${bitcoins}`);
  if (!!bitcoins) {
      console.log(`Day of the first purchased bitcoin: ${firstBitcoin[0]}`);
  }
  console.log(`Left money: ${money.toFixed(2)} lv.`);
}