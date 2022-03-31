/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    
    function callback(n) {
        if(n <= 1) return n;
        else return callback(n - 1) + callback(n - 2);
    }
    
    const answer = callback(n);
    
    return answer;
};