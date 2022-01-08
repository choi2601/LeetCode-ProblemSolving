var maxSubArray = function(nums) {
    // O(n)
//     let max = Number.MIN_SAFE_INTEGER;
//     let tmp = [];
    
//     for(let i = 0; i < nums.length; i++) {
//         let currentSum = 0;
//         tmp.push(nums[i]);
//         max = Math.max(max, nums[i]);
        
//         for(let j = i + 1; j < nums.length; j++) {
//             tmp.push(nums[j]);
//             currentSum = tmp.reduce((a, b) => a + b);
//             if(max < currentSum) max = currentSum;
//         }
//         tmp = [];
//     }
    
//     return max;
    
    let prev = 0;
    let max = Number.MIN_SAFE_INTEGER;
    
    for(let i = 0; i < nums.length; i++) {
        prev = Math.max(prev + nums[i], nums[i]);
        max = Math.max(prev, max);
    }
    
    return max;
};