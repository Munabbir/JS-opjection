// function gatSumArray(numbers){
//     console.log(numbers);
// }
// var mynumber = [12, 22, 33, 44, 55, 66, 77, 88, 99];

// gatSumArray(mynumber)

function gatSumArray(numbers){
    let sum = 0;
    for(let i  = 0; i < numbers.length; i++){
        var index = i;
        var element = numbers[index]
        sum = sum + element
        // console.log(index, element, sum);
    }
    return sum;
}




function gateOddNumberOfArray(numbers){
    var oddNumber = [];
    for(let i = 0; i < numbers.length; i++){
       var index = i;
       var element = numbers[index]
       if(element % 2 !==0){
           console.log(index, element);
           oddNumber.push(element)

       }
    }
    return oddNumber;
}

var mynumber = [12, 22, 33, 44, 55, 66, 77, 88, 99];

gatSumArray(mynumber)
 var oddNumber = gateOddNumberOfArray(mynumber)
 console.log(oddNumber);