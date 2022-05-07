/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function(s) {
//     let str = '';
//     let stack = [];
    
//     for(let x = 0; x < s.length; x++) {
//         if(stack[stack.length - 1] === ')' && s[x] === ')') {
//             if(s[x + 1] === ')') stack.push(s[x]);
//             else {
//                 stack.shift();
//                 const target = stack.join('');
//                 str += target; 
//                 stack = []    
//             }
//         } else stack.push(s[x]);
//     }
    
//     return str;
    
    let res = ""
    const stack = []
    let i = 0;
    
    for (let j = 0; j < s.length; j++) {
        s[j] === '(' ? stack.push('(') : stack.pop();
        if (!stack.length) {
            res += s.slice(i + 1, j)
            i = j + 1
        }
    }
    return res
};