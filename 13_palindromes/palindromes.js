const palindromes = function (string) {

    let new_string= string.split("")
    .filter((a)=>a.match(/[A-Za-z0-9]/))
    .join("");

    let reversed = new_string.split('')
    .reverse()
    .join('');

    if (new_string.toLowerCase() === reversed.toLowerCase()){
        return true
    }
    else{
        return false
    }

};



// // Do not edit below this line
module.exports = palindromes;
