var romanToInt = function(s) {
    let answer = 0;
    const obj = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000,
    }   
    let isAlreadyAcc = false;
    
    for(let i = 0; i < s.length; i++) {
        if(isAlreadyAcc) {
            isAlreadyAcc = false;
            continue;
        }
        const currentRomanVal = obj[s[i]];
        const nextRomanVal = obj[s[i + 1]] ?? 0;
        
        if(currentRomanVal < nextRomanVal) {
            answer += (nextRomanVal - currentRomanVal);
            isAlreadyAcc = true;
        } else answer += currentRomanVal;
        
    }
    return answer;
};