/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
   let answer;
   let dy = Array.from({length: amount + 1}, () => 1000);

   dy[0] = 0;
    
   for(let i = 0; i < coins.length; i++) {
       let coin = coins[i];
       for(let j = coin; j <= amount; j++) {
           dy[j] = Math.min(dy[j], dy[j - coin] + 1);
       }
   }
   answer = dy[amount];
   if(answer === 1000) return -1;
   return answer;
};