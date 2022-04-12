/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function(s) {
    let absentCnt = 0;
    let ch = [];
    
    for(let x of s) {
        if(x === 'A') {
            absentCnt++;
            ch = [];
        }
        if(x === 'P') ch = [];
        if(x === 'L') ch.push('L');
        if(ch.length === 3) return false;
    }
    
    if(absentCnt > 1) return false;
    else return true;
};