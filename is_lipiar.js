function isLeapyer (year){
    var remainder = year % 4;
    if(remainder === 0){
        console.log('your year is leap year', year)
    }
    else{
        console.log('your year is not  a leap year', year)
    }
}
isLeapyer(1933)
isLeapyer(1960)