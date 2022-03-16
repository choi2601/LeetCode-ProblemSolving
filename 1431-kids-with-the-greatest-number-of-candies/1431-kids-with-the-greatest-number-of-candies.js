/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    const answer = [];
    const max = Math.max(...candies);
    
    for(let i = 0; i < candies.length; i++) {
        const curCandyNum = candies[i] + extraCandies;
        if(curCandyNum >= max) answer.push(true);
        else answer.push(false);
    }
    
    return answer;
};