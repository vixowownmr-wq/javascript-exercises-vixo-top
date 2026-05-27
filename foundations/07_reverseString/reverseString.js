const reverseString = function(str) {
    let separarCadena = str.split("");
    let invertirArreglo = separarCadena.reverse();
    let unirCadena = invertirArreglo.join("");

    return unirCadena;



};

// Do not edit below this line
module.exports = reverseString;
