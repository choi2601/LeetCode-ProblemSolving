/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
//     let goodPair = 0;
    
//     for(let i = 0; i < nums.length; i++) {
//         for(let j = i + 1; j < nums.length; j++) {
//             if(nums[i] === nums[j]) goodPair += 1;
//         }
//     }
    
//     return goodPair;
    const sH = new Map();
    let cnt = 0;
    
    for(let x of nums) {
        if(!sH.has(x)) sH.set(x, 1);
        else {
            cnt += sH.get(x);
            sH.set(x, sH.get(x) + 1);
        }
    }
    
    return cnt;
};