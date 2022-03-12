/**
 * @param {number} num
 * @return {number}
 */
var minimumSum = function(num) {
    const arr = num.toString().split('').map(num => Number(num));
    const ascendArr = arr.sort();

    let pt1 = 0;
    let pt2 = 1;
    
    let pair1 = [];
    let pair2 = [];
    
    const len = ascendArr.length;
    
    while(pt1 < len || pt2 < len) {
         if(pt1 < len) {
             pair1.push(ascendArr[pt1]);
             pt1 += 2;
         }
         if(pt2 < len) {
             pair2.push(ascendArr[pt2]);
             pt2 += 2;
         }
    }
    
    const sum1 = Number(pair1.join(''));
    const sum2 = Number(pair2.join(''));
    
    return sum1 + sum2;
};