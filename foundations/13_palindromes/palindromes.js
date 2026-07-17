const palindromes = function (string) {
    let cleanString = string.toLowerCase();
    cleanString = cleanString.replace(/[^a-z0-9]/g, "");
    let reverseString = cleanString.split("");
    reverseString.reverse();
    reverseString = reverseString.join("");
    return reverseString === cleanString;

};

// Do not edit below this line
module.exports = palindromes;
