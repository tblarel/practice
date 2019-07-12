var values = {  
    'I': 1, 
    'V': 5, 
    'X': 10, 
    'L': 50, 
    'C': 100, 
    'D': 500, 
    'M': 1000
}

var romanToInt = function (s) {
    total = 0;
    for (let i = 0; i < s.length; i ++) {
        if(values[s[i]] < values[s[i+1]]) {
            total -= values[s[i]];
        } else {
            total += values[s[i]];
        }
    }
    return total;
};

console.log(romanToInt("XCII"));

