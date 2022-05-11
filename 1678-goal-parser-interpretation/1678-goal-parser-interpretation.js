/**
 * @param {string} command
 * @return {string}
 */
var interpret = function(command) {
    command = command.replaceAll('()', 'o');
    
    let answer = '';
    
    for(let x of command) {
        if(x === '(' || x === ')') continue;
        else answer += x;
    }
    
    return answer;
};