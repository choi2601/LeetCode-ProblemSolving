/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let sum = nums[0];
    const answer = [sum];    
    
    for(let i = 1; i < nums.length; i++) {
        sum += nums[i];
        answer.push(sum);
    }
    
    return answer;
};