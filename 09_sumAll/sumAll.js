const sumAll = function(start,end) {
    let total = 0;
    if ( start < 0 || end <0 || typeof(start) !== "number" || typeof(end) !== "number" || start % 1 !== 0 || end % 1 !==0){
        return "ERROR"
    }

    if( start < end ){
        
        for (i=start; i<=end; i++){
            total += i;
        }
    }
    else{
        
        for (i=end; i<=start; i++){
            total += i;
        }
    }
    return total
};

// Do not edit below this line
module.exports = sumAll;
