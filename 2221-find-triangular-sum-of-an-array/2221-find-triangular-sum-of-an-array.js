/**
 * @param {number[]} nums
 * @return {number}
 */
var triangularSum = function(nums) {
    let cnt = nums.length;
    
    while(cnt > 1) {
        for(let i = 0; i < cnt - 1; i++) {
            nums[i] = (nums[i] + nums[i + 1]) % 10;
        }
        
        cnt--;
    }
    
    return nums[0];
};