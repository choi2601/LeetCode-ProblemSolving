/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    const set = new Set(nums.sort((a, b) => b - a));
   
    if(set.size < 3) return Array.from(set)[0];
    else return Array.from(set)[2];
    // let pt = 0;
    // for(let x of arr) {
    //     if(pt === 2) return x;
    //     pt++;
    // }
};