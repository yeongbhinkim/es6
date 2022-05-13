
const f = function (accumulator, currentValue, currentIndex, array) {
    return accumulator + currentValue;
}

const f2 = (accumulator, currentValue, currentIndex, array) => {
    return accumulator + currentValue;
}

const result = [0, 1, 2, 3, 4].reduce(f2);
console.log(result);