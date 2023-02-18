/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function(arr) {
    const answer = [];
    while(arr.length > 0) {
        if(arr.length === 1) {
            answer.push(-1);
            break;
        } 
        arr.shift();
        answer.push(Math.max(...arr));
    }
    return answer;
};