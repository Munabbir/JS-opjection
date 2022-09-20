function maltiAplicationNumber(number){
    let result = 1;
    for(let i = 1; i <= number; i++){
        result = result * i;
    }
    return result;
}
var result = maltiAplicationNumber(7)
console.log(result);