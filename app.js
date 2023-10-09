
const sum = (a,b) => {
    return a + b
}

console.log(sum(7,3));



let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

const fromDollarToYen = (valueInDollar)=>{
    let valueinYen = valueInDollar * 127.9;
    return valueinYen;

}

const fromEuroToDollar = (valueInEuro)=>{
    let valueInDollar = valueInEuro * 1.2;
    return valueInDollar;

}

const fromYenToPound = (valueinYen)=>{
    let valueInLibras = valueinYen * 0.8;
    return valueInLibras;
}

module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };