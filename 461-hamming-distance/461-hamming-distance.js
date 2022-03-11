/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
    // return (x^y).toString(2).replace(/0/g, "").length;
    
    let bits = x^y;
    let diff = 0;
    
    while(bits) {
        if(bits & 1) diff++;
        bits = bits >> 1;
    }
    
    return diff;
};