const findTheOldest = function (object) {

    let oldest = object.reduce((acc,a)=>{
        
        if(getAge(acc.yearOfBirth,acc.yearOfDeath)> getAge(a.yearOfBirth,a.yearOfDeath)){
            return acc;
        }
        else{
            acc = a;
            return acc;
        }
    },{})

    return(oldest)
};

function getAge(birth,death){
    if ( typeof death === "undefined"){
            death = new Date().getFullYear();
        }
    
    return(death - birth);
}


// Do not edit below this line
module.exports = findTheOldest;
