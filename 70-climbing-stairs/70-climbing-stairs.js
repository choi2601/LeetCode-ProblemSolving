var climbStairs = function(n) {
    if(n === 1) return 1;
    else if(n === 2) return 2;
    
    let dy = Array.from({ length: n + 1 }, () => 0);
    dy[1] = 1;
    dy[2] = 2;
    
    for(let i = 3; i <= n; i++) {
        dy[i] = dy[i - 2] + dy[i - 1];
    }
    
    return dy[n];
};