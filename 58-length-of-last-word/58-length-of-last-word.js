var lengthOfLastWord = function(s) {
    const strArr= s.split(' ');
    let lastStr;
    let pt = strArr.length;
    while(pt--) {
        if(strArr[pt] !== '') {
            lastStr = strArr[pt];
            break;
        }
    }
    return lastStr.length;
};