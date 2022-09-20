// function add(number1, number2){
//     console.log(number1, number2);
//     var sum = number1 + number2;
//     return sum;
// }
// var total =  add(80, 20);
// console.log('total', total);
// function bringsingara(money){
//     var singaraPrice = 10;
// var quantity = money / singaraPrice;
// return quantity;
// }
// var singaras = bringsingara(200);
// console.log('Eating singaras :', singaras);


// function bringsingara(money){
//     var singaraPrice = 10;
//     var quantity = money / singaraPrice;
//     return quantity;
// }
// var singaras = bringsingara(200);
// console.log('ami ekai ai', singaras, 'khabo');

// function gatAverag (assingment1, assingment2, assingment3){
//     var total = assingment1 + assingment2 + assingment3;
//     var avareg = total / 3;
//     return avareg;
// }
// var assingment1Mark = 60;
// var assingment2Mark = 40;
// var assingment3Mark = 59;
// var myAvareg = gatAverag (assingment1Mark, assingment2Mark, assingment3Mark);
// console.log(myAvareg);

function totalAssingment (assingment1, assingment2, assingment3){
    var total = assingment1 + assingment2 + assingment3;
    var totalMark = total / 3;
    return totalMark;
}
var assingment1Mark = 60;
var assingment2Mark = 58;
var assingment3Mark = 59;
var totalAvareg = totalAssingment (assingment1Mark, assingment2Mark, assingment3Mark);
console.log(totalAvareg);