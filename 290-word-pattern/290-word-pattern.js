/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    const str = s.split(' ');
    const sH = new Map();
    const ck1 = new Set(pattern).size;
    const ck2 = new Set(str).size;
    
    if(str.length !== pattern.length || ck1 !== ck2) return false;
    
    for(let i = 0; i < pattern.length; i++) {
        if(!sH.has(pattern[i])) sH.set(pattern[i], str[i])
        else if(sH.get(pattern[i]) !== str[i]) return false;
    }
    return true;
};