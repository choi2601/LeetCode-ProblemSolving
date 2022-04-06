/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function(s) {
    const arr = s.split(' ');
    arr.sort((a, b) => Number(a[a.length - 1] - b[b.length - 1]));
    
    let ansewr = '';
    const regExp = /[0-9]/g;
    
    for(let i = 0; i < arr.length; i++) {
        ansewr += `${arr[i].replace(regExp, '')} `;
    }
    
    return ansewr.trim();
};