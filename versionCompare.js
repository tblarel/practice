var compareVersion = function (version1, version2) {
    var v1Arr = version1.split('.');
    var v2Arr = version2.split('.');
    var length1 = v1Arr.length;
    var length2 = v2Arr.length;
    var i = Math.min(length1, length2);
    while (i > 0) {
        var v1Ele = parseInt(v1Arr.shift());
        var v2Ele = parseInt(v2Arr.shift());
        if (v1Ele > v2Ele) {
            return 1;
        } else if (v1Ele < v2Ele) {
            return -1;
        }
        i--;
    }
    if (length1 > length2) {
        if (parseInt(v1Arr.join('')) > 0) {
            return 1;
        }
    } else if (length1 < length2) {
        if (parseInt(v2Arr.join('')) > 0) {
            return -1;
        }
    }
    return 0;
};

console.log(compareVersion('16.3.0','15.3.1'));