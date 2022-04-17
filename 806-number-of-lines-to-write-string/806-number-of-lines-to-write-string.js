/**
 * @param {number[]} widths
 * @param {string} s
 * @return {number[]}
 */
var numberOfLines = function(widths, s) {
    let last = 0;
    let line = 1;

    const base = 'a'.charCodeAt();
    for(let i = 0; i < s.length; i++) {
        const val = widths[s[i].charCodeAt() - base];
        last += val;
        
        if(last > 100) {
            line++;
            last = val;
        }
    }
    
    return [line, last];
};