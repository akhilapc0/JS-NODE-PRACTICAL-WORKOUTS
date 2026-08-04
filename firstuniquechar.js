
function firstUniqueChar(str) {
    let obj = {};

    for (let ch of str) {
        obj[ch] = (obj[ch] || 0) + 1;
    }

    for (let ch of str) {
        if (obj[ch] === 1) {
            return ch;
        }
    }

    return "No unique character";
}

console.log(firstUniqueChar("google"));