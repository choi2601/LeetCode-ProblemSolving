var plusOne = function(digits) {
    // for(let i = digits.length - 1; i >= 0; i--) {
    //     digits[i]++;
    //     if(digits[i] > 9) {
    //         digits[i] = 0;
    //     } else return digits;
    // }
    // digits.unshift(1);
    // return digits;
    
    const arr = (BigInt([...digits].join('')) + BigInt(1)).toString().split('');
    const result = arr.map((el) => parseInt(el));
    return result;
}; 

// parseInt => BigInt