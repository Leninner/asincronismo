function suma(a, b) {
    return a + b;
}

function calc(a, b, callBack) {
    return callBack(a, b);
}

console.log(calc(23, 5, suma));

function date(callBack) {
    console.log(new Date());
    setTimeout(function () {
        let date = new Date();
        callBack(date);
    }, 3000);
}

function printDate(dateNow) {
    console.log(dateNow);
}

date(printDate);
