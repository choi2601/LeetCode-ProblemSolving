/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
    const frontNums = nums.slice(0, n);
    const backNums = nums.slice(n, nums.length);
    const shuffleNums = [];
    
    for(let i = 0; i < n; i++) {
        shuffleNums.push(frontNums[i]);
        shuffleNums.push(backNums[i]);
    }
    
    return shuffleNums;
};