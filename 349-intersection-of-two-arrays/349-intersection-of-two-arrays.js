/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
//     const cp1 = nums1.length < nums2.length ? nums2 : nums1;
//     const cp2 = nums1.length < nums2.length ? nums1 : nums2;
//     const diff = cp1.filter(x => cp2.includes(x));
    
//     return [...new Set(diff)];
    const sortedNums1 = nums1.sort((a, b) => a - b);
    const sortedNums2 = nums2.sort((a, b) => a - b);
    
    let pt1 = 0;
    let pt2 = 0;
    
    const diff = [];
    
    while(pt1 < sortedNums1.length && pt2 < sortedNums2.length) {
        if(sortedNums1[pt1] === sortedNums2[pt2]) {
            if(!diff.includes(sortedNums1[pt1])) diff.push(sortedNums1[pt1]);
            pt1++;
            pt2++;
        }
        else if(sortedNums1[pt1] < sortedNums2[pt2]) pt1++;
        else pt2++;
    }
    
    return diff;
};