/**
 * @param {number[]} nums
 * @return {number[]}
 */
var buildArray = function(nums) {
    const answer = [];
    
    for(let x of nums) {
        answer.push(nums[x]);    
    }
    
    return answer;
};