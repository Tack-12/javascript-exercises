const fibonacci = function(index) {
    if (index<0 ){
        return "OOPS"
    }
    let num= fibonacci_seq(index);

    return num

};

function fibonacci_seq(n){
    if (n=== 0) {
        return 0
    }
    else if ( n === 1){
        return 1
    }
    else{
       return  fibonacci_seq(n-1)+fibonacci_seq(n-2)
    }

}


// // Do not edit below this line
module.exports = fibonacci;
