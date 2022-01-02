var maxProfit = function(prices) {
    let minProfit = Number.MAX_SAFE_INTEGER;
    let maxProfit = 0;
    
    for(let i = 0; i < prices.length; i++) {
        if(prices[i] < minProfit) minProfit = prices[i];
        else if(prices[i] - minProfit > maxProfit) maxProfit = prices[i] - minProfit;
    }
    
    return maxProfit;
};