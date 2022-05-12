/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function(items, ruleKey, ruleValue) {
    const ruleIndex = {
        type: 0,
        color: 1,
        name: 2
    }
    
    const curIndex = ruleIndex[ruleKey];
    let answer = 0;
    
    for(let x of items) {
        if(x[curIndex] === ruleValue) answer++;
    }
    
    return answer
};