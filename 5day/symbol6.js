Array.prototype[Symbol.for('sum')] = function () {
    return this.reduce((acc, cur, curIdx, arr) => { return acc + cur }, 0)
}

console.dir([1, 2, 3, 4, 5][Symbol.for('sum')]());


// console.dir(Object.getOwnPropertyDescriptors(Array.prototype));
// console.dir(Object.hasOwnProperty(Array.prototype.sum));

