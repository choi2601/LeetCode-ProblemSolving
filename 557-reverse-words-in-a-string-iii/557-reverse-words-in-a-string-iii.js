/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let answer = '';
    const str = s.split(' ');
    
    for(let x of str) {
        answer += `${x.split('').reverse().join('')} `;
    }
    
    return answer.trim();
};