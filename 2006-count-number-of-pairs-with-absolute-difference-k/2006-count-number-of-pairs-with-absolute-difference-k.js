/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countKDifference = function(nums, k) {
    let cnt = 0;
    
    let pt1 = 0;
    let pt2 = pt1 + 1;
    
    while(pt1 < nums.length) {
        const calc = Math.abs(nums[pt1] - nums[pt2]);
        
        if(calc === k) cnt++;
        
        if(!nums[pt2 + 1]) {
            pt1++;
            pt2 = pt1 + 1; 
        } else pt2++;
    }
    
    return cnt;
};