/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
    const flippedFn = functions.reverse();
	return function(x) {
       flippedFn.forEach((fn) => {
           x = fn(x);
       })
     return x;
    }
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */