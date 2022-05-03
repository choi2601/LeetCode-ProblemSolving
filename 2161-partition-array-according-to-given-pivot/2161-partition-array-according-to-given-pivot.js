/**
 * @param {number[]} nums
 * @param {number} pivot
 * @return {number[]}
 */
var pivotArray = function(nums, pivot) {
    let lt = 0;
    
    const left = [];
    const right = [];
    const center = [];
    
    while(lt < nums.length) {
        if(nums[lt] < pivot) left.push(nums[lt]);
        else if(nums[lt] === pivot) center.push(nums[lt]);
        else if(nums[lt] > pivot) right.push(nums[lt]);
        lt++;
    }
    
    return [...left, ...center, ...right];
};