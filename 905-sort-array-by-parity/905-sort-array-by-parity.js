/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function(nums) {
    let front = 0;
    
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] % 2 === 0) {
            for(let j = i; j > front; j--) {
                [nums[j - 1], nums[j]] = [nums[j], nums[j - 1]];
            }
            front++;
        }
    }
    
    return nums;
};