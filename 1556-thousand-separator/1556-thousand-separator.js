/**
 * @param {number} n
 * @return {string}
 */
var thousandSeparator = function(n) {
    const arr = [...n.toString()];
    const answer = [];
    let pt = 1;
    for(let i = arr.length - 1; i >= 0; i--) {
        if(pt % 4 === 0) {
            answer.unshift(`${arr[i]}.`);
            pt = 1;
        } else answer.unshift(arr[i]);
        pt++;
    }
    
    return answer.join('');
};