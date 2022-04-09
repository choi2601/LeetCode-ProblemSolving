/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    const cp1 = nums1.length < nums2.length ? nums2 : nums1;
    const cp2 = nums1.length < nums2.length ? nums1 : nums2;
    const diff = cp1.filter(x => cp2.includes(x));
    
    return [...new Set(diff)];
};