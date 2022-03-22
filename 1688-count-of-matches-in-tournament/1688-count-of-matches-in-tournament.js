/**
 * @param {number} n
 * @return {number}
 */
var numberOfMatches = function(n) {
    const matched = [];
    
    while(n !== 1) {
        if(n % 2 === 0) {
            n = n / 2;
            matched.push(n);
        } else {
            n = (n - 1) / 2;
            matched.push(n + 1);
        }
    }
    
    if(matched.length === 0) return 0;
    else return matched.reduce((a, b) => a + b);
};