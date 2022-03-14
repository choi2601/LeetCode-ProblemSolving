/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function(nums) {
//     const answer = nums.slice();
//     for(let x of nums) {
//         answer.push(x);
//     }
    
//     return answer;
    const len = nums.length;
    let pt = 0;
    while(pt < len) {
        nums[pt + len] = nums[pt];
        pt++;
    }
    
    return nums;
};