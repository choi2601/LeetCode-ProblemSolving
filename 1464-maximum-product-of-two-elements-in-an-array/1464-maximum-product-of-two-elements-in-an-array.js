/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    const sortedNums = nums.sort((a, b) => a - b);
    
    return (sortedNums[sortedNums.length - 1] - 1) * (sortedNums[sortedNums.length - 2] - 1)
};