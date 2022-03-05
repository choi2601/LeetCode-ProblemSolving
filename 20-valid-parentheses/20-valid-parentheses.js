var isValid = function(s) {
    let answer = true;
    const regExp = /[([{]/;
    const pair = {
        ')': '(',
        '}': '{',
        ']': '['
    }
    const tmp = [];
    
    for(let i = 0; i < s.length; i++) {
        if(regExp.test(s[i])) {
            tmp.push(s[i]);
        } else {
            if(i === s.length - 1 && s.length === 0) return false;
            if(pair[s[i]] !== tmp[tmp.length - 1]) return false;
            else tmp.pop();
        }
    }
    
    if(tmp.length !== 0) answer = false;
    return answer;
};