/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let pt1 = 0;
    let pt2 = nums.length - 1;
    
    while(pt1 <= pt2) {
        if(nums[pt1] === val) {
            nums.splice(pt1, 1);
            if(nums[pt1] !== val) pt1++;
        } else pt1++;
    }
};