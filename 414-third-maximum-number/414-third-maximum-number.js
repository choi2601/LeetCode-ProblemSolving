/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    const arr = new Set(nums.sort((a, b) => b - a));
   
    if(arr.size < 3) {
        
            return Array.from(arr)[0];
        
    }
    let pt = 0;
    for(let x of arr) {
        if(pt === 2) return x;
        pt++;
    }
};