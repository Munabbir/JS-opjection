var shopingCard ={
    Book: '2',
    Sunglaus: '1',
    Kebord: '5',
    Pen: '25',
}
console.log(shopingCard)
var penCound = shopingCard.Pen

var penCound2 = shopingCard['Pen']

var propartij = Object.keys(shopingCard);
var propartijValues = Object.values(shopingCard);
console.log(propartij);
console.log(propartijValues);

shopingCard.Kebord = 15;
console.log(shopingCard);
shopingCard ['Kebord'] = 40;
console.log(shopingCard)