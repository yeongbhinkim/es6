//교집합
Set.prototype.intersection = function (set) {
    return new Set([...this].filter(ele => set.has(ele)))
}


//합집합
Set.prototype.union = function (set){
    const result = new Set(this); //자신 복사
    for(const value of set){
        result.add(value);
    }
    return result;
}

//차집합
Set.prototype.difference = function (set){
    const result = new Set(this);
    for(const value of set){
        result.delete(value);
    }
    return result;
}

const setA = new Set([1, 2, 3, 4]);
const setB = new Set([2, 4, 5]);

//setA와 setB의 교집합
console.log(setA.intersection(setB));
//setB와 setA의 교집합
console.log(setB.intersection(setA));

//setA와 setB의 합집합
console.log(setA.union(setB));

//setA와 setB의 차집합
console.log(setA.difference(setB));