/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    const arr = String(n).split('');
    let sum = 0;
    let multiple = 1;
   
    for(let x of arr) {
        sum += Number(x);
        multiple *= Number(x);
    }
    
    return multiple - sum;
};