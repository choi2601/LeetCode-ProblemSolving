/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    let cnt = 0;
    let accum = init;
    
    while(cnt < nums.length) {
      accum = fn(accum, nums[cnt++]);    
   }
    
    return accum;
};