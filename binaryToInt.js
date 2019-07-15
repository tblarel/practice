// Write a function that converts a binary input string and outputs it
// as an integer. Input is given as '100010010'.

function binaryToInt(val) {
    let digits = val.split('');
    let value = 0;
    let length = digits.length;
    let j = 0;
    for(let i = length-1; i >= 0; i--) {
        if(digits[i] === '1') {
            let valToAdd = Math.pow(2,j);
            value += valToAdd;
        }
        j++;
    }
    return value;
}

console.log(binaryToInt('1110'));