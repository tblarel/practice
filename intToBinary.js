function intToBinary(num) {
    var digit = num;
    var binary = [];
    let leadingZeroes = true;
    while(num >= 0 && digit >= 0) {
        let digitVal = Math.pow(2,digit);
        if(num % digitVal < num) {
           binary.push(1);
           num -= Math.pow(2,digit);
           leadingZeroes = false;
        } else if(!leadingZeroes) {
           binary.push(0);
        }
        digit -=1;
    }
    return binary.join('');
}

console.log(intToBinary(11));


