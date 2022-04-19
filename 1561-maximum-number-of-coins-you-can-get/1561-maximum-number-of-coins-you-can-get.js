/**
 * @param {number[]} piles
 * @return {number}
 */
var maxCoins = function(piles) {
//     let sum = 0;
    
//     for(let i = 0; i < piles.length - 1; i++) {
//         if(i % 3 === 1 || i % 3 === 2) {
//             for(let j = 0; j < piles.length - i - 1; j++) {
//                 if(piles[i] < piles[j + 1]) [piles[i], piles[j + 1]] = [piles[j + 1], piles[i]];
//             }
//             if(i % 3 === 2) {
//                 [piles[i - 1], piles[i]] = [piles[i], piles[i - 1]];
//                 sum += piles[i - 1]; 
//             }
//         }
//     }
    
//     return sum;
    let sum = 0;
    piles.sort((a, b) => a - b);
    
    for(let i = piles.length / 3; i < piles.length; i+=2) {
        sum += piles[i];
    }
    
    return sum;
};