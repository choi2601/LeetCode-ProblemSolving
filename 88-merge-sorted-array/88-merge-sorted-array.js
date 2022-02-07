var merge = function(nums1, m, nums2, n) {
//     const tmpArr = nums1.slice();
//     let pt1 = (m + n) - 1;
//     let pt2 = 0;
    
//     while(!tmpArr[pt1--]) {
//         nums1.pop();
//         const curNumOfNums2 = nums2[pt2++];
//         let curIndexOfNums1 = nums1.indexOf(curNumOfNums2);
//         if(curIndexOfNums1 === -1) {
//             nums1.splice(nums1.indexOf(0), 0, curNumOfNums2);
//         } else {
//             nums1.splice(curIndexOfNums1, 0, curNumOfNums2);
//         }
//     }
    
//     return nums1;
    // nums1.splice(m, n, ...nums2);
    // nums1.sort((a, b) => a - b);
    // return nums1;
   nums1.splice(m, n);
    
   if(!n) return nums1;
    
   for(let x of nums2) {
       nums1.push(x);
   }
   nums1.sort((a, b) => a - b);
};

