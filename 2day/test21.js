const arr = [1, 2, 3,4,5,6];

arr.forEach((curr,Idx,arr) => {
    // console.log(curr,Idx,arr);
    // if(Idx == 1){
    //     console.log(Idx);
    // }

    if(curr%2 == 0){
        console.log(curr);
    }
});