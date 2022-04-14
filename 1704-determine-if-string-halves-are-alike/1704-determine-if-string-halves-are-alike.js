/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function(s) {
    const str1 = s.slice(0, s.length / 2).toLowerCase();
    const str2 = s.slice(s.length / 2, s.length).toLowerCase();
    
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    
    let cnt1 = 0;
    let cnt2 = 0;
    for(let i = 0; i < str1.length; i++) {
        if(vowels.includes(str1[i])) cnt1++;
        if(vowels.includes(str2[i])) cnt2++;      
    }
    
    return cnt1 === cnt2
};