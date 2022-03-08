/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    let answer = 0;
    for(let x of stones) {
        if(jewels.includes(x)) answer++;
    }
    
    return answer;
};