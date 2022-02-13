var addBinary = function(a, b) {
    const parseA = BigInt("0b"+a);
    const parseB = BigInt('0b'+b);
    
    const result = (parseA + parseB).toString(2);
    return result;
};