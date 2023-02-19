/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function(score) {
    const arr = score.slice().sort((a, b) => b - a);
    const map = new Map();
    const medals = ['Gold Medal', 'Silver Medal', 'Bronze Medal'];
    
    for(let i = 0; i < arr.length; i++) {
        if(i <= 2) {
            map.set(arr[i], medals[i]);
        } else {
            map.set(arr[i], String(i + 1));
        }
    }
    
    const answer = [];
    
    for(let x of score) {
        answer.push(map.get(x));
    }
    
    return answer;
};