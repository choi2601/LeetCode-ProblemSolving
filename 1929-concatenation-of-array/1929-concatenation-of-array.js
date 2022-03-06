/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function(nums) {
    const answer = nums.slice();
    for(let x of nums) {
        answer.push(x);
    }
    
    return answer;
};